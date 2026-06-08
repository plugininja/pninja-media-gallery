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
		__( 'Jan', 'ninja-gallery' ), __( 'Feb', 'ninja-gallery' ),
		__( 'Mar', 'ninja-gallery' ), __( 'Apr', 'ninja-gallery' ),
		__( 'May', 'ninja-gallery' ), __( 'Jun', 'ninja-gallery' ),
		__( 'Jul', 'ninja-gallery' ), __( 'Aug', 'ninja-gallery' ),
		__( 'Sep', 'ninja-gallery' ), __( 'Oct', 'ninja-gallery' ),
		__( 'Nov', 'ninja-gallery' ), __( 'Dec', 'ninja-gallery' ),
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
