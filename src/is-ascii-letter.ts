import { isString } from './is-string';

// Returns true if the parameter is an ASCII letter (A-Z or a-z).
//
// An ASCII letter is a string that is one character long
// and the Unicode code point of that character is 65 - 90 or 97 - 122.
//
// Examples:
//         isAsciiLetter('A'); // true
//         isAsciiLetter('4'); // false
//         isAsciiLetter(''); // false
export function isAsciiLetter(obj: any): boolean {

	if (!isString(obj) || obj.length !== 1)
		return false;

	const c = obj.charCodeAt(0);
	return (c > 64 && c < 91) || (c > 96 && c < 123);
}
