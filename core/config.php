<?php
defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

define( 'PNPNG_VERSION',      '1.0.0' );
define( 'PNPNG_DB_VERSION',   '1.0.0' ); // bump when DB schema changes; must align with initial stable release.
define( 'PNPNG_DIR',          plugin_dir_path( dirname( __FILE__ ) ) );
define( 'PNPNG_URL',          plugin_dir_url( dirname( __FILE__ ) ) );
define( 'PNPNG_ASSETS_URL',   PNPNG_URL . 'assets/js/' );
define( 'PNPNG_CSS_URL',      PNPNG_URL . 'assets/js/' ); // CSS is emitted into assets/js/ by webpack.
define( 'PNPNG_BASENAME',     plugin_basename( dirname( __DIR__ ) . '/ninja-gallery.php' ) );
define( 'PNPNG_REST_NS',      'ninja-gallery/v1' );
define( 'PNPNG_MIN_WP',       '6.2' );
define( 'PNPNG_MIN_PHP',      '7.4' );
