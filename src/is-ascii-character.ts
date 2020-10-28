import { isString } from './is-string';

// Returns true if the parameter is an ASCII character.
//
// An ASCII character is a string that is one character long
// and the Unicode code point of that character is 0 - 127.
//
// Examples:
//         isAsciiCharacter('A'); // true (65)
//         isAsciiCharacter('😀'); // false (128512)
//         isAsciiCharacter(''); // false
export function isAsciiCharacter(obj: any): boolean {

	if (!isString(obj) || obj.length !== 1)
		return false;

	const c = obj.charCodeAt(0);
	return c > -1 && c < 128;
}
