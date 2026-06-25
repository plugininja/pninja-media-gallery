import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

declare const pninjaAdmin: { restUrl: string; nonce: string };

export interface Gallery {
	id:                  number;
	title:               string;
	description:         string;
	slug:                string;
	layout:              'grid' | 'masonry' | 'justified' | 'album';
	columns:             number;
	gap:                 number;
	border_radius:       number;
	shadow:              'none' | 'small' | 'medium' | 'large';
	hover_effect:        'none' | 'zoom' | 'fade' | 'slide';
	overlay_style:       'none' | 'dark' | 'dark-gradient' | 'light' | 'color';
	lightbox:            boolean;
	lightbox_transition: 'fade' | 'slide' | 'zoom';
	lightbox_captions:   boolean;
	lightbox_nav:        boolean;
	lazy_loading:        boolean;
	image_quality:       'low' | 'medium' | 'high' | 'original';
	tablet_columns:      number;
	mobile_columns:      number;
	css_class:           string;
	status:              'publish' | 'draft';
	author_id:           number;
	created_at:          string;
	updated_at:          string;
	image_count?:        number;    // included in list responses via SQL subquery
	preview_images?:     string[]; // first ≤4 image srcs, included in list responses
}

export interface GalleryListResponse {
	success: boolean;
	data: {
		items: Gallery[];
		meta: { total: number; page: number; per_page: number; pages: number };
	};
}

export interface GallerySingleResponse {
	success: boolean;
	data:    Gallery;
}

export const galleryApi = createApi( {
	reducerPath: 'galleryApi',
	baseQuery:   fetchBaseQuery( {
		baseUrl: pninjaAdmin.restUrl + '/',
		prepareHeaders: ( headers ) => {
			headers.set( 'X-WP-Nonce', pninjaAdmin.nonce );
			return headers;
		},
	} ),
	tagTypes: ['Gallery'],
	endpoints: ( builder ) => ( {
		getGalleries: builder.query<GalleryListResponse, { per_page?: number; page?: number }>( {
			query: ( params = {} ) => ( {
				url:    'galleries',
				params: { per_page: 20, page: 1, ...params },
			} ),
			providesTags: ['Gallery'],
		} ),
		getGallery: builder.query<GallerySingleResponse, number>( {
			query:        ( id ) => `galleries/${id}`,
			providesTags: ( _r, _e, id ) => [ { type: 'Gallery', id } ],
		} ),
		createGallery: builder.mutation<GallerySingleResponse, Partial<Gallery>>( {
			query:          ( body ) => ( { url: 'galleries', method: 'POST', body } ),
			invalidatesTags: ['Gallery'],
		} ),
		updateGallery: builder.mutation<GallerySingleResponse, { id: number } & Partial<Gallery>>( {
			query:          ( { id, ...body } ) => ( { url: `galleries/${id}`, method: 'PUT', body } ),
			invalidatesTags: ( _r, _e, { id } ) => [ { type: 'Gallery', id }, 'Gallery' ],
		} ),
		deleteGallery: builder.mutation<{ success: boolean; data: { deleted: boolean; id: number } }, number>( {
			query:          ( id ) => ( { url: `galleries/${id}`, method: 'DELETE' } ),
			invalidatesTags: ['Gallery'],
		} ),
	} ),
} );

export const {
	useGetGalleriesQuery,
	useGetGalleryQuery,
	useCreateGalleryMutation,
	useUpdateGalleryMutation,
	useDeleteGalleryMutation,
} = galleryApi;
