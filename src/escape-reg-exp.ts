import { isPopulatedString } from './is-populated-string';

// Returns the string as an escaped version for a regular expression.
//
// Warning! Not thoroughly tested!
//
// Examples:
//         escapeRegExp('['); // '\['
//         escapeRegExp(''); // ''
export function escapeRegExp(str: string): string {

	if (!isPopulatedString(str))
		return '';

	return str.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
}
