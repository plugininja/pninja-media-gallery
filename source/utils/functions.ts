import { __ } from "@wordpress/i18n";

export const toBoolean = ( val: boolean | string | number | undefined | null ): boolean => {
	if ( typeof val === 'boolean' ) return val;
	if ( typeof val === 'string' ) return val === '1' || val.toLowerCase() === 'true';
	if ( typeof val === 'number' ) return val === 1;
	return false;
};

export const getFormatDate = ( date_string: string ): string => {
	if ( ! date_string ) return '';
	const date = new Date( date_string );
	if ( isNaN( date.getTime() ) ) return date_string;
	return date.toLocaleDateString( 'en-US', {
		month: 'short',
		day:   'numeric',
		year:  'numeric',
	} );
};

export const formatDateToMonDayYear = ( dateTimeStr: string ): string => {
	const date = new Date( dateTimeStr );
	const months = [
		__( 'Jan', 'pninja-media-gallery' ), __( 'Feb', 'pninja-media-gallery' ),
		__( 'Mar', 'pninja-media-gallery' ), __( 'Apr', 'pninja-media-gallery' ),
		__( 'May', 'pninja-media-gallery' ), __( 'Jun', 'pninja-media-gallery' ),
		__( 'Jul', 'pninja-media-gallery' ), __( 'Aug', 'pninja-media-gallery' ),
		__( 'Sep', 'pninja-media-gallery' ), __( 'Oct', 'pninja-media-gallery' ),
		__( 'Nov', 'pninja-media-gallery' ), __( 'Dec', 'pninja-media-gallery' ),
	];
	return `${ months[ date.getMonth() ] } ${ date.getDate() } ${ date.getFullYear() }`;
};

export const formatFileSize = ( bytes: number ): string => {
	if ( bytes === 0 ) return '0 Bytes';
	const k     = 1024;
	const sizes = [ 'Bytes', 'KB', 'MB', 'GB', 'TB' ];
	const i     = Math.floor( Math.log( bytes ) / Math.log( k ) );
	return parseFloat( ( bytes / Math.pow( k, i ) ).toFixed( 2 ) ) + ' ' + sizes[ i ];
};

export const uniqueBy = ( arr: Array<any>, key: string ): Array<any> => {
	const seen = new Set();
	return arr.filter( ( item ) => {
		if ( seen.has( item[ key ] ) ) return false;
		seen.add( item[ key ] );
		return true;
	} );
};

export function deepEqual( a: any, b: any ): boolean {
	if ( a === b ) return true;
	if ( a === null || b === null || typeof a !== 'object' || typeof b !== 'object' ) return a === b;
	if ( Array.isArray( a ) && Array.isArray( b ) ) {
		if ( a.length !== b.length ) return false;
		return a.every( ( v, i ) => deepEqual( v, b[ i ] ) );
	}
	if ( Array.isArray( a ) !== Array.isArray( b ) ) return false;
	const keysA = Object.keys( a );
	const keysB = Object.keys( b );
	if ( keysA.length !== keysB.length ) return false;
	return keysA.every( ( k ) => keysB.includes( k ) && deepEqual( a[ k ], b[ k ] ) );
}
