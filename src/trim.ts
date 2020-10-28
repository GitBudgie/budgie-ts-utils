import { isPopulatedArray } from './is-populated-array';
import { isPopulatedString } from './is-populated-string';
import { trimEnd } from './trim-end';
import { trimStart } from './trim-start';

// Returns the string with whitespace removed from beginning and end.
//
// The optional strings are the ones to remove instead of whitespace.
//
// Examples:
//         trim('   abc   '); // 'abc'
//         trim('xyzabcxyz', ['xyz']); // 'abc'
export function trim(str: string, optStrings: string[] = []): string {

	if (!isPopulatedString(str))
		return '';

	if (!isPopulatedArray(optStrings))
		return str.trim();

	return trimEnd(trimStart(str, optStrings), optStrings);
}
