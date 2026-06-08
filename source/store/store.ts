import { configureStore } from '@reduxjs/toolkit';
import { galleryApi }     from './api/galleryApi';
import { imageApi }       from './api/imageApi';
import { settingsApi }    from './api/settingsApi';
import galleriesReducer   from './features/galleriesSlice';
import uiReducer          from './features/uiSlice';

export const store = configureStore( {
	reducer: {
		galleries:                galleriesReducer,
		ui:                       uiReducer,
		[galleryApi.reducerPath]:  galleryApi.reducer,
		[imageApi.reducerPath]:    imageApi.reducer,
		[settingsApi.reducerPath]: settingsApi.reducer,
	},
	middleware: ( getDefaultMiddleware ) =>
		getDefaultMiddleware()
			.concat( galleryApi.middleware )
			.concat( imageApi.middleware )
			.concat( settingsApi.middleware ),
} );

export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
