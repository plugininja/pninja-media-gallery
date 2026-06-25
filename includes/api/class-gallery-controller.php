<?php

namespace Pninja\API;

use WP_REST_Request;
use Pninja\Models\GalleryModel;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );
/**
 * REST controller for /galleries endpoints.
 *
 * GET    /pninja-media-gallery/v1/galleries         — list galleries
 * POST   /pninja-media-gallery/v1/galleries         — create gallery
 * GET    /pninja-media-gallery/v1/galleries/{id}    — get single
 * PUT    /pninja-media-gallery/v1/galleries/{id}    — update
 * DELETE /pninja-media-gallery/v1/galleries/{id}    — delete
 */
class GalleryController extends BaseController {

	protected $rest_base = 'galleries';

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
					'callback'            => array( $this, 'get_items' ),
					'permission_callback' => array( $this, 'public_permissions_check' ),
					'args'                => array(
						'per_page' => array(
							'type'    => 'integer',
							'default' => 20,
							'minimum' => 1,
							'maximum' => 100,
						),
						'page'     => array(
							'type'    => 'integer',
							'default' => 1,
							'minimum' => 1,
						),
					),
				),
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'create_item' ),
					'permission_callback' => array( $this, 'permissions_check' ),
					'args'                => $this->get_item_schema_args(),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/(?P<id>[\d]+)',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_item' ),
					'permission_callback' => array( $this, 'public_permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update_item' ),
					'permission_callback' => array( $this, 'permissions_check' ),
					'args'                => $this->get_item_schema_args(),
				),
				array(
					'methods'             => \WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_item' ),
					'permission_callback' => array( $this, 'permissions_check' ),
				),
			)
		);
	}

	/**
	 * GET /galleries — paginated list.
	 *
	 * Unauthenticated callers receive only published galleries.
	 * Users with edit_posts receive all galleries (admin SPA).
	 *
	 * @param  WP_REST_Request $request
	 * @return \WP_REST_Response
	 */
	public function get_items( WP_REST_Request $request ) {
		$per_page = $request->get_param( 'per_page' );
		$page     = $request->get_param( 'page' );

		$model  = new GalleryModel();
		$result = current_user_can( 'edit_posts' )
			? $model->get_list( $per_page, $page )
			: $model->get_published( $per_page, $page );

		return $this->successResponse(
			array(
				'items' => $result['items'],
				'meta'  => array(
					'total'    => $result['total'],
					'page'     => $page,
					'per_page' => $per_page,
					'pages'    => (int) ceil( $result['total'] / $per_page ),
				),
			)
		);
	}

	/**
	 * GET /galleries/{id} — single gallery with images.
	 *
	 * Unauthenticated callers may only retrieve published galleries.
	 *
	 * @param  WP_REST_Request $request
	 * @return \WP_REST_Response
	 */
	public function get_item( WP_REST_Request $request ) {
		$id      = absint( $request->get_param( 'id' ) );
		$model   = new GalleryModel();
		$gallery = $model->find( $id );

		if ( ! $gallery ) {
			return $this->errorResponse( 'pninja_not_found', __( 'Gallery not found.', 'pninja-media-gallery' ), 404 );
		}

		// Non-editors must not see unpublished galleries.
		if ( 'publish' !== $gallery->status && ! current_user_can( 'edit_posts' ) ) {
			return $this->errorResponse( 'pninja_not_found', __( 'Gallery not found.', 'pninja-media-gallery' ), 404 );
		}

		return $this->successResponse( $gallery );
	}

	/**
	 * POST /galleries — create new gallery.
	 *
	 * @param  WP_REST_Request $request
	 * @return \WP_REST_Response
	 */
	public function create_item( WP_REST_Request $request ) {
		$data  = $this->extract_item_data( $request );
		$model = new GalleryModel();
		$id    = $model->create( $data );

		if ( is_wp_error( $id ) ) {
			return $this->errorResponse( $id->get_error_code(), $id->get_error_message() );
		}

		$gallery = $model->find( $id );
		do_action( 'pninja_gallery_created', $id, $data );

		return $this->successResponse( $gallery, 201 );
	}

	/**
	 * PUT /galleries/{id} — update gallery.
	 *
	 * @param  WP_REST_Request $request
	 * @return \WP_REST_Response
	 */
	public function update_item( WP_REST_Request $request ) {
		$id      = absint( $request->get_param( 'id' ) );
		$model   = new GalleryModel();
		$gallery = $model->find( $id );

		if ( ! $gallery ) {
			return $this->errorResponse( 'pninja_not_found', __( 'Gallery not found.', 'pninja-media-gallery' ), 404 );
		}

		$data   = $this->extract_item_data( $request );
		$result = $model->update( $id, $data );

		if ( is_wp_error( $result ) ) {
			return $this->errorResponse( $result->get_error_code(), $result->get_error_message() );
		}

		do_action( 'pninja_gallery_updated', $id, $data );

		return $this->successResponse( $model->find( $id ) );
	}

	/**
	 * DELETE /galleries/{id}.
	 *
	 * @param  WP_REST_Request $request
	 * @return \WP_REST_Response
	 */
	public function delete_item( WP_REST_Request $request ) {
		$id      = absint( $request->get_param( 'id' ) );
		$model   = new GalleryModel();
		$gallery = $model->find( $id );

		if ( ! $gallery ) {
			return $this->errorResponse( 'pninja_not_found', __( 'Gallery not found.', 'pninja-media-gallery' ), 404 );
		}

		$model->delete( $id );
		do_action( 'pninja_gallery_deleted', $id );

		return $this->successResponse( array( 'deleted' => true, 'id' => $id ) );
	}

	// -------------------------------------------------------------------------
	// Helpers
	// -------------------------------------------------------------------------

	/**
	 * Extract and sanitize item data from request.
	 *
	 * @param  WP_REST_Request $request
	 * @return array
	 */
	private function extract_item_data( WP_REST_Request $request ) {
		$raw = array(
			'title'               => sanitize_text_field( (string) $request->get_param( 'title' ) ),
			'description'         => wp_kses_post( (string) $request->get_param( 'description' ) ),
			'layout'              => sanitize_key( (string) $request->get_param( 'layout' ) ),
			'columns'             => absint( $request->get_param( 'columns' ) ),
			'status'              => sanitize_key( (string) $request->get_param( 'status' ) ),
			// Style.
			'gap'                 => absint( $request->get_param( 'gap' ) ),
			'border_radius'       => absint( $request->get_param( 'border_radius' ) ),
			'shadow'              => sanitize_key( (string) $request->get_param( 'shadow' ) ),
			'hover_effect'        => sanitize_key( (string) $request->get_param( 'hover_effect' ) ),
			'overlay_style'       => sanitize_key( (string) $request->get_param( 'overlay_style' ) ),
			// Lightbox.
			'lightbox'            => (int) filter_var( $request->get_param( 'lightbox' ), FILTER_VALIDATE_BOOLEAN ),
			'lightbox_transition' => sanitize_key( (string) $request->get_param( 'lightbox_transition' ) ),
			'lightbox_captions'   => (int) filter_var( $request->get_param( 'lightbox_captions' ), FILTER_VALIDATE_BOOLEAN ),
			'lightbox_nav'        => (int) filter_var( $request->get_param( 'lightbox_nav' ), FILTER_VALIDATE_BOOLEAN ),
			// Advanced.
			'lazy_loading'        => (int) filter_var( $request->get_param( 'lazy_loading' ), FILTER_VALIDATE_BOOLEAN ),
			'image_quality'       => sanitize_key( (string) $request->get_param( 'image_quality' ) ),
			'tablet_columns'      => absint( $request->get_param( 'tablet_columns' ) ),
			'mobile_columns'      => absint( $request->get_param( 'mobile_columns' ) ),
			'css_class'           => sanitize_html_class( (string) $request->get_param( 'css_class' ) ),
		);

		// Drop keys whose param was never sent (null = absent from request).
		return array_filter(
			$raw,
			static function ( $v, $k ) use ( $request ) {
				return null !== $request->get_param( $k );
			},
			ARRAY_FILTER_USE_BOTH
		);
	}

	/**
	 * Schema args for create/update.
	 *
	 * @return array[]
	 */
	private function get_item_schema_args() {
		return array(
			'title'               => array( 'type' => 'string', 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ),
			'description'         => array( 'type' => 'string', 'default' => '' ),
			'layout'              => array( 'type' => 'string', 'default' => 'grid', 'enum' => array( 'grid', 'masonry', 'justified', 'album' ) ),
			'columns'             => array( 'type' => 'integer', 'default' => 3, 'minimum' => 1, 'maximum' => 6 ),
			'gap'                 => array( 'type' => 'integer', 'default' => 8, 'minimum' => 0, 'maximum' => 60 ),
			'border_radius'       => array( 'type' => 'integer', 'default' => 8, 'minimum' => 0, 'maximum' => 50 ),
			'shadow'              => array( 'type' => 'string', 'default' => 'small', 'enum' => array( 'none', 'small', 'medium', 'large' ) ),
			'hover_effect'        => array( 'type' => 'string', 'default' => 'zoom', 'enum' => array( 'none', 'zoom', 'fade', 'slide' ) ),
			'overlay_style'       => array( 'type' => 'string', 'default' => 'dark-gradient', 'enum' => array( 'none', 'dark', 'dark-gradient', 'light', 'color' ) ),
			'lightbox'            => array( 'type' => 'boolean', 'default' => true ),
			'lightbox_transition' => array( 'type' => 'string', 'default' => 'fade', 'enum' => array( 'fade', 'slide', 'zoom' ) ),
			'lightbox_captions'   => array( 'type' => 'boolean', 'default' => true ),
			'lightbox_nav'        => array( 'type' => 'boolean', 'default' => true ),
			'lazy_loading'        => array( 'type' => 'boolean', 'default' => true ),
			'image_quality'       => array( 'type' => 'string', 'default' => 'high', 'enum' => array( 'low', 'medium', 'high', 'original' ) ),
			'tablet_columns'      => array( 'type' => 'integer', 'default' => 2, 'minimum' => 1, 'maximum' => 4 ),
			'mobile_columns'      => array( 'type' => 'integer', 'default' => 1, 'minimum' => 1, 'maximum' => 3 ),
			'css_class'           => array( 'type' => 'string', 'default' => '' ),
			'status'              => array( 'type' => 'string', 'default' => 'publish', 'enum' => array( 'publish', 'draft' ) ),
		);
	}
}
