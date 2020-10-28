import { isString } from './is-string';

// Returns true if the parameter is a string of single ASCII digit (0 - 9).
//
// An ASCII digit is a numeric character from 0 to 9.
// The corresponding Unicode code points are 48 - 57.
//
// Examples:
//         isAsciiDigit('0'); // true
//         isAsciiDigit('a'); // false
//         isAsciiDigit(''); // false
export function isAsciiDigit(obj: any): boolean {

	if (!isString(obj) || obj.length !== 1)
		return false;

	const c = obj.charCodeAt(0);
	return c > 47 && c < 58;
}
