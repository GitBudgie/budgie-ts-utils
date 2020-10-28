import { isPopulatedString } from './is-populated-string';

// Returns true if the parameter is an integer-like string.
//
// Examples:
//         isIntLikeString('0'); // true
//         isIntLikeString('123'); // true
//         isIntLikeString('+123'); // true
//         isIntLikeString('-123'); // true
//         isIntLikeString(' 0'); // false
//         isIntLikeString('abc'); // false
export function isIntLikeString(str: string): boolean {

	if (!isPopulatedString(str))
		return false;

	return /^[+-]?[0-9]+$/.test(str);
}
