import { __ }           from '@wordpress/i18n';
import { LoadingProps } from "./Loading.type";

const Loading = ( { id, className }: LoadingProps ) => (
    <span
        id={ id }
        className={ [ "pnpng-spinner", className ].filter( Boolean ).join( " " ) }
        aria-label={ __( 'Loading', 'ninja-gallery' ) }
        role="status"
    />
);

export default Loading;
