/**
 * Pninja Media Gallery — Admin SPA entry point.
 * Mounts the React app at #pnpng-admin using HashRouter.
 */
import '~/assets/sass/common.scss';
import '~/assets/sass/admin.scss';
import { createRoot, StrictMode } from '@wordpress/element';
import { Provider }               from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AdminLayout    from '~/components/organisms/AdminLayout';
import GalleriesPage  from '~/components/pages/GalleriesPage';
import GalleryEditPage from '~/components/pages/GalleryEditPage';
import SettingsPage   from '~/components/pages/SettingsPage';
import { store }      from '~/store/store';

const rootEl = document.getElementById( 'pnpng-admin' );

if ( rootEl ) {
	createRoot( rootEl ).render(
		<StrictMode>
			<Provider store={ store }>
				<HashRouter>
					<AdminLayout>
						<Routes>
							<Route path="/"             element={ <GalleriesPage /> } />
							{ /* static /gallery/new must come before dynamic /gallery/:id */ }
							<Route path="/gallery/new"  element={ <GalleryEditPage key="new" /> } />
							<Route path="/gallery/:id"  element={ <GalleryEditPage /> } />
							<Route path="/settings/:menuKey" element={ <SettingsPage /> } />
						</Routes>
					</AdminLayout>
				</HashRouter>
			</Provider>
		</StrictMode>
	);
}
