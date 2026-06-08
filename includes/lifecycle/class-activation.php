<?php

namespace Pnpnd\NG\Lifecycle;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * Runs on plugin activation and handles schema migrations.
 */
class Activation {

	/**
	 * Entry point called by register_activation_hook().
	 *
	 * @return void
	 */
	public static function init() {
		self::create_tables();
		self::set_defaults();
		flush_rewrite_rules();
		do_action( 'pnpng_activated' );
	}

	/**
	 * Run on every plugins_loaded boot.
	 *
	 * Skips only when DB version matches AND the tables have the correct schema.
	 * This ensures a broken schema is repaired on the next request even if the
	 * version option was incorrectly marked as up-to-date by a prior failed run.
	 *
	 * @return void
	 */
	public static function maybe_upgrade() {
		global $wpdb;

		$version_ok = get_option( 'pnpng_db_version' ) === PNPNG_DB_VERSION;

		if ( $version_ok ) {
			// Fast-path: only skip when the primary table actually has the id column.
			$gallery_table = $wpdb->prefix . 'pnpng_galleries';

			// If the table doesn't exist at all, let create_tables() handle it.
			if ( ! $wpdb->get_var( $wpdb->prepare( 'SHOW TABLES LIKE %s', $gallery_table ) ) ) { // phpcs:ignore
				// Tables not created yet — fall through to create_tables().
			} else {
				$id_col = $wpdb->get_results( "SHOW COLUMNS FROM `{$gallery_table}` LIKE 'id'" ); // phpcs:ignore
				if ( ! empty( $id_col ) ) {
					return; // Version matches and schema is correct — nothing to do.
				}
				// Schema is broken despite version match; fall through to repair.
			}
		}

		self::create_tables();
		self::set_defaults();
	}

	/**
	 * Create or repair the plugin DB tables.
	 *
	 * Strategy (handles restricted shared-hosting DB permissions):
	 *   1. If table exists with broken schema (no `id` column):
	 *      a. Try DROP TABLE — works on most hosts.
	 *      b. If DROP is blocked, fall back to RENAME TABLE + fresh CREATE.
	 *         RENAME only requires the same privileges as CREATE, not DROP.
	 *   2. Run dbDelta — creates missing tables or adds missing columns.
	 *   3. Only mark the DB version as up-to-date if the `id` column now exists.
	 *      If repair failed, the version stays stale so the next request retries.
	 *
	 * @return void
	 */
	private static function create_tables() {
		global $wpdb;

		$charset         = $wpdb->get_charset_collate();
		$galleries_table = $wpdb->prefix . 'pnpng_galleries';
		$images_table    = $wpdb->prefix . 'pnpng_images';

		if ( $wpdb->get_var( $wpdb->prepare( 'SHOW TABLES LIKE %s', $galleries_table ) ) ) { // phpcs:ignore
			$id_col = $wpdb->get_results( "SHOW COLUMNS FROM `{$galleries_table}` LIKE 'id'" ); // phpcs:ignore

			if ( empty( $id_col ) ) {
				// Schema is broken — attempt DROP (fast path).
				$wpdb->query( "DROP TABLE IF EXISTS `{$images_table}`" );    // phpcs:ignore
				$wpdb->query( "DROP TABLE IF EXISTS `{$galleries_table}`" ); // phpcs:ignore

				// If DROP was blocked by permissions, fall back to RENAME + recreate.
				if ( $wpdb->get_var( $wpdb->prepare( 'SHOW TABLES LIKE %s', $galleries_table ) ) ) { // phpcs:ignore
					$backup_g = $galleries_table . '_bak';
					$backup_i = $images_table    . '_bak';

					// Remove any leftover backups from a previous attempt.
					$wpdb->query( "DROP TABLE IF EXISTS `{$backup_g}`" ); // phpcs:ignore
					$wpdb->query( "DROP TABLE IF EXISTS `{$backup_i}`" ); // phpcs:ignore

					// Rename broken tables out of the way.
					$wpdb->query( "RENAME TABLE `{$galleries_table}` TO `{$backup_g}`" ); // phpcs:ignore
					if ( $wpdb->get_var( $wpdb->prepare( 'SHOW TABLES LIKE %s', $images_table ) ) ) { // phpcs:ignore
						$wpdb->query( "RENAME TABLE `{$images_table}` TO `{$backup_i}`" ); // phpcs:ignore
					}
				}
			}
		}

		// dbDelta creates missing tables or adds missing columns to existing ones.
		$galleries_sql = "CREATE TABLE {$wpdb->prefix}pnpng_galleries (
  id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL DEFAULT '',
  description TEXT,
  slug VARCHAR(200) NOT NULL DEFAULT '',
  layout VARCHAR(50) NOT NULL DEFAULT 'grid',
  columns TINYINT(2) UNSIGNED NOT NULL DEFAULT 3,
  gap SMALLINT UNSIGNED NOT NULL DEFAULT 8,
  border_radius SMALLINT UNSIGNED NOT NULL DEFAULT 8,
  shadow VARCHAR(20) NOT NULL DEFAULT 'small',
  hover_effect VARCHAR(30) NOT NULL DEFAULT 'zoom',
  overlay_style VARCHAR(30) NOT NULL DEFAULT 'dark-gradient',
  lightbox TINYINT(1) UNSIGNED NOT NULL DEFAULT 1,
  lightbox_transition VARCHAR(20) NOT NULL DEFAULT 'fade',
  lightbox_captions TINYINT(1) UNSIGNED NOT NULL DEFAULT 1,
  lightbox_nav TINYINT(1) UNSIGNED NOT NULL DEFAULT 1,
  lazy_loading TINYINT(1) UNSIGNED NOT NULL DEFAULT 1,
  image_quality VARCHAR(20) NOT NULL DEFAULT 'high',
  tablet_columns TINYINT(2) UNSIGNED NOT NULL DEFAULT 2,
  mobile_columns TINYINT(2) UNSIGNED NOT NULL DEFAULT 1,
  css_class VARCHAR(255) NOT NULL DEFAULT '',
  status VARCHAR(20) NOT NULL DEFAULT 'publish',
  author_id BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id),
  UNIQUE KEY slug (slug),
  KEY author_id (author_id)
) $charset;";

		$images_sql = "CREATE TABLE {$wpdb->prefix}pnpng_images (
  id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  gallery_id BIGINT(20) UNSIGNED NOT NULL,
  attachment_id BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
  src TEXT NOT NULL,
  alt VARCHAR(255) NOT NULL DEFAULT '',
  caption TEXT,
  link VARCHAR(2083) NOT NULL DEFAULT '',
  sort_order INT(11) NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY  (id),
  KEY gallery_id (gallery_id),
  KEY sort_order (sort_order)
) $charset;";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		dbDelta( $galleries_sql );
		dbDelta( $images_sql );

		// Only mark the DB as up-to-date if the schema is now correct.
		// Leaving the version stale means the next request will retry automatically.
		$id_col_now = $wpdb->get_results( "SHOW COLUMNS FROM `{$galleries_table}` LIKE 'id'" ); // phpcs:ignore
		if ( ! empty( $id_col_now ) ) {
			update_option( 'pnpng_db_version', PNPNG_DB_VERSION );

			// Clean up backup tables if repair succeeded.
			$wpdb->query( "DROP TABLE IF EXISTS `{$galleries_table}_bak`" ); // phpcs:ignore
			$wpdb->query( "DROP TABLE IF EXISTS `{$images_table}_bak`" );    // phpcs:ignore
		}
	}

	/**
	 * Set default plugin options on first activation.
	 *
	 * @return void
	 */
	private static function set_defaults() {
		if ( get_option( 'pnpng_settings' ) ) {
			return; // Already initialised — don't overwrite.
		}

		$defaults = array(
			'default_layout'       => 'grid',
			'default_columns'      => 3,
			'lightbox_enabled'     => true,
			'image_size'           => 'large',
			'lazy_load_default'    => true,
			'thumbnail_generation' => true,
			'enable_caching'       => true,
			'keyboard_navigation'  => true,
			'focus_indicators'     => true,
			'reduced_motion'       => false,
		);

		update_option( 'pnpng_settings', $defaults );
	}
}
