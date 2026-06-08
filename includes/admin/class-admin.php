<?php

namespace Pnpnd\NG\Admin;

use Pnpnd\NG\Traits\Singleton;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * Admin UI — registers the menu page and renders the React SPA shell.
 *
 * Asset enqueuing is handled centrally by Enqueue::admin_enqueue().
 */
class Admin {

	use Singleton;

	/**
	 * Hook into admin actions.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'admin_menu', array( $this, 'register_menu' ) );
	}

	/**
	 * Register the top-level admin menu.
	 *
	 * @return void
	 */
	public function register_menu() {
		// Minimum capability to see the top-level menu matches the lowest-access
		// submenu (gallery CRUD). Settings is locked to manage_options separately.
		add_menu_page(
			__( 'Ninja Gallery', 'ninja-gallery' ),
			__( 'Ninja Gallery', 'ninja-gallery' ),
			'edit_posts',
			'pnpng-admin',
			array( $this, 'render_page' ),
			'dashicons-format-gallery',
			58
		);

		add_submenu_page(
			'pnpng-admin',
			__( 'All Galleries', 'ninja-gallery' ),
			__( 'All Galleries', 'ninja-gallery' ),
			'edit_posts',
			'pnpng-admin',
			array( $this, 'render_page' )
		);

		add_submenu_page(
			'pnpng-admin',
			__( 'Add New Gallery', 'ninja-gallery' ),
			__( 'Add New', 'ninja-gallery' ),
			'edit_posts',
			'pnpng-admin',
			array( $this, 'render_page' )
		);

		add_submenu_page(
			'pnpng-admin',
			__( 'Settings', 'ninja-gallery' ),
			__( 'Settings', 'ninja-gallery' ),
			'manage_options',
			'pnpng-admin',
			array( $this, 'render_page' )
		);
	}

	/**
	 * Render the admin page shell — the React SPA mounts here.
	 *
	 * @return void
	 */
	public function render_page() {
		if ( ! current_user_can( 'edit_posts' ) ) {
			wp_die( esc_html__( 'You do not have permission to access this page.', 'ninja-gallery' ) );
		}
		echo '<div id="' . esc_attr( 'pnpng-admin' ) . '" class="' . esc_attr( 'pnpng-admin-root' ) . '"></div>';
	}

}
