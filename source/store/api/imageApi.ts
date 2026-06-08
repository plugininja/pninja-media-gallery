import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

declare const pnpngAdmin: { restUrl: string; nonce: string };

export interface GalleryImage {
	id:            number;
	gallery_id:    number;
	attachment_id: number;
	src:           string;
	alt:           string;
	caption:       string;
	link:          string;
	sort_order:    number;
	created_at:    string;
}

export const imageApi = createApi( {
	reducerPath: 'imageApi',
	baseQuery:   fetchBaseQuery( {
		baseUrl: pnpngAdmin.restUrl + '/',
		prepareHeaders: ( headers ) => {
			headers.set( 'X-WP-Nonce', pnpngAdmin.nonce );
			return headers;
		},
	} ),
	tagTypes: ['Image'],
	endpoints: ( builder ) => ( {
		getImages: builder.query<{ success: boolean; data: GalleryImage[] }, number>( {
			query:        ( galleryId ) => `galleries/${galleryId}/images`,
			providesTags: ( _r, _e, galleryId ) => [ { type: 'Image', id: galleryId } ],
		} ),
		addImage: builder.mutation<{ success: boolean; data: GalleryImage }, { galleryId: number; attachment_id?: number; src?: string; alt?: string; caption?: string }>( {
			query:          ( { galleryId, ...body } ) => ( { url: `galleries/${galleryId}/images`, method: 'POST', body } ),
			invalidatesTags: ( _r, _e, { galleryId } ) => [ { type: 'Image', id: galleryId } ],
		} ),
		updateImage: builder.mutation<{ success: boolean; data: GalleryImage }, { galleryId: number; id: number; alt?: string; caption?: string; link?: string }>( {
			query:          ( { galleryId, id, ...body } ) => ( { url: `galleries/${galleryId}/images/${id}`, method: 'PUT', body } ),
			invalidatesTags: ( _r, _e, { galleryId } ) => [ { type: 'Image', id: galleryId } ],
		} ),
		removeImage: builder.mutation<{ success: boolean; data: { deleted: boolean; id: number } }, { galleryId: number; id: number }>( {
			query:          ( { galleryId, id } ) => ( { url: `galleries/${galleryId}/images/${id}`, method: 'DELETE' } ),
			invalidatesTags: ( _r, _e, { galleryId } ) => [ { type: 'Image', id: galleryId } ],
		} ),
		reorderImages: builder.mutation<{ success: boolean }, { galleryId: number; order: { id: number; sort_order: number }[] }>( {
			query:          ( { galleryId, order } ) => ( { url: `galleries/${galleryId}/images/reorder`, method: 'POST', body: { order } } ),
			invalidatesTags: ( _r, _e, { galleryId } ) => [ { type: 'Image', id: galleryId } ],
		} ),
	} ),
} );

export const {
	useGetImagesQuery,
	useAddImageMutation,
	useUpdateImageMutation,
	useRemoveImageMutation,
	useReorderImagesMutation,
} = imageApi;
