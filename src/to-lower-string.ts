import { toStr } from './to-str';

// Returns the parameter converted into a lower case string.
//
// Converts only bigints, numbers and strings.
// The other types return an empty string.
//
// Examples:
//         toLowerString(123.4567); // '123.4567'
//         toLowerString('HELLO'); // 'hello'
//         toLowerString(null); // ''
export function toLowerString(obj: any): string {

	return toStr(obj).toLowerCase();
}
