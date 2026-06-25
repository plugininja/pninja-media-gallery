<?php

namespace Pninja\API;

use WP_REST_Request;
use WP_REST_Response;
use WP_Error;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * Abstract base REST controller.
 * All controllers extend this class instead of WP_REST_Controller directly.
 */
abstract class BaseController {

	/** @var string REST namespace, e.g. pninja-media-gallery/v1 */
	protected $namespace = PNINJA_REST_NS;

	/** @var string Route base, e.g. galleries */
	protected $rest_base = '';

	/**
	 * Register this controller's routes.
	 * Implement in each concrete controller.
	 *
	 * @return void
	 */
	abstract public function register_routes();

	/**
	 * Build a success WP_REST_Response.
	 *
	 * @param  mixed $data
	 * @param  int   $status HTTP status code.
	 * @return WP_REST_Response
	 */
	protected function successResponse( $data, $status = 200 ) {
		return new WP_REST_Response(
			array(
				'success' => true,
				'data'    => $data,
			),
			$status
		);
	}

	/**
	 * Build an error WP_REST_Response.
	 *
	 * @param  string $code    Machine-readable error code.
	 * @param  string $message Human-readable message.
	 * @param  int    $status  HTTP status code.
	 * @return WP_REST_Response
	 */
	protected function errorResponse( $code, $message, $status = 400 ) {
		return new WP_REST_Response(
			array(
				'success' => false,
				'code'    => esc_html( $code ),
				'message' => esc_html( $message ),
			),
			$status
		);
	}

	/**
	 * Default permission callback — requires logged-in user with edit_posts cap.
	 *
	 * @param  WP_REST_Request $request
	 * @return bool|WP_Error
	 */
	public function permissions_check( WP_REST_Request $request ) {
		if ( ! current_user_can( 'edit_posts' ) ) {
			return new WP_Error(
				'pninja_rest_forbidden',
				__( 'You do not have permission to perform this action.', 'pninja-media-gallery' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}
		return true;
	}

	/**
	 * Admin-only permission callback — requires manage_options.
	 * Use for plugin-wide settings that should be restricted to site administrators.
	 *
	 * @param  WP_REST_Request $request
	 * @return bool|WP_Error
	 */
	public function admin_permissions_check( WP_REST_Request $request ) {
		if ( ! current_user_can( 'manage_options' ) ) {
			return new WP_Error(
				'pninja_rest_forbidden',
				__( 'You do not have permission to perform this action.', 'pninja-media-gallery' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}
		return true;
	}

	/**
	 * Public read-only permission callback.
	 *
	 * @return true
	 */
	public function public_permissions_check() {
		return true;
	}
}
