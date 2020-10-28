import { isPopulatedString } from './is-populated-string';

// Returns true if the parameter is a "finite number"-like string.
//
// Examples:
//         isFiniteNumberLikeString('0'); // true
//         isFiniteNumberLikeString('123'); // true
//         isFiniteNumberLikeString('+123.456'); // true
//         isFiniteNumberLikeString('-123.456'); // true
//         isFiniteNumberLikeString(' 0'); // false
//         isFiniteNumberLikeString('abc'); // false
export function isFiniteNumberLikeString(str: string): boolean {

	if (!isPopulatedString(str))
		return false;

	return /^[+-]?([0-9]*[.])?[0-9]+$/.test(str);
}
