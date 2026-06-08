import { registerBlockType } from '@wordpress/blocks';
import BlockIcon from '../../components/BlockIcon';
import metadata from './block.json';
import Edit from './edit';

registerBlockType( metadata.name, {
	icon: <BlockIcon />,
	edit: Edit,
	save: () => null, // dynamic block — rendered server-side via shortcode
} );
