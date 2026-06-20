<?php

namespace Pnpnd\NG;

defined('ABSPATH') || exit('No direct script access allowed');

use Pnpnd\NG\Admin\Admin;
use Pnpnd\NG\API\ApiRegistry;
use Pnpnd\NG\Gutenberg\Blocks;
use Pnpnd\NG\Lifecycle\Activation;
use Pnpnd\NG\Traits\Singleton;

/**
 * Central orchestrator — boots all subsystems.
 */
class Plugin
{
    use Singleton;

    /**
     * Boot all subsystems on plugins_loaded.
     *
     * @return void
     */
    public function boot()
    {
        $this->load_helpers();
        Activation::maybe_upgrade(); // migrate schema if db version changed.
        $this->boot_subsystems();
        do_action('pnpng_loaded');
    }

    /**
     * Require global helper functions.
     *
     * @return void
     */
    private function load_helpers()
    {
        require_once PNPNG_DIR . 'core/functions.php';
    }

    /**
     * Initialise each subsystem singleton.
     *
     * @return void
     */
    private function boot_subsystems()
    {
        // REST API (admin-ajax & REST both use this).
        ApiRegistry::get_instance()->init();

        Enqueue::get_instance()->init();

        // Gutenberg blocks (registered on 'init', works on front + back end).
        Blocks::get_instance()->init();

        // Admin UI (only inside wp-admin).
        if (is_admin()) {
            Admin::get_instance()->init();
        }

        // Front-end shortcode.
        add_shortcode('pninja_media_gallery', array( $this, 'render_shortcode' ));
    }

    /**
     * Render [pninja_media_gallery id="X" layout="grid"] shortcode.
     *
     * @param  array  $atts    Shortcode attributes.
     * @param  string $content Inner content (unused).
     * @return string HTML output.
     */
    public function render_shortcode($atts, $content = '')
    {
        $atts = shortcode_atts(
            array(
                'id'       => 0,
                'layout'   => 'grid',   // grid | masonry
                'lightbox' => 'true',
                'columns'  => 3,
            ),
            $atts,
            'pninja_media_gallery'
        );

        $gallery_id = absint($atts['id']);
        if (! $gallery_id) {
            return '<p>' . esc_html__('Please provide a gallery ID.', 'pninja-media-gallery') . '</p>';
        }

        $layout   = in_array($atts['layout'], pnpng_supported_layouts(), true) ? $atts['layout'] : 'grid';
        $lightbox = filter_var($atts['lightbox'], FILTER_VALIDATE_BOOLEAN);
        $columns  = max(1, min(6, absint($atts['columns'])));

        $data = array(
            'galleryId' => $gallery_id,
            'layout'    => $layout,
            'lightbox'  => $lightbox,
            'columns'   => $columns,
            'restUrl'   => esc_url_raw(rest_url(PNPNG_REST_NS)),
        );

        // Only expose a nonce for authenticated users — avoids broadcasting
        // a usable REST nonce in public page source to anonymous visitors.
        if (is_user_logged_in()) {
            $data['nonce'] = wp_create_nonce('wp_rest');
        }

        $container_id = 'pnpng-gallery-' . $gallery_id;

        $html  = '<div id="' . esc_attr($container_id) . '" ';
        $html .= 'class="pnpng-gallery" ';
        $html .= 'data-config="' . esc_attr(wp_json_encode($data)) . '">';
        $html .= '</div>';

        do_action('pnpng_shortcode_rendered', $gallery_id, $atts);

        return $html;
    }

}
