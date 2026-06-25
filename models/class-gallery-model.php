<?php
namespace Pninja\Models;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * Model for the pninja_galleries table.
 */
class GalleryModel extends BaseModel {

	protected $table_name = 'pninja_galleries';

	/**
	 * Find gallery by slug.
	 *
	 * @param  string $slug
	 * @return object|null
	 */
	public function find_by_slug( $slug ) {
		$sql = $this->db->prepare(
			"SELECT * FROM {$this->table()} WHERE slug = %s LIMIT 1",
			sanitize_title( $slug )
		);
		return $this->db->get_row( $sql ); // phpcs:ignore
	}

	/**
	 * Create a gallery, auto-generating slug from title.
	 *
	 * @param  array $data
	 * @return int|\WP_Error
	 */
	public function create( array $data ) {
		if ( empty( $data['slug'] ) ) {
			$data['slug'] = $this->unique_slug( $data['title'] );
		}

		$data['author_id'] = $data['author_id'] ?? get_current_user_id();
		$data['status']    = in_array( $data['status'] ?? 'publish', array( 'publish', 'draft' ), true )
			? $data['status']
			: 'publish';

		return parent::create( $data );
	}

	/**
	 * List only published galleries.
	 *
	 * @param  int $per_page
	 * @param  int $page
	 * @return array
	 */
	/**
	 * Return a paginated list with per-gallery image counts and preview images included.
	 *
	 * Overrides BaseModel::get_list() so the gallery list API always
	 * returns an `image_count` and `preview_images` field without extra REST calls.
	 *
	 * @param  int $per_page
	 * @param  int $page
	 * @return array { items: object[], total: int }
	 */
	public function get_list( $per_page = 20, $page = 1 ) {
		$per_page = max( 1, absint( $per_page ) );
		$page     = max( 1, absint( $page ) );
		$offset   = ( $page - 1 ) * $per_page;
		$images   = $this->db->prefix . 'pninja_images';

		$sql = $this->db->prepare(
			"SELECT g.*,
				( SELECT COUNT(*) FROM {$images} i WHERE i.gallery_id = g.id ) AS image_count,
				( SELECT SUBSTRING_INDEX(
				      GROUP_CONCAT( src ORDER BY sort_order ASC, id ASC SEPARATOR '|||' ),
				      '|||',
				      4
				  )
				  FROM {$images}
				  WHERE gallery_id = g.id
				) AS preview_images_raw
			 FROM {$this->table()} g
			 ORDER BY g.id DESC
			 LIMIT %d OFFSET %d",
			$per_page,
			$offset
		);

		$items = $this->db->get_results( $sql ); // phpcs:ignore
		$total = (int) $this->db->get_var( "SELECT COUNT(*) FROM {$this->table()}" ); // phpcs:ignore

		// Convert preview_images_raw string → array and remove raw field.
		foreach ( $items as $item ) {
			$item->preview_images = ! empty( $item->preview_images_raw )
				? explode( '|||', $item->preview_images_raw )
				: array();
			unset( $item->preview_images_raw );
		}

		return compact( 'items', 'total' );
	}

	public function get_published( $per_page = 20, $page = 1 ) {
		$per_page = max( 1, absint( $per_page ) );
		$page     = max( 1, absint( $page ) );
		$offset   = ( $page - 1 ) * $per_page;

		$sql   = $this->db->prepare(
			"SELECT * FROM {$this->table()} WHERE status = 'publish' ORDER BY id DESC LIMIT %d OFFSET %d",
			$per_page,
			$offset
		);
		$items = $this->db->get_results( $sql ); // phpcs:ignore
		$total = (int) $this->db->get_var(
			"SELECT COUNT(*) FROM {$this->table()} WHERE status = 'publish'" // phpcs:ignore
		);

		return compact( 'items', 'total' );
	}

	// -------------------------------------------------------------------------

	/**
	 * Generate a unique slug, appending numeric suffix if needed.
	 *
	 * @param  string $title
	 * @return string
	 */
	private function unique_slug( $title ) {
		$base    = sanitize_title( $title );
		$slug    = $base;
		$counter = 2;

		while ( $this->find_by_slug( $slug ) ) {
			$slug = $base . '-' . $counter;
			$counter++;
		}

		return $slug;
	}
}
