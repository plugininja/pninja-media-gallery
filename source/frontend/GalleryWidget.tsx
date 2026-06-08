import { useState, useEffect } from '@wordpress/element';
import apiFetch               from '@wordpress/api-fetch';
import Lightbox               from './Lightbox';

// ── types ────────────────────────────────────────────────────────────────────

interface GalleryConfig {
	galleryId: number;
	nonce:     string;
	restUrl:   string;
	// optional shortcode overrides
	layout?:   string;
	columns?:  number;
	lightbox?: boolean;
}

interface GallerySettings {
	id:                  number;
	layout:              'grid' | 'masonry' | 'justified' | 'album';
	columns:             number;
	gap:                 number;
	border_radius:       number;
	shadow:              string;
	hover_effect:        string;
	overlay_style:       string;
	lightbox:            boolean;
	lightbox_transition: string;
	lightbox_captions:   boolean;
	lightbox_nav:        boolean;
	lazy_loading:        boolean;
	image_quality:       string;
	tablet_columns:      number;
	mobile_columns:      number;
	css_class:           string;
}

export interface GalleryImage {
	id:      number;
	src:     string;
	alt:     string;
	caption: string;
	link:    string;
}

// ── helpers ──────────────────────────────────────────────────────────────────

function shadowValue( s: string ): string {
	switch ( s ) {
		case 'small':  return '0 2px 8px rgba(0,0,0,.18)';
		case 'medium': return '0 4px 16px rgba(0,0,0,.22)';
		case 'large':  return '0 8px 30px rgba(0,0,0,.28)';
		default:       return 'none';
	}
}

// ── single figure ─────────────────────────────────────────────────────────────

interface FigureProps {
	img:         GalleryImage;
	settings:    GallerySettings;
	onClick?:    () => void;
	extraStyle?: React.CSSProperties;
}

function Figure( { img, settings, onClick, extraStyle }: FigureProps ) {
	const style: React.CSSProperties = {
		borderRadius: `${ settings.border_radius }px`,
		boxShadow:    shadowValue( settings.shadow ),
		overflow:     'hidden',
		position:     'relative',
		cursor:       onClick ? 'pointer' : 'default',
		...extraStyle,
	};
	const overlay = settings.overlay_style && settings.overlay_style !== 'none';

	return (
		<figure
			className={ `pnpng-figure pnpng-hover--${ settings.hover_effect }` }
			style={ style }
			onClick={ onClick }
		>
			<img
				src={ img.src }
				alt={ img.alt }
				loading={ settings.lazy_loading ? 'lazy' : 'eager' }
				style={ { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } }
			/>
			{ overlay && (
				<div className={ `pnpng-overlay pnpng-overlay--${ settings.overlay_style }` } />
			) }
			{ img.caption && (
				<figcaption className="pnpng-caption">{ img.caption }</figcaption>
			) }
		</figure>
	);
}

// ── layout renderers ─────────────────────────────────────────────────────────

interface LayoutProps {
	images:   GalleryImage[];
	s:        GallerySettings;
	onOpen:   ( i: number ) => void;
}

function GridLayout( { images, s, onOpen }: LayoutProps ) {
	return (
		<div style={ { display: 'grid', gridTemplateColumns: `repeat(${ s.columns },1fr)`, gap: `${ s.gap }px` } }>
			{ images.map( ( img, i ) => (
				<Figure key={ img.id } img={ img } settings={ s } extraStyle={ { aspectRatio: '1' } }
					onClick={ s.lightbox ? () => onOpen( i ) : undefined } />
			) ) }
		</div>
	);
}

function MasonryLayout( { images, s, onOpen }: LayoutProps ) {
	return (
		<div style={ { columnCount: s.columns, columnGap: `${ s.gap }px` } }>
			{ images.map( ( img, i ) => (
				<Figure key={ img.id } img={ img } settings={ s }
					extraStyle={ { breakInside: 'avoid', marginBottom: `${ s.gap }px`, display: 'block' } }
					onClick={ s.lightbox ? () => onOpen( i ) : undefined } />
			) ) }
		</div>
	);
}

function JustifiedLayout( { images, s, onOpen }: LayoutProps ) {
	const rows: GalleryImage[][] = [];
	for ( let i = 0; i < images.length; i += s.columns ) {
		rows.push( images.slice( i, i + s.columns ) );
	}
	return (
		<div style={ { display: 'flex', flexDirection: 'column', gap: `${ s.gap }px` } }>
			{ rows.map( ( row, ri ) => (
				<div key={ ri } style={ { display: 'flex', gap: `${ s.gap }px` } }>
					{ row.map( ( img, ci ) => (
						<Figure key={ img.id } img={ img } settings={ s } extraStyle={ { flex: 1, minWidth: 0 } }
							onClick={ s.lightbox ? () => onOpen( ri * s.columns + ci ) : undefined } />
					) ) }
				</div>
			) ) }
		</div>
	);
}

function AlbumLayout( { images, s, onOpen }: LayoutProps ) {
	const [ featured, ...rest ] = images;
	if ( ! featured ) return null;
	return (
		<div>
			<Figure img={ featured } settings={ s } extraStyle={ { marginBottom: `${ s.gap }px` } }
				onClick={ s.lightbox ? () => onOpen( 0 ) : undefined } />
			{ rest.length > 0 && (
				<div style={ { display: 'grid', gridTemplateColumns: `repeat(${ s.columns },1fr)`, gap: `${ s.gap }px` } }>
					{ rest.map( ( img, i ) => (
						<Figure key={ img.id } img={ img } settings={ s } extraStyle={ { aspectRatio: '1' } }
							onClick={ s.lightbox ? () => onOpen( i + 1 ) : undefined } />
					) ) }
				</div>
			) }
		</div>
	);
}

// ── widget root ───────────────────────────────────────────────────────────────

export default function GalleryWidget( { config }: { config: GalleryConfig } ) {
	const { galleryId } = config;
	const [ images,      setImages      ] = useState<GalleryImage[]>( [] );
	const [ settings,    setSettings    ] = useState<GallerySettings | null>( null );
	const [ loading,     setLoading     ] = useState( true );
	const [ fetchError,  setFetchError  ] = useState( false );
	const [ lightboxIdx, setLightboxIdx ] = useState<number | null>( null );

	useEffect( () => {
		const base  = config.restUrl;
		const nonce = config.nonce;

		Promise.all( [
			apiFetch<{ success: boolean; data: GallerySettings }>( {
				url: `${ base }/galleries/${ galleryId }`,
				headers: { 'X-WP-Nonce': nonce },
			} ),
			apiFetch<{ success: boolean; data: GalleryImage[] }>( {
				url: `${ base }/galleries/${ galleryId }/images`,
				headers: { 'X-WP-Nonce': nonce },
			} ),
		] )
			.then( ( [ gRes, iRes ] ) => {
				if ( gRes.success ) setSettings( gRes.data );
				// Guard against null returned by $wpdb->get_results() on DB error.
				if ( iRes.success ) setImages( Array.isArray( iRes.data ) ? iRes.data : [] );
			} )
			.catch( () => setFetchError( true ) )
			.finally( () => setLoading( false ) );
	}, [ galleryId ] );

	if ( loading ) return <div className="pnpng-loading" aria-busy="true" />;
	if ( fetchError || ! settings ) return null;
	if ( ! images.length ) return null;

	// Shortcode attrs can override per-gallery settings for backwards compat.
	const s: GallerySettings = {
		...settings,
		layout:   ( ( config.layout as GallerySettings['layout'] ) || settings.layout ),
		columns:  config.columns  ?? settings.columns,
		lightbox: config.lightbox ?? settings.lightbox,
	};

	const wrapClass = [ 'pnpng-gallery-widget', `pnpng-layout-${ s.layout }`, s.css_class ]
		.filter( Boolean ).join( ' ' );

	const lp: LayoutProps = { images, s, onOpen: setLightboxIdx };

	return (
		<div className={ wrapClass }>
			{ s.layout === 'grid'      && <GridLayout      { ...lp } /> }
			{ s.layout === 'masonry'   && <MasonryLayout   { ...lp } /> }
			{ s.layout === 'justified' && <JustifiedLayout { ...lp } /> }
			{ s.layout === 'album'     && <AlbumLayout     { ...lp } /> }

			{ s.lightbox && lightboxIdx !== null && (
				<Lightbox
					images={ images }
					activeIndex={ lightboxIdx }
					showCaptions={ Boolean( s.lightbox_captions ) }
					showNav={ Boolean( s.lightbox_nav ) }
					transition={ s.lightbox_transition }
					onClose={ () => setLightboxIdx( null ) }
				/>
			) }
		</div>
	);
}
