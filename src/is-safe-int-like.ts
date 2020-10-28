import { isIntLikeString } from './is-int-like-string';
import { isParsableObject } from './is-parsable-object';
import { isSafeInt } from './is-safe-int';

// Returns true if the parameter is "safe integer"-like.
//
// Comprehends only bigints, numbers and strings.
//
// Note: A numeric value 5.0000000000000001 will return true
// but a string value '5.0000000000000001' will return false.
// See "JavaScript Number.isInteger()" from MDN docs.
//
// Examples:
//         isSafeIntLike(1); // true
//         isSafeIntLike('123'); // true
//         isSafeIntLike('+123'); // true
//         isSafeIntLike('-123'); // true
//         isSafeIntLike(2.0); // true: JavaScript converts to 2
//         isSafeIntLike(BigInt(123)); // true
//         isSafeIntLike(BigInt(9999999999999999)); // false
//         isSafeIntLike('1e+999'); // false
//         isSafeIntLike('7 '); // false
//         isSafeIntLike('2.0'); // false
//         isSafeIntLike(2.1); // false
//         isSafeIntLike(Infinity); // false
//         isSafeIntLike(NaN); // false
//         isSafeIntLike(null); // false
export function isSafeIntLike(obj: any): boolean {

	if (!isParsableObject(obj))
		return false;

	// Accept only the strict format from a string.
	if (typeof obj === 'string' && !isIntLikeString(obj))
		return false;

	try {
		return isSafeInt(parseFloat(obj));
	} catch (e) {
	}
	return false;
}

/*

The old code that did not check for finiteness

The regex check is faster than "parseFloat()".
Benchmarked at https://jsben.ch/

return /^[+-]?[0-9]+$/.test(obj);

*/
