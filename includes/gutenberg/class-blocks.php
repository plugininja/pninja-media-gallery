<?php

namespace Pninja\Gutenberg;

use Pninja\Traits\Singleton;

defined( 'ABSPATH' ) || exit( 'No direct script access allowed' );

/**
 * Registers the Pninja Media Gallery Gutenberg block and custom block category.
 */
class Blocks {

	use Singleton;

	/**
	 * Hook into WordPress.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_filter( 'block_categories_all', array( $this, 'register_block_category' ), 10, 2 );
	}

	/**
	 * Register all blocks found in assets/js/blocks/.
	 *
	 * Each sub-folder must contain an index.js and block.json
	 * (produced by the webpack build).
	 *
	 * @return void
	 */
	public function register_blocks() {
		$blocks_dir = PNINJA_DIR . 'assets/js/blocks/';

		if ( ! is_dir( $blocks_dir ) ) {
			return;
		}

		foreach ( glob( $blocks_dir . '*', GLOB_ONLYDIR ) as $block_dir ) {
			$block_json = trailingslashit( $block_dir ) . 'block.json';

			if ( file_exists( $block_json ) ) {
				register_block_type( $block_dir );
			}
		}
	}

	/**
	 * Add a "Pninja Media Gallery" category to the block inserter.
	 *
	 * @param  array                   $categories Existing block categories.
	 * @param  \WP_Block_Editor_Context $context    Editor context.
	 * @return array
	 */
	public function register_block_category( array $categories, $context ) {
		$pninja_gallery_category = array(
			'slug'  => 'pninja-media-gallery',
			'title' => __( 'Pninja Media Gallery', 'pninja-media-gallery' ),
			'icon'  => 'format-gallery',
		);

		array_unshift( $categories, $pninja_gallery_category );

		return $categories;
	}

}
