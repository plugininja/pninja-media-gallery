/**
 * Returns true if value is a non-empty array.
 */
export function isValidArray<T = unknown>(
	value: T[] | undefined | null,
): value is Array<T> {
	return Array.isArray( value ) && value.length > 0;
}
