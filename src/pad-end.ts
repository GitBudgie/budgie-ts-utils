import { repeatString } from './repeat-string';
import { toNonNegativeSafeInt } from './to-non-negative-safe-int';

// Returns the string padded to the length from the end (right).
//
// Examples:
//         padEnd('1', 1, '0'); // '1'
//         padEnd('1', 2, '0'); // '10'
//         padEnd('abc', 3, '123'); // 'abc'
//         padEnd('abc', 7, '123'); // 'abc1234'
//         padEnd('abc', 9, '123'); // 'abc123123'
//         padEnd('abcdef', 3, '123'); // 'abcdef'
export function padEnd(
	str: string,
	len: number,
	pad: string = '0'
): string {

	len = toNonNegativeSafeInt(len);

	if (str.length >= len || pad.length < 1)
		return str;

	const space = len - str.length;
	if (space === pad.length)
		return str + pad;

	return str + repeatString(pad, space);
}
