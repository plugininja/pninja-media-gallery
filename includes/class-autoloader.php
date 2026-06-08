<?php

namespace Pnpnd\NG;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );
/**
 * PSR-4 autoloader for the Pnpnd\NG namespace.
 */
class Autoloader {

	/**
	 * Register the autoloader with SPL.
	 *
	 * @return void
	 */
	public static function register() {
		spl_autoload_register( array( static::class, 'load' ) );
	}

	/**
	 * Map a fully-qualified class name to a file path and require it.
	 *
	 * @param  string $class_name Fully-qualified class name.
	 * @return void
	 */
	public static function load( $class_name ) {
		$prefix = 'Pnpnd\\NG\\';

		if ( 0 !== strpos( $class_name, $prefix ) ) {
			return;
		}

		$relative    = substr( $class_name, strlen( $prefix ) );
		$parts       = explode( '\\', $relative );
		$class_short = array_pop( $parts );

		// Convert PascalCase class to kebab stem: MyClass → my-class
		$stem = strtolower(
			preg_replace( '/([A-Z])/', '-$1', lcfirst( $class_short ) )
		);

		// Build sub-directory path (lowercase).
		$sub_dir = ! empty( $parts ) ? strtolower( implode( '/', $parts ) ) . '/' : '';

		// Search roots: includes/ first, then models/ (for Pnpnd\NG\Models\*).
		$base_paths = array(
			PNPNG_DIR . 'includes/',
			PNPNG_DIR . 'models/',
		);

		foreach ( $base_paths as $base_path ) {
			foreach ( array( 'class-', 'trait-' ) as $file_prefix ) {
				$file = $base_path . $sub_dir . $file_prefix . $stem . '.php';
				if ( file_exists( $file ) ) {
					require_once $file;
					return;
				}
			}
		}

		// Models live flat in models/ without sub-directory (no sub-namespace path).
		if ( ! empty( $parts ) && 'models' === strtolower( $parts[0] ) ) {
			foreach ( array( 'class-', 'trait-' ) as $file_prefix ) {
				$file = PNPNG_DIR . 'models/' . $file_prefix . $stem . '.php';
				if ( file_exists( $file ) ) {
					require_once $file;
					return;
				}
			}
		}
	}
}
