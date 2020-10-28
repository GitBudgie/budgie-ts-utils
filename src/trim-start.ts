import { escapeRegExp } from './escape-reg-exp';
import { isPopulatedArray } from './is-populated-array';
import { isPopulatedString } from './is-populated-string';

// Returns the string with whitespace removed from the beginning.
//
// The optional strings are the ones to remove instead of whitespace.
//
// Examples:
//         trimStart(' abc'); // 'abc'
//         trimStart('abcdef', ['abc']); // 'def'
export function trimStart(str: string, optStrings: string[] = []): string {

	if (!isPopulatedString(str))
		return '';

	if (!isPopulatedArray(optStrings))
		return str.replace(/^\s+/, '');

	for (const optStr of optStrings) {
		const pattern = '^(' + escapeRegExp(optStr) + ')+';
		const reg = new RegExp(pattern, 'g');
		str = str.replace(reg, '');
	}
	return str;
}
