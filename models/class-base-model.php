<?php
namespace Pninja\Models;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

use WP_Error;

/**
 * Base model — thin active-record-style wrapper around $wpdb.
 * All concrete models must set $table_name (without $wpdb->prefix).
 */
abstract class BaseModel {

	/** @var string DB table name without prefix, e.g. pninja_galleries */
	protected $table_name = '';

	/** @var \wpdb */
	protected $db;

	public function __construct() {
		global $wpdb;
		$this->db = $wpdb;
	}

	/**
	 * Return the prefixed table name.
	 *
	 * @return string
	 */
	protected function table() {
		return $this->db->prefix . $this->table_name;
	}

	/**
	 * Find a single record by primary key.
	 *
	 * @param  int $id
	 * @return object|null
	 */
	public function find( $id ) {
		$id  = absint( $id );
		$sql = $this->db->prepare( "SELECT * FROM {$this->table()} WHERE id = %d LIMIT 1", $id );
		return $this->db->get_row( $sql ); // phpcs:ignore
	}

	/**
	 * Insert a new row.
	 *
	 * @param  array $data Associative array of column => value.
	 * @return int|WP_Error Inserted row ID on success, WP_Error on failure.
	 */
	public function create( array $data ) {
		$result = $this->db->insert( $this->table(), $data );

		if ( false === $result ) {
			return new WP_Error(
				'pninja_db_insert_error',
				$this->db->last_error ?: sprintf(
					/* translators: %s: table name */
					__( 'Failed to insert into %s.', 'pninja-media-gallery' ),
					esc_html( $this->table() )
				)
			);
		}

		$id = (int) $this->db->insert_id;

		if ( 0 === $id ) {
			// Table exists but has no AUTO_INCREMENT id column — schema is broken.
			return new WP_Error(
				'pninja_db_no_id',
				sprintf(
					/* translators: %s: table name */
					__( 'Insert into %s succeeded but returned no ID. The table schema may be incorrect — please deactivate and reactivate the plugin.', 'pninja-media-gallery' ),
					esc_html( $this->table() )
				)
			);
		}

		return $id;
	}

	/**
	 * Update columns for an existing row.
	 *
	 * @param  int   $id
	 * @param  array $data
	 * @return bool|WP_Error
	 */
	public function update( $id, array $data ) {
		$result = $this->db->update(
			$this->table(),
			$data,
			array( 'id' => absint( $id ) )
		);

		if ( false === $result ) {
			return new WP_Error(
				'pninja_db_update_error',
				$this->db->last_error ?: __( 'Database update failed.', 'pninja-media-gallery' )
			);
		}

		return true;
	}

	/**
	 * Delete a row by primary key.
	 *
	 * @param  int $id
	 * @return bool
	 */
	public function delete( $id ) {
		return (bool) $this->db->delete( $this->table(), array( 'id' => absint( $id ) ) );
	}

	/**
	 * Return a paginated list of rows.
	 *
	 * @param  int $per_page
	 * @param  int $page     1-indexed.
	 * @return array { items: object[], total: int }
	 */
	public function get_list( $per_page = 20, $page = 1 ) {
		$per_page = max( 1, absint( $per_page ) );
		$page     = max( 1, absint( $page ) );
		$offset   = ( $page - 1 ) * $per_page;

		$sql   = $this->db->prepare(
			"SELECT * FROM {$this->table()} ORDER BY id DESC LIMIT %d OFFSET %d",
			$per_page,
			$offset
		);
		$items = $this->db->get_results( $sql ); // phpcs:ignore

		$total = (int) $this->db->get_var( "SELECT COUNT(*) FROM {$this->table()}" ); // phpcs:ignore

		return compact( 'items', 'total' );
	}
}
