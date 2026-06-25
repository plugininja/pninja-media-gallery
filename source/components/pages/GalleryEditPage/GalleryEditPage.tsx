import { useState, useEffect, useCallback, useRef } from '@wordpress/element';
import { useParams, useNavigate, useLocation }     from 'react-router-dom';
import { __ }                                      from '@wordpress/i18n';
import {
	useGetGalleryQuery,
	useCreateGalleryMutation,
	useUpdateGalleryMutation,
	Gallery,
} from '~/store/api/galleryApi';
import {
	useGetImagesQuery,
	useAddImageMutation,
	useRemoveImageMutation,
	GalleryImage,
} from '~/store/api/imageApi';
import PageContainer from '~/components/molecules/PageContainer';
import SettingsField from '~/components/molecules/SettingsField';
import InlineStack   from '~/components/molecules/InlineStack';
import BlockStack    from '~/components/molecules/BlockStack';
import GridStack     from '~/components/molecules/GridStack';
import SelectBox     from '~/components/molecules/SelectBox';
import EmptyState    from '~/components/molecules/EmptyState';
import IconButton    from '~/components/molecules/IconButton';
import Card          from '~/components/molecules/Card';
import Slider        from '~/components/atoms/Slider';
import Divider       from '~/components/atoms/Divider';
import Switcher      from '~/components/atoms/Switcher';
import Loading       from '~/components/atoms/Loading';
import Button        from '~/components/atoms/Button';
import Tabs          from '~/components/atoms/Tabs';
import Input         from '~/components/atoms/Input';
import Icon          from '~/components/atoms/Icon';
import Text          from '~/components/atoms/Text';

// ─── types ───────────────────────────────────────────────────────────────────

type TabKey = 'content' | 'layout' | 'style' | 'lightbox' | 'advanced';

const TABS: { key: TabKey; title: string; icon: string }[] = [
	{ key: 'content',  title: __( 'Content',  'pninja-media-gallery' ), icon: 'photo_library' },
	{ key: 'layout',   title: __( 'Layout',   'pninja-media-gallery' ), icon: 'grid_view' },
	{ key: 'style',    title: __( 'Style',    'pninja-media-gallery' ), icon: 'palette' },
	{ key: 'lightbox', title: __( 'Lightbox', 'pninja-media-gallery' ), icon: 'open_in_full' },
	{ key: 'advanced', title: __( 'Advanced', 'pninja-media-gallery' ), icon: 'tune' },
];

const DEFAULT_SETTINGS: Partial<Gallery> = {
	layout:              'grid',
	columns:             3,
	gap:                 8,
	border_radius:       8,
	shadow:              'small',
	hover_effect:        'zoom',
	overlay_style:       'dark-gradient',
	lightbox:            true,
	lightbox_transition: 'fade',
	lightbox_captions:   true,
	lightbox_nav:        true,
	lazy_loading:        true,
	image_quality:       'high',
	tablet_columns:      2,
	mobile_columns:      1,
	css_class:           '',
	status:              'draft',
};

const LAYOUT_OPTIONS = [
	{ value: 'grid',      label: __( 'Grid',      'pninja-media-gallery' ), sub: __( 'Equal-size tiles', 'pninja-media-gallery' ) },
	{ value: 'masonry',   label: __( 'Masonry',   'pninja-media-gallery' ), sub: __( 'Pinterest-style',  'pninja-media-gallery' ) },
	{ value: 'justified', label: __( 'Justified', 'pninja-media-gallery' ), sub: __( 'Full-width rows',  'pninja-media-gallery' ) },
	{ value: 'album',     label: __( 'Album',     'pninja-media-gallery' ), sub: __( 'Featured + grid',  'pninja-media-gallery' ) },
];

// ─── sub-components ──────────────────────────────────────────────────────────

interface ToggleRowProps {
	label:    string;
	sub?:     string;
	checked:  boolean;
	onChange: ( v: boolean ) => void;
}
const ToggleRow = ( { label, sub, checked, onChange }: ToggleRowProps ) => (
	<InlineStack align="between" blockAlign="center" gap={ 20 } padding="8px 0">
		<BlockStack gap={ 2 }>
			<Text size="sm" weight="medium" color="gray-700">{ label }</Text>
			{ sub && <Text size="xs" color="gray-400">{ sub }</Text> }
		</BlockStack>
		<Switcher checked={ checked } onChange={ onChange } />
	</InlineStack>
);

interface SelectRowProps {
	label:    string;
	value:    string;
	options:  { value: string; label: string }[];
	onChange: ( v: string ) => void;
}
const SelectRow = ( { label, value, options, onChange }: SelectRowProps ) => (
	<InlineStack align="between" blockAlign="center" gap={ 16 } wrap={ false } padding="10px 0">
		<Text size="sm" color="gray-700" className="pninja-gallery-edit__select-label">{ label }</Text>
		<div className="pninja-gallery-edit__select-input">
			<SelectBox
				options={ options.map( ( o ) => ( { value: o.value, name: o.label } ) ) }
				value={ [ value ] }
				size="small"
				onChange={ ( vals: string[] ) => onChange( vals[ 0 ] ?? value ) }
			/>
		</div>
	</InlineStack>
);

interface LayoutPickerProps {
	value:    string;
	onChange: ( v: string ) => void;
}
const LayoutPicker = ( { value, onChange }: LayoutPickerProps ) => (
	<GridStack columns={ 2 } gap={ 8 }>
		{ LAYOUT_OPTIONS.map( ( opt ) => {
			const isActive = value === opt.value;
			return (
				<Card
					key={ opt.value }
					padding={ 12 }
					rounded="md"
					border={ isActive ? 'primary' : 'secondary' }
					background={ isActive ? 'primary-light' : 'white' }
					className="pninja-gallery-edit__layout-card"
					onClick={ () => onChange( opt.value ) }
				>
					<BlockStack gap={ 3 }>
						<Text size="sm" weight="semibold" color={ isActive ? 'primary' : 'gray-700' }>
							{ opt.label }
						</Text>
						<Text size="xs" color="gray-400">{ opt.sub }</Text>
					</BlockStack>
				</Card>
			);
		} ) }
	</GridStack>
);

// ── Pending image (used on new gallery before first save) ────────────────────

interface PendingImage {
	attachment_id: number;
	src:           string;
	alt:           string;
	caption:       string;
}

// ── Shared media-library opener ───────────────────────────────────────────────

function openWpMedia( onSelect: ( attachments: PendingImage[] ) => void, frameRef: React.MutableRefObject<any> ) {
	if ( typeof ( window as any ).wp === 'undefined' ) return;
	if ( ! frameRef.current ) {
		frameRef.current = ( window as any ).wp.media( {
			title:    __( 'Select Images', 'pninja-media-gallery' ),
			multiple: true,
			library:  { type: 'image' },
			button:   { text: __( 'Add to Gallery', 'pninja-media-gallery' ) },
		} );
		frameRef.current.on( 'select', () => {
			const selected: PendingImage[] = frameRef.current.state().get( 'selection' ).toJSON().map( ( att: any ) => ( {
				attachment_id: att.id,
				src:           att.url,
				alt:           att.alt     || '',
				caption:       att.caption || '',
			} ) );
			onSelect( selected );
		} );
	}
	frameRef.current.open();
}

// ── Shared thumbnail grid ─────────────────────────────────────────────────────

interface ThumbItem { id: number; src: string; alt: string }
interface ImageThumbGridProps {
	images:   ThumbItem[];
	onRemove: ( id: number ) => void;
}
const ImageThumbGrid = ( { images, onRemove }: ImageThumbGridProps ) => (
	<GridStack columns="auto-fill" min="80px" max="1fr" gap={ 8 }>
		{ images.map( ( img ) => (
			<div key={ img.id } className="pninja-gallery-edit__thumb">
				<img src={ img.src } alt={ img.alt } className="pninja-gallery-edit__thumb-img" />
				<div className="pninja-gallery-edit__thumb-remove">
					<IconButton
						name="close"
						size="small"
						variant="error"
						fontSize="xs"
						border={ false }
						ariaLabel={ __( 'Remove image', 'pninja-media-gallery' ) }
						onClick={ () => onRemove( img.id ) }
					/>
				</div>
			</div>
		) ) }
	</GridStack>
);

// ── Saved-gallery image list (existing gallery) ───────────────────────────────

interface ImageListProps {
	galleryId: number;
	autoOpen?: boolean;
}

const ImageList = ( { galleryId, autoOpen = false }: ImageListProps ) => {
	const { data, isLoading }                   = useGetImagesQuery( galleryId );
	const images: GalleryImage[]                = data?.data ?? [];
	const [ addImage, { isLoading: isAdding } ] = useAddImageMutation();
	const [ removeImage ]                        = useRemoveImageMutation();
	const frameRef                               = useRef<any>( null );
	const autoOpenedRef                          = useRef( false );

	const handleSelect = useCallback( ( atts: PendingImage[] ) => {
		atts.forEach( ( att ) => addImage( { galleryId, ...att } ) );
	}, [ galleryId, addImage ] );

	const openLib = useCallback( () => openWpMedia( handleSelect, frameRef ), [ handleSelect ] );

	useEffect( () => {
		if ( autoOpen && ! autoOpenedRef.current && ! isLoading ) {
			autoOpenedRef.current = true;
			setTimeout( openLib, 300 );
		}
	}, [ autoOpen, isLoading, openLib ] );

	if ( isLoading ) return <Loading />;

	return (
		<BlockStack gap={ 12 }>
			<InlineStack align="between" blockAlign="center">
				<Text size="sm" color="gray-500">
					{ images.length > 0 ? `${ images.length } ${ __( 'images', 'pninja-media-gallery' ) }` : '' }
				</Text>
				<Button variant="outlined" size="small" startIcon="add_photo_alternate" disabled={ isAdding } onClick={ openLib }>
					{ isAdding ? __( 'Adding…', 'pninja-media-gallery' ) : __( 'Add Images', 'pninja-media-gallery' ) }
				</Button>
			</InlineStack>

			{ images.length === 0 ? (
				<EmptyState
					icon={ <Icon name="add_photo_alternate" color="gray-300" fontSize="3xl" /> }
					description={ __( 'No images yet. Click "Add Images" to get started.', 'pninja-media-gallery' ) }
				/>
			) : (
				<ImageThumbGrid
					images={ images.map( ( img ) => ( { id: img.id, src: img.src, alt: img.alt } ) ) }
					onRemove={ ( imgId ) => removeImage( { galleryId, id: imgId } ) }
				/>
			) }
		</BlockStack>
	);
};

// ── New-gallery image picker (local state, no REST until save) ────────────────

interface NewGalleryImagePickerProps {
	images:    PendingImage[];
	onChange:  ( images: PendingImage[] ) => void;
}

const NewGalleryImagePicker = ( { images, onChange }: NewGalleryImagePickerProps ) => {
	const frameRef = useRef<any>( null );

	const handleSelect = ( atts: PendingImage[] ) => {
		const existing = new Set( images.map( ( i ) => i.attachment_id ) );
		const fresh    = atts.filter( ( a ) => ! existing.has( a.attachment_id ) );
		onChange( [ ...images, ...fresh ] );
	};

	const openLib = () => openWpMedia( handleSelect, frameRef );
	const remove  = ( idx: number ) => onChange( images.filter( ( _, i ) => i !== idx ) );

	return (
		<BlockStack gap={ 12 }>
			<InlineStack align="between" blockAlign="center">
				<Text size="sm" color="gray-500">
					{ images.length > 0 ? `${ images.length } ${ __( 'images', 'pninja-media-gallery' ) }` : '' }
				</Text>
				<Button variant="outlined" size="small" startIcon="add_photo_alternate" onClick={ openLib }>
					{ __( 'Add Images', 'pninja-media-gallery' ) }
				</Button>
			</InlineStack>

			{ images.length === 0 ? (
				<EmptyState
					icon={ <Icon name="add_photo_alternate" color="gray-300" fontSize="3xl" /> }
					description={ __( 'No images yet. Click "Add Images" to pick from your media library.', 'pninja-media-gallery' ) }
				>
					<Button variant="primary" size="small" startIcon="add_photo_alternate" onClick={ openLib }>
						{ __( 'Add Images', 'pninja-media-gallery' ) }
					</Button>
				</EmptyState>
			) : (
				<ImageThumbGrid
					images={ images.map( ( img, i ) => ( { id: i, src: img.src, alt: img.alt } ) ) }
					onRemove={ remove }
				/>
			) }
		</BlockStack>
	);
};

// ─── main page ───────────────────────────────────────────────────────────────

const GalleryEditPage = () => {
	const { id }   = useParams<{ id: string }>();
	const isNew    = ! id || id === 'new';
	const navigate = useNavigate();
	const location = useLocation();
	const shouldAutoOpenMedia = Boolean( ( location.state as any )?.openMedia );

	const { data: galleryData } = useGetGalleryQuery( Number( id ), { skip: isNew } );
	const existing = galleryData?.data;

	const [ createGallery, { isLoading: isCreating } ] = useCreateGalleryMutation();
	const [ updateGallery, { isLoading: isUpdating } ] = useUpdateGalleryMutation();
	const [ addImage ]                                  = useAddImageMutation();

	const [ title,     setTitle     ] = useState( '' );
	const [ settings,  setSettings  ] = useState<Partial<Gallery>>( { ...DEFAULT_SETTINGS } );
	const [ activeTab, setActiveTab ] = useState<string>( 'content' );
	const [ saved,     setSaved     ] = useState( false );
	const [ copied,    setCopied    ] = useState( false );
	const [ saveError, setSaveError ] = useState<string | null>( null );

	const shortcode     = isNew ? '' : `[pninja_gallery id="${ id }"]`;
	const copyShortcode = () => {
		if ( ! shortcode ) return;
		navigator.clipboard?.writeText( shortcode );
		setCopied( true );
		setTimeout( () => setCopied( false ), 2000 );
	};

	const [ pendingImages, setPendingImages ] = useState<PendingImage[]>( [] );

	useEffect( () => {
		if ( existing ) {
			setTitle( existing.title );
			setSettings( {
				layout:              existing.layout,
				columns:             existing.columns,
				gap:                 existing.gap ?? 8,
				border_radius:       existing.border_radius ?? 8,
				shadow:              existing.shadow ?? 'small',
				hover_effect:        existing.hover_effect ?? 'zoom',
				overlay_style:       existing.overlay_style ?? 'dark-gradient',
				lightbox:            Boolean( existing.lightbox ),
				lightbox_transition: existing.lightbox_transition ?? 'fade',
				lightbox_captions:   Boolean( existing.lightbox_captions ),
				lightbox_nav:        Boolean( existing.lightbox_nav ),
				lazy_loading:        Boolean( existing.lazy_loading ),
				image_quality:       existing.image_quality ?? 'high',
				tablet_columns:      existing.tablet_columns ?? 2,
				mobile_columns:      existing.mobile_columns ?? 1,
				css_class:           existing.css_class ?? '',
			} );
		}
	}, [ existing ] );

	const set = useCallback( ( key: keyof Gallery, val: unknown ) => {
		setSettings( ( prev ) => ( { ...prev, [ key ]: val } ) );
	}, [] );

	const saveGallery = async ( status: 'publish' | 'draft' ) => {
		setSaveError( null );
		const payload = { title: title || __( 'Untitled Gallery', 'pninja-media-gallery' ), ...settings, status };

		if ( isNew ) {
			const res = await createGallery( payload );
			if ( 'error' in res || ! res.data?.data?.id ) {
				const msg = ( res as any )?.error?.data?.message
					?? ( res as any )?.error?.error
					?? __( 'Failed to save gallery. Please try again.', 'pninja-media-gallery' );
				setSaveError( msg );
				return;
			}
			const newId = res.data.data.id;
			await Promise.all( pendingImages.map( ( img ) => addImage( { galleryId: newId, ...img } ) ) );
			setSaved( true );
			navigate( '/gallery/' + newId, { replace: false } );
		} else {
			const res = await updateGallery( { id: Number( id ), ...payload } );
			if ( 'error' in res ) {
				const msg = ( res as any )?.error?.data?.message
					?? ( res as any )?.error?.error
					?? __( 'Failed to update gallery. Please try again.', 'pninja-media-gallery' );
				setSaveError( msg );
				return;
			}
			setSaved( true );
			setTimeout( () => setSaved( false ), 2000 );
		}
	};

	const imagesRes = useGetImagesQuery( Number( id ), { skip: isNew } );
	const images: GalleryImage[] = imagesRes.data?.data ?? [];

	const previewImages = isNew
		? pendingImages.map( ( img, i ) => ( { id: i, ...img, link: '', sort_order: i, created_at: '', gallery_id: 0 } ) as GalleryImage )
		: images;

	const isSaving = isCreating || isUpdating;

	// CSS variable carries the dynamic border-radius into preview tiles.
	const previewGridVars = { '--pninja-radius': `${ settings.border_radius ?? 8 }px` } as React.CSSProperties;

	return (
		<BlockStack gap={ 16 } className="pninja-gallery-edit">

			{ /* ── Breadcrumb row ──────────────────────────────────── */ }
			<InlineStack align="between" blockAlign="center" wrap={ true } gap={ 10 }>
				<InlineStack gap={ 6 } blockAlign="center">
					<Button variant="link" size="small" startIcon="arrow_back" onClick={ () => navigate( '/' ) }>
						{ __( 'Galleries', 'pninja-media-gallery' ) }
					</Button>
					<Text color="gray-300">{ '/' }</Text>
					<Text size="sm" color="gray-700" weight="medium">
						{ isNew
							? __( 'New Gallery', 'pninja-media-gallery' )
							: ( existing?.title || __( 'Edit Gallery', 'pninja-media-gallery' ) ) }
					</Text>
				</InlineStack>
				<InlineStack gap={ 8 } blockAlign="center">
					{ ! isNew && (
						<Button
							variant="outlined"
							size="small"
							startIcon={ copied ? 'check' : 'content_copy' }
							onClick={ copyShortcode }
						>
							{ copied ? __( 'Copied!', 'pninja-media-gallery' ) : __( 'Copy Shortcode', 'pninja-media-gallery' ) }
						</Button>
					) }
					<Button
						variant="outlined"
						size="small"
						startIcon="save"
						disabled={ isSaving }
						loading={ isSaving }
						onClick={ () => saveGallery( 'draft' ) }
					>
						{ __( 'Save Draft', 'pninja-media-gallery' ) }
					</Button>
					<Button
						variant="primary"
						size="small"
						startIcon="send"
						disabled={ isSaving }
						loading={ isSaving }
						onClick={ () => saveGallery( 'publish' ) }
					>
						{ __( 'Publish', 'pninja-media-gallery' ) }
					</Button>
				</InlineStack>
			</InlineStack>

			{ /* ── Save error banner */ }
			{ saveError && (
				<InlineStack align="between" blockAlign="center" gap={ 12 } className="pninja-gallery-edit__error-bar">
					<InlineStack gap={ 8 } blockAlign="center">
						<Icon name="error" color="red" fontSize="sm" />
						<Text size="sm" color="red">{ saveError }</Text>
					</InlineStack>
					<IconButton
						name="close"
						size="small"
						variant="error"
						fontSize="xs"
						border={ false }
						ariaLabel={ __( 'Dismiss error', 'pninja-media-gallery' ) }
						onClick={ () => setSaveError( null ) }
					/>
				</InlineStack>
			) }

			{ /* ── Editor: two-column grid — preview left, settings right (wider) */ }
			<GridStack className="pninja-gallery-edit__grid">

				{ /* Left — title + live preview */ }
				<Card padding={ 0 } rounded="lg" className="pninja-gallery-edit__panel">
					<BlockStack gap={ 0 }>
						{ /* Title input */ }
						<div className="pninja-gallery-edit__title-bar">
							<Input
								value={ title }
								placeholder={ __( 'Gallery title…', 'pninja-media-gallery' ) }
								color="primary-light"
								onChange={ ( value: string | number ) => setTitle( String( value ) ) }
							/>
						</div>

						{ /* Live preview */ }
						<BlockStack gap={ 10 } padding={ 16 }>
							<Text
								size="xs"
								color="gray-400"
								weight="medium"
								className="pninja-gallery-edit__preview-label"
							>
								{ __( 'Live Preview', 'pninja-media-gallery' ) }
							</Text>

							{ previewImages.length === 0 ? (
								<BlockStack padding="40px 0">
									<EmptyState
										icon={ <Icon name="photo_library" color="gray-300" fontSize="3xl" /> }
										description={ __( 'Add images to see a live preview', 'pninja-media-gallery' ) }
									/>
								</BlockStack>
							) : (
								<GridStack
									columns={ settings.columns ?? 3 }
									gap={ settings.gap ?? 8 }
									style={ previewGridVars }
								>
									{ previewImages.slice( 0, 12 ).map( ( img ) => (
										<div key={ img.id } className="pninja-gallery-edit__preview-tile">
											<img src={ img.src } alt={ img.alt } />
										</div>
									) ) }
								</GridStack>
							) }
						</BlockStack>
					</BlockStack>
				</Card>

				{ /* Right — settings panel */ }
				<Card padding={ 0 } rounded="lg" className="pninja-gallery-edit__panel">
					<BlockStack gap={ 16 } padding={ 14 }>
						<Tabs tabs={ TABS } active={ activeTab } onTabClick={ setActiveTab } size="small" />

						<PageContainer>
							{ activeTab === 'content' && (
								<SettingsField compact>
									{ isNew ? (
										<NewGalleryImagePicker
											images={ pendingImages }
											onChange={ setPendingImages }
										/>
									) : (
										<ImageList
											galleryId={ Number( id ) }
											autoOpen={ shouldAutoOpenMedia }
										/>
									) }
								</SettingsField>
							) }

							{ activeTab === 'layout' && (
								<SettingsField compact>
									<BlockStack gap={ 16 }>
										<BlockStack gap={ 8 }>
											<Text size="sm" weight="medium" color="gray-700">
												{ __( 'Layout Type', 'pninja-media-gallery' ) }
											</Text>
											<LayoutPicker value={ settings.layout ?? 'grid' } onChange={ ( v ) => set( 'layout', v ) } />
										</BlockStack>
										<Slider
											label={ __( 'Columns', 'pninja-media-gallery' ) }
											value={ settings.columns ?? 3 }
											min={ 1 }
											max={ 6 }
											unit=""
											onChange={ ( v ) => set( 'columns', v ) }
										/>
									</BlockStack>
								</SettingsField>
							) }

							{ activeTab === 'style' && (
								<SettingsField compact>
									<Slider label={ __( 'Gap', 'pninja-media-gallery' ) }           value={ settings.gap ?? 8 }           min={ 0 } max={ 60 } onChange={ ( v ) => set( 'gap', v ) } />
									<Divider color="gray-100" />
									<Slider label={ __( 'Border Radius', 'pninja-media-gallery' ) } value={ settings.border_radius ?? 8 } min={ 0 } max={ 50 } onChange={ ( v ) => set( 'border_radius', v ) } />
									<Divider color="gray-100" />
									<SelectRow label={ __( 'Shadow', 'pninja-media-gallery' ) }        value={ settings.shadow ?? 'small' }           options={ [ { value: 'none', label: __( 'None', 'pninja-media-gallery' ) }, { value: 'small', label: __( 'Small', 'pninja-media-gallery' ) }, { value: 'medium', label: __( 'Medium', 'pninja-media-gallery' ) }, { value: 'large', label: __( 'Large', 'pninja-media-gallery' ) } ] } onChange={ ( v ) => set( 'shadow', v ) } />
									<Divider color="gray-100" />
									<SelectRow label={ __( 'Hover Effect', 'pninja-media-gallery' ) }  value={ settings.hover_effect ?? 'zoom' }       options={ [ { value: 'none', label: __( 'None', 'pninja-media-gallery' ) }, { value: 'zoom', label: __( 'Zoom', 'pninja-media-gallery' ) }, { value: 'fade', label: __( 'Fade', 'pninja-media-gallery' ) }, { value: 'slide', label: __( 'Slide', 'pninja-media-gallery' ) } ] } onChange={ ( v ) => set( 'hover_effect', v ) } />
									<Divider color="gray-100" />
									<SelectRow label={ __( 'Overlay Style', 'pninja-media-gallery' ) } value={ settings.overlay_style ?? 'dark-gradient' } options={ [ { value: 'none', label: __( 'None', 'pninja-media-gallery' ) }, { value: 'dark', label: __( 'Dark', 'pninja-media-gallery' ) }, { value: 'dark-gradient', label: __( 'Dark Gradient', 'pninja-media-gallery' ) }, { value: 'light', label: __( 'Light', 'pninja-media-gallery' ) } ] } onChange={ ( v ) => set( 'overlay_style', v ) } />
								</SettingsField>
							) }

							{ activeTab === 'lightbox' && (
								<SettingsField compact>
									<ToggleRow label={ __( 'Enable Lightbox', 'pninja-media-gallery' ) } sub={ __( 'Click images to open fullscreen', 'pninja-media-gallery' ) } checked={ Boolean( settings.lightbox ) } onChange={ ( v ) => set( 'lightbox', v ) } />
									{ Boolean( settings.lightbox ) && (
										<>
											<Divider color="gray-100" />
											<SelectRow label={ __( 'Transition', 'pninja-media-gallery' ) }      value={ settings.lightbox_transition ?? 'fade' } options={ [ { value: 'fade', label: __( 'Fade', 'pninja-media-gallery' ) }, { value: 'slide', label: __( 'Slide', 'pninja-media-gallery' ) }, { value: 'zoom', label: __( 'Zoom', 'pninja-media-gallery' ) } ] } onChange={ ( v ) => set( 'lightbox_transition', v ) } />
											<Divider color="gray-100" />
											<ToggleRow label={ __( 'Show Captions', 'pninja-media-gallery' ) }       sub={ __( 'Display image captions in lightbox', 'pninja-media-gallery' ) }     checked={ Boolean( settings.lightbox_captions ) } onChange={ ( v ) => set( 'lightbox_captions', v ) } />
											<Divider color="gray-100" />
											<ToggleRow label={ __( 'Navigation Controls', 'pninja-media-gallery' ) } sub={ __( 'Prev/next arrows and keyboard nav', 'pninja-media-gallery' ) } checked={ Boolean( settings.lightbox_nav ) }      onChange={ ( v ) => set( 'lightbox_nav', v ) } />
										</>
									) }
								</SettingsField>
							) }

							{ activeTab === 'advanced' && (
								<SettingsField compact>
									<ToggleRow label={ __( 'Lazy Loading', 'pninja-media-gallery' ) } sub={ __( 'Load images as they scroll into view', 'pninja-media-gallery' ) } checked={ Boolean( settings.lazy_loading ) } onChange={ ( v ) => set( 'lazy_loading', v ) } />
									<Divider color="gray-100" />
									<SelectRow label={ __( 'Image Quality', 'pninja-media-gallery' ) } value={ settings.image_quality ?? 'high' } options={ [ { value: 'low', label: __( 'Low', 'pninja-media-gallery' ) }, { value: 'medium', label: __( 'Medium', 'pninja-media-gallery' ) }, { value: 'high', label: __( 'High Quality', 'pninja-media-gallery' ) }, { value: 'original', label: __( 'Original', 'pninja-media-gallery' ) } ] } onChange={ ( v ) => set( 'image_quality', v ) } />
									<Divider color="gray-100" />
									<Slider label={ __( 'Tablet Columns', 'pninja-media-gallery' ) } value={ settings.tablet_columns ?? 2 } min={ 1 } max={ 4 } unit="" onChange={ ( v ) => set( 'tablet_columns', v ) } />
									<Divider color="gray-100" />
									<Slider label={ __( 'Mobile Columns', 'pninja-media-gallery' ) } value={ settings.mobile_columns ?? 1 } min={ 1 } max={ 3 } unit="" onChange={ ( v ) => set( 'mobile_columns', v ) } />
									<Divider color="gray-100" />
									<BlockStack gap={ 6 } padding="10px 0">
										<Text size="sm" color="gray-700">{ __( 'Custom CSS Class', 'pninja-media-gallery' ) }</Text>
										<Input value={ settings.css_class ?? '' } placeholder="e.g. my-gallery-class" color="primary-light" onChange={ ( value: string | number ) => set( 'css_class', String( value ) ) } />
										<Text size="xs" color="gray-400">{ __( 'Added to the gallery wrapper element', 'pninja-media-gallery' ) }</Text>
									</BlockStack>
								</SettingsField>
							) }
						</PageContainer>
					</BlockStack>
				</Card>

			</GridStack>

		</BlockStack>
	);
};

export default GalleryEditPage;
