import { isParsableObject } from './is-parsable-object';

// Returns the parameter converted into a number.
//
// Converts only bigints, numbers and strings. The other types return NaN.
//
// Basically, this is a try-catch wrapper for "parseFloat()".
//
// Notes:
//
// The internal parseFloat returns NaN for invalid numbers
// and Infinity for too big numbers. It may throw errors.
//
// Also nice to know:
//
//            parseInt(99999999999999999999); // 100000000000000000000
//           parseInt(999999999999999999999); // 1
//          parseFloat(99999999999999999999); // 100000000000000000000
//         parseFloat(999999999999999999999); // 1e+21
//                            isFinite(null); // true (!)
//
// Examples:
//         toNumber(123); // 123
//         toNumber('3.1'); // 3.1
//         toNumber('-3.1'); // -3.1
//         toNumber('1e+999'); // Infinity
//         toNumber(BigInt(1234567890)); // 1234567890
//         toNumber(Infinity); // Infinity
//         toNumber('test'); // NaN
//         toNumber(null); // NaN
//         toNumber(NaN); // NaN
export function toNumber(obj: any): number {

	if (typeof obj === 'number')
		return obj;

	if (isParsableObject(obj)) {
		try {
			return parseFloat(obj);
		} catch (e) {
			console.error('toNumber', e);
		}
	}
	return NaN;
}
