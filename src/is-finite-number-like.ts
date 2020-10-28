import { isFiniteNumberLikeString } from './is-finite-number-like-string';
import { isParsableObject } from './is-parsable-object';

// Returns true if the parameter is finite-number-like.
//
// Comprehends only bigints, numbers and strings.
//
// Examples:
//         isFiniteNumberLike(1); // true
//         isFiniteNumberLike(123.456); // true
//         isFiniteNumberLike('+123'); // true
//         isFiniteNumberLike('-123'); // true
//         isFiniteNumberLike('2.0'); // true
//         isFiniteNumberLike(BigInt(123)); // true
//         isFiniteNumberLike(BigInt(999999999999)); // true
//         isFiniteNumberLike('1e+999'); // false
//         isFiniteNumberLike('1a'); // false
//         isFiniteNumberLike('5 '); // false
//         isFiniteNumberLike(Infinity); // false
//         isFiniteNumberLike(NaN); // false
//         isFiniteNumberLike(null); // false
export function isFiniteNumberLike(obj: any): boolean {

	if (!isParsableObject(obj))
		return false;

	// Accept only the strict format from a string.
	if (typeof obj === 'string' && !isFiniteNumberLikeString(obj))
		return false;

	try {
		return isFinite(parseFloat(obj));
	} catch (e) {
	}
	return false;
}

/*

The old code that did not check for finiteness

The regex check is faster than "parseFloat()".
Benchmarked at https://jsben.ch/

return /^[+-]?([0-9]*[.])?[0-9]+$/.test(obj);

*/
