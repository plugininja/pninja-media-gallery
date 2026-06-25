<?php
/**
 * Uninstall Pninja Media Gallery — runs when the user deletes the plugin from WP Admin.
 * Removes all options, transients, and custom tables.
 */

defined( 'WP_UNINSTALL_PLUGIN' ) || exit( 'No direct script access allowed' );

global $wpdb;

// Delete options.
delete_option( 'pninja_settings' );
delete_option( 'pninja_db_version' );

// Delete transients.
delete_transient( 'pninja_cache' );

$pninja_transient_prefix         = $wpdb->esc_like( '_transient_pninja_' ) . '%';
$pninja_transient_timeout_prefix = $wpdb->esc_like( '_transient_timeout_pninja_' ) . '%';

$wpdb->query( $wpdb->prepare( "DELETE FROM {$wpdb->options} WHERE option_name LIKE %s", $pninja_transient_prefix ) );         // phpcs:ignore WordPress.DB.DirectDatabaseQuery
$wpdb->query( $wpdb->prepare( "DELETE FROM {$wpdb->options} WHERE option_name LIKE %s", $pninja_transient_timeout_prefix ) ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery

// Drop custom tables. Table names are built from $wpdb->prefix (safe; no user input).
$wpdb->query( "DROP TABLE IF EXISTS `{$wpdb->prefix}pninja_galleries`" ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery
$wpdb->query( "DROP TABLE IF EXISTS `{$wpdb->prefix}pninja_images`" );    // phpcs:ignore WordPress.DB.DirectDatabaseQuery

// Remove all user meta added by this plugin.
$pninja_usermeta_prefix = $wpdb->esc_like( 'pninja_' ) . '%';
$wpdb->query( $wpdb->prepare( "DELETE FROM {$wpdb->usermeta} WHERE meta_key LIKE %s", $pninja_usermeta_prefix ) ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery
