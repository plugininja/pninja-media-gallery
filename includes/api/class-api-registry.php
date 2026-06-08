<?php

namespace Pnpnd\NG\API;

use Pnpnd\NG\Traits\Singleton;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * Registers all REST controllers on rest_api_init.
 */
class ApiRegistry {

	use Singleton;

	/**
	 * Hook into rest_api_init.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'rest_api_init', array( $this, 'register_controllers' ) );
	}

	/**
	 * Instantiate and register all controllers.
	 *
	 * @return void
	 */
	public function register_controllers() {
		$controllers = apply_filters(
			'pnpng_rest_controllers',
			array(
				GalleryController::class,
				ImageController::class,
				SettingsController::class,
			)
		);

		foreach ( $controllers as $controller_class ) {
			/** @var BaseController $controller */
			$controller = new $controller_class();
			$controller->register_routes();
		}
	}
}
