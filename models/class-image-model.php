<?php
namespace Pninja\Models;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * Model for the pninja_images table.
 */
class ImageModel extends BaseModel {

	protected $table_name = 'pninja_images';

	/**
	 * Return all images for a gallery, ordered by sort_order.
	 *
	 * @param  int $gallery_id
	 * @return object[]
	 */
	public function get_by_gallery( $gallery_id ) {
		$sql = $this->db->prepare(
			"SELECT * FROM {$this->table()} WHERE gallery_id = %d ORDER BY sort_order ASC, id ASC",
			absint( $gallery_id )
		);
		return $this->db->get_results( $sql ); // phpcs:ignore
	}

	/**
	 * Delete all images belonging to a gallery (cascade helper).
	 *
	 * @param  int $gallery_id
	 * @return int Number of rows deleted.
	 */
	public function delete_by_gallery( $gallery_id ) {
		return (int) $this->db->delete(
			$this->table(),
			array( 'gallery_id' => absint( $gallery_id ) )
		);
	}

	/**
	 * Count images in a gallery.
	 *
	 * @param  int $gallery_id
	 * @return int
	 */
	public function count_by_gallery( $gallery_id ) {
		$sql = $this->db->prepare(
			"SELECT COUNT(*) FROM {$this->table()} WHERE gallery_id = %d",
			absint( $gallery_id )
		);
		return (int) $this->db->get_var( $sql ); // phpcs:ignore
	}
}
