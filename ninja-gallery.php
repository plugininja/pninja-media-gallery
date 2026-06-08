<?php
/**
 * Plugin Name:       Ninja Gallery
 * Plugin URI:        https://plugininja.com/ninja-gallery
 * Description:       Beautiful responsive galleries with Grid, Masonry, Lightbox & Album support.
 * Version:           1.0.0
 * Requires at least: 6.2
 * Requires PHP:      7.4
 * Author:            Plugininja
 * Author URI:        https://plugininja.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ninja-gallery
 * Domain Path:       /languages
 */

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

// Load constants.
require_once __DIR__ . '/core/config.php';

// Register lifecycle hooks before autoloader so classes exist at activation time.
require_once PNPNG_DIR . 'includes/class-autoloader.php';
Pnpnd\NG\Autoloader::register();

use Pnpnd\NG\Lifecycle\Activation;
use Pnpnd\NG\Lifecycle\Deactivation;
use Pnpnd\NG\Plugin;

register_activation_hook( __FILE__, array( Activation::class, 'init' ) );
register_deactivation_hook( __FILE__, array( Deactivation::class, 'init' ) );

// Boot the plugin.
add_action( 'plugins_loaded', static function () {
	Plugin::get_instance()->boot();
} );
