<?php

namespace Pnpnd\NG\API;

use WP_REST_Request;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * REST controller for plugin settings.
 *
 * GET  /pninja-media-gallery/v1/settings
 * POST /pninja-media-gallery/v1/settings
 */
class SettingsController extends BaseController {

	protected $rest_base = 'settings';

	/**
	 * {@inheritdoc}
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_settings' ),
					'permission_callback' => array( $this, 'admin_permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'save_settings' ),
					'permission_callback' => array( $this, 'admin_permissions_check' ),
				),
			)
		);
	}

	/**
	 * Return current settings.
	 */
	public function get_settings( WP_REST_Request $request ) {
		return $this->successResponse( get_option( 'pnpng_settings', array() ) );
	}

	/**
	 * Save settings.
	 */
	public function save_settings( WP_REST_Request $request ) {
		$body = $request->get_json_params();
		if ( ! is_array( $body ) ) {
			return $this->errorResponse( 'pnpng_invalid_data', __( 'Invalid settings data.', 'pninja-media-gallery' ) );
		}

		/**
		 * Allowed settings keys mapped to their sanitization callback.
		 * Every value is sanitized before it reaches the database.
		 */
		$allowed_keys = array(
			'default_layout'       => 'sanitize_key',
			'default_columns'      => 'absint',
			'lightbox_enabled'     => 'rest_sanitize_boolean',
			'image_size'           => 'sanitize_key',
			'lazy_load_default'    => 'rest_sanitize_boolean',
			'thumbnail_generation' => 'rest_sanitize_boolean',
			'enable_caching'       => 'rest_sanitize_boolean',
			'keyboard_navigation'  => 'rest_sanitize_boolean',
			'focus_indicators'     => 'rest_sanitize_boolean',
			'reduced_motion'       => 'rest_sanitize_boolean',
		);
		$existing     = get_option( 'pnpng_settings', array() );

		foreach ( $allowed_keys as $key => $sanitize_cb ) {
			if ( array_key_exists( $key, $body ) ) {
				$existing[ $key ] = call_user_func( $sanitize_cb, $body[ $key ] );
			}
		}

		update_option( 'pnpng_settings', $existing );
		do_action( 'pnpng_settings_saved', $existing );

		return $this->successResponse( $existing );
	}
}
