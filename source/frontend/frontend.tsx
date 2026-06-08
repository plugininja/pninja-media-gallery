/**
 * Ninja Gallery — Frontend renderer.
 * Finds all .pnpng-gallery containers and mounts the gallery widget.
 */
import { createRoot } from '@wordpress/element';
import GalleryWidget  from './GalleryWidget';
import './frontend.scss';

function mountGalleries() {
	document.querySelectorAll<HTMLElement>( '.pnpng-gallery' ).forEach( ( el ) => {
		const config = JSON.parse( el.getAttribute( 'data-config' ) ?? '{}' );
		createRoot( el ).render( <GalleryWidget config={ config } /> );
	} );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', mountGalleries );
} else {
	mountGalleries();
}

// Expose for dynamic shortcode re-init (e.g. inside page builders).
( window as any ).pnpngRenderModules = mountGalleries;
