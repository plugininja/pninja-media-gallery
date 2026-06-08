import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
	sidebarOpen:      boolean;
	lightboxImageSrc: string | null;
	isSaving:         boolean;
	toast:            { message: string; type: 'success' | 'error' } | null;
}

const initialState: UIState = {
	sidebarOpen:      true,
	lightboxImageSrc: null,
	isSaving:         false,
	toast:            null,
};

const uiSlice = createSlice( {
	name: 'ui',
	initialState,
	reducers: {
		toggleSidebar: ( state ) => {
			state.sidebarOpen = ! state.sidebarOpen;
		},
		openLightbox: ( state, action: PayloadAction<string> ) => {
			state.lightboxImageSrc = action.payload;
		},
		closeLightbox: ( state ) => {
			state.lightboxImageSrc = null;
		},
		setIsSaving: ( state, action: PayloadAction<boolean> ) => {
			state.isSaving = action.payload;
		},
		showToast: ( state, action: PayloadAction<UIState['toast']> ) => {
			state.toast = action.payload;
		},
		clearToast: ( state ) => {
			state.toast = null;
		},
	},
} );

export const { toggleSidebar, openLightbox, closeLightbox, setIsSaving, showToast, clearToast } = uiSlice.actions;
export default uiSlice.reducer;
