import { isPopulatedString } from './is-populated-string';

// Returns the string with the first character capitalized.
//
// Examples:
//         upFirstChar('hello'); // 'Hello'
//         upFirstChar(' hello'); // ' hello'
export function upFirstChar(str: string): string {

	if (!isPopulatedString(str))
		return '';

	const chr = str.charAt(0).toUpperCase();
	return str.length < 2 ? chr : chr + str.slice(1);
}
