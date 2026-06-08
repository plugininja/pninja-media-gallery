import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow } from '@wordpress/components';
import { Provider } from 'react-redux';
import { store } from '~/store/store';
import IntroModule from './IntroModule';
import GalleryPicker from './GalleryPicker';

type TAttributes = { id?: number; title?: string };

type BlockContainerProps = {
	attributes:    TAttributes;
	setAttributes: ( attrs: Partial<TAttributes> ) => void;
};

const BlockContainer = ( { attributes, setAttributes }: BlockContainerProps ) => {
	const handleSelect = ( id: number, title: string ) => {
		setAttributes( { id, title } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Gallery Settings', 'ninja-gallery' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<div style={ { width: '100%' } }>
							<Provider store={ store }>
								<GalleryPicker
									selectedId={ attributes.id }
									onSelect={ handleSelect }
								/>
							</Provider>
						</div>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<IntroModule
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</div>
		</>
	);
};

export default BlockContainer;
