<?php

namespace Pninja\Lifecycle;

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
		$timestamp = wp_next_scheduled( 'pninja_daily_cleanup' );
		if ( $timestamp ) {
			wp_unschedule_event( $timestamp, 'pninja_daily_cleanup' );
		}

		flush_rewrite_rules();
		do_action( 'pninja_deactivated' );
	}
}
