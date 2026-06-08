<?php

namespace Pnpnd\NG\API;

use WP_REST_Request;
use Pnpnd\NG\Models\ImageModel;
defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * REST controller for /galleries/{gallery_id}/images endpoints.
 *
 * GET    /ninja-gallery/v1/galleries/{gallery_id}/images
 * POST   /ninja-gallery/v1/galleries/{gallery_id}/images
 * PUT    /ninja-gallery/v1/galleries/{gallery_id}/images/{id}
 * DELETE /ninja-gallery/v1/galleries/{gallery_id}/images/{id}
 * POST   /ninja-gallery/v1/galleries/{gallery_id}/images/reorder
 */
class ImageController extends BaseController {

	protected $rest_base = 'galleries/(?P<gallery_id>[\d]+)/images';

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
				),
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'create_item' ),
					'permission_callback' => array( $this, 'permissions_check' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/(?P<id>[\d]+)',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update_item' ),
					'permission_callback' => array( $this, 'permissions_check' ),
				),
				array(
					'methods'             => \WP_REST_Server::DELETABLE,
					'callback'            => array( $this, 'delete_item' ),
					'permission_callback' => array( $this, 'permissions_check' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/reorder',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'reorder_items' ),
					'permission_callback' => array( $this, 'permissions_check' ),
				),
			)
		);
	}

	/**
	 * GET images for a gallery.
	 */
	public function get_items( WP_REST_Request $request ) {
		$gallery_id = absint( $request->get_param( 'gallery_id' ) );
		$model      = new ImageModel();
		$images     = $model->get_by_gallery( $gallery_id );

		return $this->successResponse( $images );
	}

	/**
	 * POST — add image to gallery.
	 */
	public function create_item( WP_REST_Request $request ) {
		$gallery_id    = absint( $request->get_param( 'gallery_id' ) );
		$attachment_id = absint( $request->get_param( 'attachment_id' ) );
		$src           = esc_url_raw( $request->get_param( 'src' ) );
		$alt           = sanitize_text_field( $request->get_param( 'alt' ) );
		$caption       = wp_kses_post( $request->get_param( 'caption' ) );

		if ( ! $src && $attachment_id ) {
			$src = wp_get_attachment_url( $attachment_id );
		}

		if ( ! $src ) {
			return $this->errorResponse( 'pnpng_invalid_image', __( 'Image source is required.', 'ninja-gallery' ) );
		}

		$model = new ImageModel();
		$id    = $model->create( array(
			'gallery_id'    => $gallery_id,
			'attachment_id' => $attachment_id,
			'src'           => $src,
			'alt'           => $alt,
			'caption'       => $caption,
		) );

		if ( is_wp_error( $id ) ) {
			return $this->errorResponse( $id->get_error_code(), $id->get_error_message() );
		}

		do_action( 'pnpng_image_added', $id, $gallery_id );

		return $this->successResponse( $model->find( $id ), 201 );
	}

	/**
	 * PUT — update image meta.
	 */
	public function update_item( WP_REST_Request $request ) {
		$id    = absint( $request->get_param( 'id' ) );
		$model = new ImageModel();

		if ( ! $model->find( $id ) ) {
			return $this->errorResponse( 'pnpng_not_found', __( 'Image not found.', 'ninja-gallery' ), 404 );
		}

		$model->update( $id, array(
			'alt'     => sanitize_text_field( $request->get_param( 'alt' ) ),
			'caption' => wp_kses_post( $request->get_param( 'caption' ) ),
			'link'    => esc_url_raw( $request->get_param( 'link' ) ),
		) );

		return $this->successResponse( $model->find( $id ) );
	}

	/**
	 * DELETE — remove image from gallery.
	 */
	public function delete_item( WP_REST_Request $request ) {
		$id    = absint( $request->get_param( 'id' ) );
		$model = new ImageModel();

		if ( ! $model->find( $id ) ) {
			return $this->errorResponse( 'pnpng_not_found', __( 'Image not found.', 'ninja-gallery' ), 404 );
		}

		$model->delete( $id );
		do_action( 'pnpng_image_removed', $id );

		return $this->successResponse( array( 'deleted' => true, 'id' => $id ) );
	}

	/**
	 * POST /reorder — update sort_order for a batch of image IDs.
	 */
	public function reorder_items( WP_REST_Request $request ) {
		$order = $request->get_param( 'order' ); // [ { id, sort_order } ]

		if ( ! is_array( $order ) ) {
			return $this->errorResponse( 'pnpng_invalid_data', __( 'Invalid order data.', 'ninja-gallery' ) );
		}

		$model = new ImageModel();
		foreach ( $order as $item ) {
			if ( isset( $item['id'], $item['sort_order'] ) ) {
				$model->update( absint( $item['id'] ), array( 'sort_order' => absint( $item['sort_order'] ) ) );
			}
		}

		return $this->successResponse( array( 'reordered' => true ) );
	}
}
