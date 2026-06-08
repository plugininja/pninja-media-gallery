<?php

namespace Pnpnd\NG\Lifecycle;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * Runs on plugin deactivation. Does NOT delete data.
 */
class Deactivation {

	/**
	 * Entry point called by register_deactivation_hook().
	 *
	 * @return void
	 */
	public static function init() {
		// Clear scheduled cron events.
		$timestamp = wp_next_scheduled( 'pnpng_daily_cleanup' );
		if ( $timestamp ) {
			wp_unschedule_event( $timestamp, 'pnpng_daily_cleanup' );
		}

		flush_rewrite_rules();
		do_action( 'pnpng_deactivated' );
	}
}
