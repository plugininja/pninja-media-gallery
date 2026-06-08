import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useGetGalleriesQuery } from '~/store/api/galleryApi';
import SelectBox from '~/components/molecules/SelectBox';

type OptionValue = { name: string; value: string };

type GalleryPickerProps = {
	selectedId?: number;
	onSelect: ( id: number, title: string ) => void;
};

const GalleryPicker = ( { selectedId, onSelect }: GalleryPickerProps ) => {
	const [ searchTerm, setSearchTerm ] = useState( '' );

	const { data, isFetching, isLoading } = useGetGalleriesQuery(
		{ per_page: 50 },
		{ refetchOnMountOrArgChange: true },
	);

	const galleries = data?.data?.items || [];

	const filtered = searchTerm
		? galleries.filter( ( g ) =>
				g.title.toLowerCase().includes( searchTerm.toLowerCase() ),
		  )
		: galleries;

	const options: OptionValue[] = filtered.map( ( g ) => ( {
		name:  `${ g.id }: ${ g.title }`,
		value: `${ g.id }`,
	} ) );

	const currentValue = selectedId
		? [ `${ selectedId }` ]
		: [ __( 'Select a gallery…', 'ninja-gallery' ) ];

	return (
		<SelectBox
			options={ options }
			value={ currentValue }
			onChange={ ( selected ) => {
				const id    = parseInt( selected[ 0 ], 10 );
				const match = galleries.find( ( g ) => g.id === id );
				onSelect( id, match?.title || '' );
			} }
			placeholder={ __( 'Select a gallery…', 'ninja-gallery' ) }
			loading={ isFetching || isLoading }
			onSearch={ setSearchTerm }
			searchable
		/>
	);
};

export default GalleryPicker;
