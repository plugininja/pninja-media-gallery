<?php

namespace Pninja;

use Pninja\Traits\Singleton;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

class Enqueue {

	use Singleton;

	public function init(): void {
		add_action( 'admin_enqueue_scripts',   array( $this, 'admin_enqueue' ) );
		add_action( 'wp_enqueue_scripts',      array( $this, 'frontend_enqueue' ) );
		// Register shared chunks for the Gutenberg block editor (all editor pages).
		add_action( 'enqueue_block_editor_assets', array( $this, 'block_editor_enqueue' ) );
	}

	public function block_editor_enqueue(): void {
		$this->register_common_assets();
	}

	public function admin_enqueue( string $hook ): void {
		if ( false === strpos( $hook, 'pninja-admin' ) ) {
			return;
		}

		$this->register_common_assets();
		$this->enqueue_admin_assets();
	}

	public function frontend_enqueue(): void {
		// Always register so handles are available for late/manual enqueue
		// (e.g. shortcodes inside widgets or custom page-builder modules).
		$this->register_common_assets();

		if ( $this->page_has_gallery() ) {
			$this->enqueue_frontend_assets();
		}
	}

	/**
	 * Detect whether the current page contains a Pninja Media Gallery shortcode or block.
	 *
	 * Inspects singular post content only. For other contexts — widgets, page
	 * builders, or dynamically injected shortcodes — use the filter:
	 *
	 *     add_filter( 'pninja_force_enqueue_frontend', '__return_true' );
	 *
	 * @return bool
	 */
	private function page_has_gallery(): bool {
		if ( apply_filters( 'pninja_force_enqueue_frontend', false ) ) {
			return true;
		}

		if ( ! is_singular() ) {
			return false;
		}

		$post = get_post();
		if ( ! $post ) {
			return false;
		}

		return has_shortcode( $post->post_content, 'pninja_gallery' )
			|| has_block( 'pninja-media-gallery/gallery', $post );
	}

	private function register_common_assets(): void {
		$this->register_script( 'runtime' );
		$this->register_script( 'vendors', array( 'pninja-runtime' ) );
		// 'shared' is emitted by webpack splitChunks when code is shared between
		// the admin and frontend entries. Register it only when it exists on disk.
		if ( file_exists( PNINJA_DIR . 'assets/js/shared.js' ) ) {
			$this->register_script( 'shared', array( 'pninja-runtime', 'pninja-vendors' ) );
		}
	}

	private function enqueue_admin_assets(): void {
		wp_enqueue_media();

		$has_shared = wp_script_is( 'pninja-shared', 'registered' );
		$this->enqueue_style( 'admin' );
		$this->enqueue_script( 'admin', array_filter( array( 'pninja-runtime', 'pninja-vendors', $has_shared ? 'pninja-shared' : null ) ) );

		wp_localize_script(
			'pninja-admin',
			'pninjaAdmin',
			array(
				'restUrl'   => esc_url_raw( rest_url( PNINJA_REST_NS ) ),
				'nonce'     => wp_create_nonce( 'wp_rest' ),
				'version'   => PNINJA_VERSION,
				'siteUrl'   => esc_url( home_url() ),
				'assetsUrl' => esc_url( PNINJA_ASSETS_URL ),
				'debug'     => defined( 'WP_DEBUG' ) && WP_DEBUG,
				'layouts'   => pninja_supported_layouts(),
			)
		);
	}

	private function enqueue_frontend_assets(): void {
		$has_shared = wp_script_is( 'pninja-shared', 'registered' );
		$this->enqueue_style( 'frontend' );
		$this->enqueue_script( 'frontend', array_filter( array( 'pninja-runtime', 'pninja-vendors', $has_shared ? 'pninja-shared' : null ) ) );
	}

	private function enqueue_style( string $handle, array $deps = array() ): void {
		// CSS is emitted by webpack alongside JS into assets/js/ — PNINJA_CSS_URL
		// points there explicitly so the intent is clear.
		$style_url = PNINJA_CSS_URL . $handle . '.css';
		wp_enqueue_style( 'pninja-' . $handle, $style_url, $deps, $this->get_asset_version( $handle ) );
	}

	private function register_script( string $handle, array $deps = array() ): void {
		$script_url = PNINJA_ASSETS_URL . $handle . '.js';
		wp_register_script( 'pninja-' . $handle, $script_url, $this->build_dependencies( $handle, $deps ), $this->get_asset_version( $handle ), true );
	}

	private function enqueue_script( string $handle, array $deps = array() ): void {
		$script_url = PNINJA_ASSETS_URL . $handle . '.js';
		wp_enqueue_script( 'pninja-' . $handle, $script_url, $this->build_dependencies( $handle, $deps ), $this->get_asset_version( $handle ), true );
		wp_set_script_translations( 'pninja-' . $handle, 'pninja-media-gallery', PNINJA_DIR . 'languages' );
	}

	private function build_dependencies( string $handle, array $deps ): array {
		$asset = $this->get_asset_metadata( $handle );

		if ( isset( $asset['dependencies'] ) && is_array( $asset['dependencies'] ) ) {
			$deps = array_merge( $deps, $asset['dependencies'] );
		}

		$deps = array_map(
			static function( $dependency ) {
				// Map React package handles to wp-element (works on all WP versions).
				// Note: react-jsx-runtime is intentionally excluded — WP 6.2+ registers it
				// as its own script handle that provides window.ReactJSXRuntime. Merging it
				// into wp-element would leave window.ReactJSXRuntime undefined at runtime.
				if ( in_array( $dependency, array( 'react', 'react-dom' ), true ) ) {
					return 'wp-element';
				}

				return $dependency;
			},
			$deps
		);

		return array_values( array_unique( $deps ) );
	}

	private function get_asset_version( string $handle ): string {
		$asset = $this->get_asset_metadata( $handle );

		return isset( $asset['version'] ) ? (string) $asset['version'] : PNINJA_VERSION;
	}

	private function get_asset_metadata( string $handle ): array {
		static $assets = array();

		if ( isset( $assets[ $handle ] ) ) {
			return $assets[ $handle ];
		}

		$asset_file = PNINJA_DIR . 'assets/js/' . $handle . '.asset.php';
		$assets[ $handle ] = file_exists( $asset_file )
			? require $asset_file
			: array(
				'dependencies' => array(),
				'version'      => PNINJA_VERSION,
			);

		return $assets[ $handle ];
	}
}
