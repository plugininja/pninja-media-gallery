<?php
defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * Global helper functions for Pninja Media Gallery.
 * All functions are prefixed pnpng_.
 */

/**
 * Returns the current plugin version.
 *
 * @return string
 */
function pnpng_version() {
	return PNPNG_VERSION;
}

/**
 * Safe JSON response helper — encodes and escapes for output.
 *
 * @param  mixed $data
 * @return string
 */
function pnpng_json( $data ) {
	return wp_json_encode( $data );
}

/**
 * Retrieve a gallery option with optional default.
 *
 * @param  string $key
 * @param  mixed  $default
 * @return mixed
 */
function pnpng_get_option( $key, $default = null ) {
	$options = get_option( 'pnpng_settings', array() );
	return isset( $options[ $key ] ) ? $options[ $key ] : $default;
}

/**
 * Persist a single gallery option value.
 *
 * @param  string $key
 * @param  mixed  $value
 * @return bool
 */
function pnpng_update_option( $key, $value ) {
	$options         = get_option( 'pnpng_settings', array() );
	$options[ $key ] = $value;
	return update_option( 'pnpng_settings', $options );
}

/**
 * Returns supported layout types.
 *
 * @return string[]
 */
function pnpng_supported_layouts() {
	return apply_filters( 'pnpng_supported_layouts', array( 'grid', 'masonry', 'justified', 'album' ) );
}
