import { useEffect, useRef, useState } from '@wordpress/element';
import { __ }                           from '@wordpress/i18n';
import { useGetSettingsQuery, useSaveSettingsMutation, PluginSettings } from '~/store/api/settingsApi';
import Button        from '~/components/atoms/Button';
import Divider       from '~/components/atoms/Divider';
import Icon          from '~/components/atoms/Icon';
import Switcher      from '~/components/atoms/Switcher';
import Text          from '~/components/atoms/Text';
import SelectBox     from '~/components/molecules/SelectBox';
import InlineStack   from '~/components/molecules/InlineStack';
import BlockStack    from '~/components/molecules/BlockStack';
import PageContainer from '~/components/molecules/PageContainer';
import SettingsField from '~/components/molecules/SettingsField';

type SettingsFormState = PluginSettings;

const DEFAULT_SETTINGS: SettingsFormState = {
	default_layout:       'grid',
	default_columns:      3,
	lightbox_enabled:     true,
	image_size:           'large',
	lazy_load_default:    true,
	thumbnail_generation: true,
	enable_caching:       true,
	keyboard_navigation:  true,
	focus_indicators:     true,
	reduced_motion:       false,
};

// ─── row components ───────────────────────────────────────────────────────────

interface SelectRowProps {
	label:       string;
	description?: string;
	value:        string;
	options:      { value: string; label: string }[];
	onChange:     ( v: string ) => void;
}
const SelectRow = ( { label, description, value, options, onChange }: SelectRowProps ) => (
	<InlineStack align="between" blockAlign="center" gap={ 20 } wrap={ false } style={ { padding: '14px 0', minHeight: 56 } }>
		<BlockStack gap={ 2 } style={ { flex: 1, minWidth: 0 } }>
			<Text size="sm" weight="medium" color="gray-800">{ label }</Text>
			{ description && <Text size="xs" color="gray-400">{ description }</Text> }
		</BlockStack>
		<div style={ { flex: '0 0 auto', minWidth: 180 } }>
			<SelectBox
				options={ options.map( ( o ) => ( { value: o.value, name: o.label } ) ) }
				value={ [ value ] }
				size="small"
				onChange={ ( vals: string[] ) => onChange( vals[ 0 ] ?? value ) }
			/>
		</div>
	</InlineStack>
);

/**
 * SwitchRow — label + description on left, Switcher on right.
 */
interface SwitchRowProps {
	label:        string;
	description?: string;
	checked:      boolean;
	onChange:     ( v: boolean ) => void;
}
const SwitchRow = ( { label, description, checked, onChange }: SwitchRowProps ) => (
	<InlineStack align="between" blockAlign="center" gap={ 20 } wrap={ false } style={ { padding: '14px 0', minHeight: 56 } }>
		<BlockStack gap={ 2 } style={ { flex: 1, minWidth: 0 } }>
			<Text size="sm" weight="medium" color="gray-800">{ label }</Text>
			{ description && <Text size="xs" color="gray-400">{ description }</Text> }
		</BlockStack>
		<Switcher checked={ checked } onChange={ onChange } />
	</InlineStack>
);

// ─── main page ────────────────────────────────────────────────────────────────

const SettingsPage = () => {
	const { data }                        = useGetSettingsQuery();
	const [ saveSettings, { isLoading } ] = useSaveSettingsMutation();
	const [ settings, setSettings ]       = useState<SettingsFormState>( DEFAULT_SETTINGS );
	const [ saved,    setSaved    ]       = useState( false );
	const importRef                       = useRef<HTMLInputElement>( null );

	useEffect( () => {
		if ( data?.data ) setSettings( { ...DEFAULT_SETTINGS, ...data.data } );
	}, [ data ] );

	useEffect( () => {
		if ( ! saved ) return undefined;
		const t = window.setTimeout( () => setSaved( false ), 1800 );
		return () => window.clearTimeout( t );
	}, [ saved ] );

	const update = <K extends keyof SettingsFormState>( key: K, val: SettingsFormState[ K ] ) => {
		setSettings( ( prev ) => ( { ...prev, [ key ]: val } ) );
	};

	const handleSave = async () => {
		await saveSettings( settings );
		setSaved( true );
	};

	const handleExport = () => {
		const blob   = new Blob( [ JSON.stringify( settings, null, 2 ) ], { type: 'application/json' } );
		const url    = URL.createObjectURL( blob );
		const a      = document.createElement( 'a' );
		a.href     = url;
		a.download = 'pninja-media-gallery-settings.json';
		document.body.appendChild( a );
		a.click();
		a.remove();
		URL.revokeObjectURL( url );
	};

	const handleImport = async ( e: React.ChangeEvent<HTMLInputElement> ) => {
		const file = e.target.files?.[ 0 ];
		if ( ! file ) return;
		const imported = JSON.parse( await file.text() ) as Partial<SettingsFormState>;
		const next     = { ...DEFAULT_SETTINGS, ...settings, ...imported };
		setSettings( next );
		await saveSettings( next );
		setSaved( true );
		e.target.value = '';
	};

	return (
		<BlockStack gap={ 24 } style={ { padding: '24px 20px' } }>

			{ /* ── Page header ─────────────────────────────────────── */ }
			<InlineStack align="between" blockAlign="center" wrap={ true } gap={ 12 }>
				<BlockStack gap={ 4 }>
					<Text as="h1" size="xl" weight="semibold">
						{ __( 'Settings', 'pninja-media-gallery' ) }
					</Text>
					<Text size="sm" color="gray-500">
						{ __( 'Configure global defaults for all galleries.', 'pninja-media-gallery' ) }
					</Text>
				</BlockStack>

				<InlineStack gap={ 8 } blockAlign="center">
					{ saved && (
						<InlineStack gap={ 6 } blockAlign="center">
							<Icon name="check_circle" color="success" fontSize="sm" />
							<Text size="sm" color="success" weight="medium">
								{ __( 'Settings saved', 'pninja-media-gallery' ) }
							</Text>
						</InlineStack>
					) }
					<Button
						variant="primary"
						startIcon="save"
						disabled={ isLoading }
						loading={ isLoading }
						onClick={ handleSave }
					>
						{ isLoading ? __( 'Saving…', 'pninja-media-gallery' ) : __( 'Save Settings', 'pninja-media-gallery' ) }
					</Button>
				</InlineStack>
			</InlineStack>

			{ /* ── Settings sections ───────────────────────────────── */ }
			<PageContainer gap={ 16 } compact style={ { margin: '0 auto', width: '100%' } }>

				{ /* General defaults */ }
				<SettingsField
					title={ __( 'General', 'pninja-media-gallery' ) }
					description={ __( 'Default values applied when creating a new gallery.', 'pninja-media-gallery' ) }
					compact
				>
					<SelectRow
						label={ __( 'Default Layout', 'pninja-media-gallery' ) }
						description={ __( 'Layout type pre-selected for new galleries', 'pninja-media-gallery' ) }
						value={ settings.default_layout }
						options={ [
							{ value: 'grid',      label: __( 'Grid — equal-size tiles', 'pninja-media-gallery' ) },
							{ value: 'masonry',   label: __( 'Masonry — Pinterest style', 'pninja-media-gallery' ) },
							{ value: 'justified', label: __( 'Justified — full-width rows', 'pninja-media-gallery' ) },
							{ value: 'album',     label: __( 'Album — featured + grid', 'pninja-media-gallery' ) },
						] }
						onChange={ ( v ) => update( 'default_layout', v as SettingsFormState[ 'default_layout' ] ) }
					/>
					<Divider color="gray-100" />
					<SelectRow
						label={ __( 'Default Image Size', 'pninja-media-gallery' ) }
						description={ __( 'WordPress image size served to the browser', 'pninja-media-gallery' ) }
						value={ settings.image_size }
						options={ [
							{ value: 'medium',    label: __( 'Medium — up to 600 px', 'pninja-media-gallery' ) },
							{ value: 'large',     label: __( 'Large — up to 1024 px',  'pninja-media-gallery' ) },
							{ value: 'full',      label: __( 'Full — original size',   'pninja-media-gallery' ) },
						] }
						onChange={ ( v ) => update( 'image_size', v ) }
					/>
					<Divider color="gray-100" />
					<SwitchRow
						label={ __( 'Lazy Load Images by Default', 'pninja-media-gallery' ) }
						description={ __( 'Defer off-screen images — improves initial page load', 'pninja-media-gallery' ) }
						checked={ Boolean( settings.lazy_load_default ) }
						onChange={ ( v ) => update( 'lazy_load_default', v ) }
					/>
					<Divider color="gray-100" />
					<SwitchRow
						label={ __( 'Enable Lightbox by Default', 'pninja-media-gallery' ) }
						description={ __( 'Open images fullscreen when clicked', 'pninja-media-gallery' ) }
						checked={ Boolean( settings.lightbox_enabled ) }
						onChange={ ( v ) => update( 'lightbox_enabled', v ) }
					/>
				</SettingsField>

				{ /* Performance */ }
				<SettingsField
					title={ __( 'Performance', 'pninja-media-gallery' ) }
					description={ __( 'Control server-side and browser optimisations.', 'pninja-media-gallery' ) }
					compact
				>
					<SwitchRow
						label={ __( 'Thumbnail Generation', 'pninja-media-gallery' ) }
						description={ __( 'Auto-create resized thumbnails via WordPress image sizes', 'pninja-media-gallery' ) }
						checked={ Boolean( settings.thumbnail_generation ) }
						onChange={ ( v ) => update( 'thumbnail_generation', v ) }
					/>
					<Divider color="gray-100" />
					<SwitchRow
						label={ __( 'Enable Caching', 'pninja-media-gallery' ) }
						description={ __( 'Cache rendered gallery HTML for faster repeat loads', 'pninja-media-gallery' ) }
						checked={ Boolean( settings.enable_caching ) }
						onChange={ ( v ) => update( 'enable_caching', v ) }
					/>
				</SettingsField>

				{ /* Accessibility */ }
				<SettingsField
					title={ __( 'Accessibility', 'pninja-media-gallery' ) }
					description={ __( 'Make galleries usable for everyone.', 'pninja-media-gallery' ) }
					compact
				>
					<SwitchRow
						label={ __( 'Keyboard Navigation', 'pninja-media-gallery' ) }
						description={ __( 'Arrow keys move focus between gallery items', 'pninja-media-gallery' ) }
						checked={ Boolean( settings.keyboard_navigation ) }
						onChange={ ( v ) => update( 'keyboard_navigation', v ) }
					/>
					<Divider color="gray-100" />
					<SwitchRow
						label={ __( 'Focus Indicators', 'pninja-media-gallery' ) }
						description={ __( 'Visible focus rings for keyboard-only users', 'pninja-media-gallery' ) }
						checked={ Boolean( settings.focus_indicators ) }
						onChange={ ( v ) => update( 'focus_indicators', v ) }
					/>
					<Divider color="gray-100" />
					<SwitchRow
						label={ __( 'Reduced Motion', 'pninja-media-gallery' ) }
						description={ __( 'Honour the OS prefers-reduced-motion setting', 'pninja-media-gallery' ) }
						checked={ Boolean( settings.reduced_motion ) }
						onChange={ ( v ) => update( 'reduced_motion', v ) }
					/>
				</SettingsField>

				{ /* Data / Tools */ }
				<SettingsField
					title={ __( 'Data & Tools', 'pninja-media-gallery' ) }
					description={ __( 'Export, import, or reset your plugin configuration.', 'pninja-media-gallery' ) }
					compact
				>
					{ /* Hidden file input for import */ }
					<input
						ref={ importRef }
						type="file"
						accept="application/json"
						style={ { display: 'none' } }
						onChange={ handleImport }
					/>

					<InlineStack align="between" blockAlign="center" gap={ 20 } wrap={ false } style={ { padding: '14px 0' } }>
						<BlockStack gap={ 2 }>
							<Text size="sm" weight="medium" color="gray-800">
								{ __( 'Export Settings', 'pninja-media-gallery' ) }
							</Text>
							<Text size="xs" color="gray-400">
								{ __( 'Download your current settings as a JSON file', 'pninja-media-gallery' ) }
							</Text>
						</BlockStack>
						<Button variant="outlined" size="small" startIcon="upload" onClick={ handleExport }>
							{ __( 'Export', 'pninja-media-gallery' ) }
						</Button>
					</InlineStack>

					<Divider color="gray-100" />

					<InlineStack align="between" blockAlign="center" gap={ 20 } wrap={ false } style={ { padding: '14px 0' } }>
						<BlockStack gap={ 2 }>
							<Text size="sm" weight="medium" color="gray-800">
								{ __( 'Import Settings', 'pninja-media-gallery' ) }
							</Text>
							<Text size="xs" color="gray-400">
								{ __( 'Restore settings from a previously exported JSON file', 'pninja-media-gallery' ) }
							</Text>
						</BlockStack>
						<Button variant="outlined" size="small" startIcon="download" onClick={ () => importRef.current?.click() }>
							{ __( 'Import', 'pninja-media-gallery' ) }
						</Button>
					</InlineStack>

					<Divider color="gray-100" />

					<InlineStack align="between" blockAlign="center" gap={ 20 } wrap={ false } style={ { padding: '14px 0' } }>
						<BlockStack gap={ 2 }>
							<Text size="sm" weight="medium" color="gray-800">
								{ __( 'Reset to Defaults', 'pninja-media-gallery' ) }
							</Text>
							<Text size="xs" color="gray-400">
								{ __( 'All settings will be restored to their factory values', 'pninja-media-gallery' ) }
							</Text>
						</BlockStack>
						<Button
							variant="warning"
							size="small"
							startIcon="restart_alt"
							onClick={ async () => {
								if ( window.confirm( __( 'Reset all settings to defaults?', 'pninja-media-gallery' ) ) ) {
									setSettings( { ...DEFAULT_SETTINGS } );
									await saveSettings( { ...DEFAULT_SETTINGS } );
									setSaved( true );
								}
							} }
						>
							{ __( 'Reset', 'pninja-media-gallery' ) }
						</Button>
					</InlineStack>
				</SettingsField>

			</PageContainer>
		</BlockStack>
	);
};

export default SettingsPage;
