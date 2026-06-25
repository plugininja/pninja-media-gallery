<?php
defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * Global helper functions for Pninja Media Gallery.
 * All functions are prefixed pninja_.
 */

/**
 * Returns the current plugin version.
 *
 * @return string
 */
function pninja_version() {
	return PNINJA_VERSION;
}

/**
 * Safe JSON response helper — encodes and escapes for output.
 *
 * @param  mixed $data
 * @return string
 */
function pninja_json( $data ) {
	return wp_json_encode( $data );
}

/**
 * Retrieve a gallery option with optional default.
 *
 * @param  string $key
 * @param  mixed  $default
 * @return mixed
 */
function pninja_get_option( $key, $default = null ) {
	$options = get_option( 'pninja_settings', array() );
	return isset( $options[ $key ] ) ? $options[ $key ] : $default;
}

/**
 * Persist a single gallery option value.
 *
 * @param  string $key
 * @param  mixed  $value
 * @return bool
 */
function pninja_update_option( $key, $value ) {
	$options         = get_option( 'pninja_settings', array() );
	$options[ $key ] = $value;
	return update_option( 'pninja_settings', $options );
}

/**
 * Returns supported layout types.
 *
 * @return string[]
 */
function pninja_supported_layouts() {
	return apply_filters( 'pninja_supported_layouts', array( 'grid', 'masonry', 'justified', 'album' ) );
}
