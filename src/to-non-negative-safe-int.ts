import { toSafeInt } from './to-safe-int';

// Returns the parameter converted into a non-negative safe integer.
// Returns an integer that is zero or greater.
//
// Converts only numbers and strings. The other types return 0.
//
// Examples:
//         toNonNegativeSafeInt(47); // 47
//         toNonNegativeSafeInt(99.9); // 99
//         toNonNegativeSafeInt(9007199254740992); // 0
//         toNonNegativeSafeInt('-5'); // 0
//         toNonNegativeSafeInt(NaN); // 0
export function toNonNegativeSafeInt(obj: any): number {

	const n = toSafeInt(obj);
	return n > 0 ? n : 0;
}
