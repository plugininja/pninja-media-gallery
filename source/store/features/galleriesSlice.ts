import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Gallery }               from '../api/galleryApi';

interface GalleriesState {
	selectedId: number | null;
	filter:     string;
}

const initialState: GalleriesState = {
	selectedId: null,
	filter:     '',
};

const galleriesSlice = createSlice( {
	name: 'galleries',
	initialState,
	reducers: {
		selectGallery: ( state, action: PayloadAction<number | null> ) => {
			state.selectedId = action.payload;
		},
		setFilter: ( state, action: PayloadAction<string> ) => {
			state.filter = action.payload;
		},
	},
} );

export const { selectGallery, setFilter } = galleriesSlice.actions;
export default galleriesSlice.reducer;
