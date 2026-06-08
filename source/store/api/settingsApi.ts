import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

declare const pnpngAdmin: { restUrl: string; nonce: string };

export interface PluginSettings {
	default_layout:   'grid' | 'masonry';
	default_columns:  number;
	lightbox_enabled: boolean;
	image_size:       string;
	lazy_load_default?: boolean;
	thumbnail_generation?: boolean;
	enable_caching?: boolean;
	keyboard_navigation?: boolean;
	focus_indicators?: boolean;
	reduced_motion?: boolean;
}

export const settingsApi = createApi( {
	reducerPath: 'settingsApi',
	baseQuery:   fetchBaseQuery( {
		baseUrl: pnpngAdmin.restUrl + '/',
		prepareHeaders: ( headers ) => {
			headers.set( 'X-WP-Nonce', pnpngAdmin.nonce );
			return headers;
		},
	} ),
	tagTypes: ['Settings'],
	endpoints: ( builder ) => ( {
		getSettings: builder.query<{ success: boolean; data: PluginSettings }, void>( {
			query:        () => 'settings',
			providesTags: ['Settings'],
		} ),
		saveSettings: builder.mutation<{ success: boolean; data: PluginSettings }, Partial<PluginSettings>>( {
			query:          ( body ) => ( { url: 'settings', method: 'POST', body } ),
			invalidatesTags: ['Settings'],
		} ),
	} ),
} );

export const { useGetSettingsQuery, useSaveSettingsMutation } = settingsApi;
