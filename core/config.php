<?php
defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

define( 'PNINJA_VERSION',      '1.0.0' );
define( 'PNINJA_DB_VERSION',   '1.0.0' ); // bump when DB schema changes; must align with initial stable release.
define( 'PNINJA_DIR',          plugin_dir_path( dirname( __FILE__ ) ) );
define( 'PNINJA_URL',          plugin_dir_url( dirname( __FILE__ ) ) );
define( 'PNINJA_ASSETS_URL',   PNINJA_URL . 'assets/js/' );
define( 'PNINJA_CSS_URL',      PNINJA_URL . 'assets/js/' ); // CSS is emitted into assets/js/ by webpack.
define( 'PNINJA_BASENAME',     plugin_basename( dirname( __DIR__ ) . '/pninja-media-gallery.php' ) );
define( 'PNINJA_REST_NS',      'pninja-media-gallery/v1' );
define( 'PNINJA_MIN_WP',       '6.2' );
define( 'PNINJA_MIN_PHP',      '7.4' );
