import { repeatString } from './repeat-string';
import { toNonNegativeSafeInt } from './to-non-negative-safe-int';

// Returns the string padded to the length from the start (left).
//
// Examples:
//         padStart('1', 1, '0'); // '1'
//         padStart('1', 2, '0'); // '01'
//         padStart('abc', 3, '123'); // 'abc'
//         padStart('abc', 7, '123'); // '1234abc'
//         padStart('abc', 9, '123'); // '123123abc'
//         padStart('abcdef', 3, '123'); // 'abcdef'
export function padStart(
	str: string,
	len: number,
	pad: string = '0'
): string {

	len = toNonNegativeSafeInt(len);

	if (str.length >= len || pad.length < 1)
		return str;

	const space = len - str.length;
	if (space === pad.length)
		return pad + str;

	return repeatString(pad, space) + str;
}
