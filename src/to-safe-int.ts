import { toFiniteNumber } from './to-finite-number';

export const SAFE_INT_MAX = Number.MAX_SAFE_INTEGER;

export const SAFE_INT_MIN = Number.MIN_SAFE_INTEGER;

// Returns the parameter converted into a safe integer.
//
// A safe integer is between -9007199254740991 and 9007199254740991.
//
// Converts only bigints, numbers and strings. The other types return 0.
//
//
// Note: Floating point numbers suffer from precision errors:
//
//         Math.trunc(3.999999999999999); // 3
//         Math.trunc(3.9999999999999999); // 4
//         Math.trunc(9007199254740990.5); // 9007199254740990
//         Math.trunc(9007199254740990.6); // 9007199254740991
//
//
// Examples:
//         toSafeInt(3133713); // 3133713
//         toSafeInt('7.28'); // 7
//         toSafeInt('-25'); // -25
//         toSafeInt(-9007199254740991); // -9007199254740991
//         toSafeInt(9007199254740992); // 0
//         toSafeInt(BigInt(1234567890)); // 1234567890
//         toSafeInt(Infinity); // 0
//         toSafeInt(null); // 0
//         toSafeInt(NaN); // 0
export function toSafeInt(obj: any): number {

	const num = toFiniteNumber(obj);
	return num < SAFE_INT_MIN || num > SAFE_INT_MAX ? 0 : Math.trunc(num);
}
