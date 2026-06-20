<?php
/**
 * Uninstall Pninja Media Gallery — runs when the user deletes the plugin from WP Admin.
 * Removes all options, transients, and custom tables.
 */

defined( 'WP_UNINSTALL_PLUGIN' ) || exit( 'No direct script access allowed' );

global $wpdb;

// Delete options.
delete_option( 'pnpng_settings' );
delete_option( 'pnpng_db_version' );

// Delete transients.
delete_transient( 'pnpng_cache' );

$pnpng_transient_prefix         = $wpdb->esc_like( '_transient_pnpng_' ) . '%';
$pnpng_transient_timeout_prefix = $wpdb->esc_like( '_transient_timeout_pnpng_' ) . '%';

$wpdb->query( $wpdb->prepare( "DELETE FROM {$wpdb->options} WHERE option_name LIKE %s", $pnpng_transient_prefix ) );         // phpcs:ignore WordPress.DB.DirectDatabaseQuery
$wpdb->query( $wpdb->prepare( "DELETE FROM {$wpdb->options} WHERE option_name LIKE %s", $pnpng_transient_timeout_prefix ) ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery

// Drop custom tables. Table names are built from $wpdb->prefix (safe; no user input).
$wpdb->query( "DROP TABLE IF EXISTS `{$wpdb->prefix}pnpng_galleries`" ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery
$wpdb->query( "DROP TABLE IF EXISTS `{$wpdb->prefix}pnpng_images`" );    // phpcs:ignore WordPress.DB.DirectDatabaseQuery

// Remove all user meta added by this plugin.
$pnpng_usermeta_prefix = $wpdb->esc_like( 'pnpng_' ) . '%';
$wpdb->query( $wpdb->prepare( "DELETE FROM {$wpdb->usermeta} WHERE meta_key LIKE %s", $pnpng_usermeta_prefix ) ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery
