import { __ } from '@wordpress/i18n';
import { Provider } from 'react-redux';
import { store } from '~/store/store';
import Card from '~/components/molecules/Card';
import BlockStack from '~/components/molecules/BlockStack';
import Icon from '~/components/atoms/Icon';
import Text from '~/components/atoms/Text';
import GalleryPicker from './GalleryPicker';

type IntroModuleProps = {
	attributes:    { id?: number; title?: string };
	setAttributes: ( attrs: Partial<{ id: number; title: string }> ) => void;
};

const IntroModule = ( { attributes, setAttributes }: IntroModuleProps ) => {
	const { id, title } = attributes;

	const handleSelect = ( newId: number, newTitle: string ) => {
		setAttributes( { id: newId, title: newTitle } );
	};

	return (
		<div className="pnpng-block-intro-wrapper">
			{ id ? (
				<Card padding={ 20 }>
					<BlockStack gap={ 8 } align="center" inlineAlign="center">
						<Icon name="imagesmode" fontSize="3xl" color="primary" />
						<Text as="p" size="sm" weight="semibold">
							{ title || __( 'Pninja Media Gallery', 'pninja-media-gallery' ) }
						</Text>
						<Text as="p" size="xs">
							{ __( 'Gallery ID:', 'pninja-media-gallery' ) }{ ' ' }
							<code>{ id }</code>{ ' ' }—{ ' ' }
							{ __( 'Shortcode:', 'pninja-media-gallery' ) }{ ' ' }
							<code>{ `[pninja_media_gallery id="${ id }"]` }</code>
						</Text>
						<Provider store={ store }>
							<GalleryPicker
								selectedId={ id }
								onSelect={ handleSelect }
							/>
						</Provider>
					</BlockStack>
				</Card>
			) : (
				<Card padding={ 30 }>
					<BlockStack gap={ 10 } align="center" inlineAlign="center">
						<Icon name="imagesmode" fontSize="5xl" color="primary" />
						<Text as="h3" size="lg" weight="semibold">
							{ __( 'Pninja Media Gallery', 'pninja-media-gallery' ) }
						</Text>
						<Text as="p" size="sm">
							{ __(
								'Select a gallery to embed it in your content.',
								'pninja-media-gallery',
							) }
						</Text>
						<Provider store={ store }>
							<GalleryPicker onSelect={ handleSelect } />
						</Provider>
					</BlockStack>
				</Card>
			) }
		</div>
	);
};

export default IntroModule;
