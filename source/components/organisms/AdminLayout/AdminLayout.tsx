import MainLayout from '~/components/templates/MainLayout';
import Topbar from '~/components/molecules/Topbar';
import Menus from '~/components/molecules/Menus';
import Button from '~/components/atoms/Button';
import Logo from '~/components/atoms/Logo';
import { useNavigate, useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';

interface AdminLayoutProps {
	children?: React.ReactNode;
}

const ADMIN_MENUS = [
	{ key: 'galleries', title: __( 'Galleries', 'pninja-media-gallery' ), icon: 'grid_view' },
	{ key: 'settings',  title: __( 'Settings',  'pninja-media-gallery' ), icon: 'settings' },
];

const AdminLayout = ( { children }: AdminLayoutProps ) => {
	const navigate  = useNavigate();
	const location  = useLocation();

	const activeMenu = location.pathname.startsWith( '/settings' ) ? 'settings' : 'galleries';

	const handleMenuClick = ( key: string ) => {
		if ( key === 'galleries' ) navigate( '/' );
		else if ( key === 'settings' ) navigate( '/settings/general' );
	};

	const logo = <Logo />;

	const newGalleryBtn = (
		<Button
			key="pnpng-new-gallery"
			variant="primary"
			startIcon="add"
			onClick={ () => navigate( '/gallery/new' ) }
		>
			{ __( 'New Gallery', 'pninja-media-gallery' ) }
		</Button>
	);

	return (
		<div className="pnpnd-top-level-wrapper">
			<MainLayout>
				<MainLayout.ContentWrapper>
					<Topbar
						leftContents={ [ logo ] }
						rightContents={ [ newGalleryBtn ] }
						wrap={ false }
						leftContentsClassName=""
						zIndex={ 99999 }
					>
						<Menus
							menus={ ADMIN_MENUS }
							active={ activeMenu }
							onMenuClick={ handleMenuClick }
						/>
					</Topbar>

					<MainLayout.Content>
						{ children }
					</MainLayout.Content>
				</MainLayout.ContentWrapper>
			</MainLayout>
		</div>
	);
};

export default AdminLayout;
