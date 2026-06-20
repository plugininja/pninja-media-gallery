<?php

namespace Pnpnd\NG\API;

use WP_REST_Request;
use Pnpnd\NG\Models\ImageModel;
use Pnpnd\NG\Models\GalleryModel;
defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * REST controller for /galleries/{gallery_id}/images endpoints.
 *
 * GET    /pninja-media-gallery/v1/galleries/{gallery_id}/images
 * POST   /pninja-media-gallery/v1/galleries/{gallery_id}/images
 * PUT    /pninja-media-gallery/v1/galleries/{gallery_id}/images/{id}
 * DELETE /pninja-media-gallery/v1/galleries/{gallery_id}/images/{id}
 * POST   /pninja-media-gallery/v1/galleries/{gallery_id}/images/reorder
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
	 *
	 * Unauthenticated callers may only retrieve images from published galleries.
	 */
	public function get_items( WP_REST_Request $request ) {
		$gallery_id = absint( $request->get_param( 'gallery_id' ) );

		// Prevent public access to images belonging to non-published galleries.
		if ( ! current_user_can( 'edit_posts' ) ) {
			$gallery = ( new GalleryModel() )->find( $gallery_id );
			if ( ! $gallery || 'publish' !== $gallery->status ) {
				return $this->errorResponse( 'pnpng_not_found', __( 'Gallery not found.', 'pninja-media-gallery' ), 404 );
			}
		}

		$model  = new ImageModel();
		$images = $model->get_by_gallery( $gallery_id );

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
			return $this->errorResponse( 'pnpng_invalid_image', __( 'Image source is required.', 'pninja-media-gallery' ) );
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
		$id         = absint( $request->get_param( 'id' ) );
		$gallery_id = absint( $request->get_param( 'gallery_id' ) );
		$model      = new ImageModel();
		$image      = $model->find( $id );

		if ( ! $image ) {
			return $this->errorResponse( 'pnpng_not_found', __( 'Image not found.', 'pninja-media-gallery' ), 404 );
		}

		// Prevent cross-gallery manipulation: image must belong to the gallery in the URL.
		if ( (int) $image->gallery_id !== $gallery_id ) {
			return $this->errorResponse( 'pnpng_not_found', __( 'Image not found.', 'pninja-media-gallery' ), 404 );
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
		$id         = absint( $request->get_param( 'id' ) );
		$gallery_id = absint( $request->get_param( 'gallery_id' ) );
		$model      = new ImageModel();
		$image      = $model->find( $id );

		if ( ! $image ) {
			return $this->errorResponse( 'pnpng_not_found', __( 'Image not found.', 'pninja-media-gallery' ), 404 );
		}

		// Prevent cross-gallery manipulation: image must belong to the gallery in the URL.
		if ( (int) $image->gallery_id !== $gallery_id ) {
			return $this->errorResponse( 'pnpng_not_found', __( 'Image not found.', 'pninja-media-gallery' ), 404 );
		}

		$model->delete( $id );
		do_action( 'pnpng_image_removed', $id );

		return $this->successResponse( array( 'deleted' => true, 'id' => $id ) );
	}

	/**
	 * POST /reorder — update sort_order for a batch of image IDs.
	 *
	 * Every image ID in the batch must belong to the gallery in the URL.
	 * A single foreign ID aborts the entire operation (no partial updates).
	 */
	public function reorder_items( WP_REST_Request $request ) {
		$gallery_id = absint( $request->get_param( 'gallery_id' ) );
		$order      = $request->get_param( 'order' ); // [ { id, sort_order } ]

		if ( ! is_array( $order ) ) {
			return $this->errorResponse( 'pnpng_invalid_data', __( 'Invalid order data.', 'pninja-media-gallery' ) );
		}

		$model      = new ImageModel();
		$normalized = array();

		foreach ( $order as $item ) {
			if ( ! isset( $item['id'], $item['sort_order'] ) ) {
				continue;
			}

			$image_id = absint( $item['id'] );
			$image    = $model->find( $image_id );

			// Reject the batch if any image doesn't exist or belongs to a different gallery.
			if ( ! $image || (int) $image->gallery_id !== $gallery_id ) {
				return $this->errorResponse(
					'pnpng_forbidden',
					__( 'One or more images do not belong to this gallery.', 'pninja-media-gallery' ),
					403
				);
			}

			$normalized[] = array(
				'id'         => $image_id,
				'sort_order' => absint( $item['sort_order'] ),
			);
		}

		foreach ( $normalized as $item ) {
			$model->update( $item['id'], array( 'sort_order' => $item['sort_order'] ) );
		}

		return $this->successResponse( array( 'reordered' => true ) );
	}
}
