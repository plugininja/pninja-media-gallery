import { useState, useEffect, useCallback } from '@wordpress/element';
import { __, sprintf }                        from '@wordpress/i18n';
import type { GalleryImage }                  from './GalleryWidget';

interface LightboxProps {
	images:       GalleryImage[];
	activeIndex:  number;
	showCaptions: boolean;
	showNav:      boolean;
	transition:   string;
	onClose:      () => void;
}

/**
 * Full-featured lightbox with prev/next navigation, captions, and keyboard support.
 */
export default function Lightbox( {
	images,
	activeIndex,
	showCaptions,
	showNav,
	transition,
	onClose,
}: LightboxProps ) {
	const [ current, setCurrent ] = useState( activeIndex );
	const [ fading,  setFading  ] = useState( false );

	const total = images.length;
	const img   = images[ current ];

	const goTo = useCallback( ( idx: number ) => {
		if ( transition === 'fade' ) {
			setFading( true );
			setTimeout( () => {
				setCurrent( ( idx + total ) % total );
				setFading( false );
			}, 200 );
		} else {
			setCurrent( ( idx + total ) % total );
		}
	}, [ total, transition ] );

	const prev = useCallback( () => goTo( current - 1 ), [ current, goTo ] );
	const next = useCallback( () => goTo( current + 1 ), [ current, goTo ] );

	// Keyboard navigation.
	useEffect( () => {
		const handler = ( e: KeyboardEvent ) => {
			if ( e.key === 'Escape'      ) onClose();
			if ( e.key === 'ArrowLeft'   ) prev();
			if ( e.key === 'ArrowRight'  ) next();
		};
		document.addEventListener( 'keydown', handler );
		return () => document.removeEventListener( 'keydown', handler );
	}, [ onClose, prev, next ] );

	// Prevent body scroll while open.
	useEffect( () => {
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => { document.body.style.overflow = prev; };
	}, [] );

	if ( ! img ) return null;

	return (
		<div
			className="pnpng-lightbox"
			role="dialog"
			aria-modal="true"
			aria-label={ __( 'Image lightbox', 'pninja-media-gallery' ) }
			onClick={ onClose }
		>
			{ /* Close button */ }
			<button
				className="pnpng-lightbox__close"
				onClick={ onClose }
				aria-label={ __( 'Close lightbox', 'pninja-media-gallery' ) }
				type="button"
			>
				✕
			</button>

			{ /* Counter */ }
			<div className="pnpng-lightbox__counter">
				{ current + 1 } / { total }
			</div>

			{ /* Prev arrow */ }
			{ showNav && total > 1 && (
				<button
					className="pnpng-lightbox__arrow pnpng-lightbox__arrow--prev"
					onClick={ ( e ) => { e.stopPropagation(); prev(); } }
					aria-label={ __( 'Previous image', 'pninja-media-gallery' ) }
					type="button"
				>
					&#8249;
				</button>
			) }

			{ /* Image stage */ }
			<div
				className="pnpng-lightbox__stage"
				onClick={ ( e ) => e.stopPropagation() }
			>
				<img
					key={ img.id }
					src={ img.src }
					alt={ img.alt }
					className={ `pnpng-lightbox__img${ fading ? ' pnpng-lightbox__img--fading' : '' }` }
				/>
				{ showCaptions && img.caption && (
					<p className="pnpng-lightbox__caption">{ img.caption }</p>
				) }
			</div>

			{ /* Next arrow */ }
			{ showNav && total > 1 && (
				<button
					className="pnpng-lightbox__arrow pnpng-lightbox__arrow--next"
					onClick={ ( e ) => { e.stopPropagation(); next(); } }
					aria-label={ __( 'Next image', 'pninja-media-gallery' ) }
					type="button"
				>
					&#8250;
				</button>
			) }

			{ /* Thumbnail strip */ }
			{ total > 1 && (
				<div className="pnpng-lightbox__thumbs" onClick={ ( e ) => e.stopPropagation() }>
					{ images.map( ( im, i ) => (
						<button
							key={ im.id }
							type="button"
							className={ `pnpng-lightbox__thumb${ i === current ? ' pnpng-lightbox__thumb--active' : '' }` }
							onClick={ () => goTo( i ) }
							/* translators: %d: image number */
							aria-label={ sprintf( __( 'Go to image %d', 'pninja-media-gallery' ), i + 1 ) }
						>
							<img src={ im.src } alt={ im.alt } />
						</button>
					) ) }
				</div>
			) }
		</div>
	);
}
