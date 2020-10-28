import { toNumber } from './to-number';

// Returns the parameter converted into a finite number.
//
// Converts only bigints, numbers and strings. The other types return 0.
//
// Examples:
//         toFiniteNumber('-3.1'); // -3.1
//         toFiniteNumber('3.1'); // 3.1
//         toFiniteNumber(null); // 0
//         toFiniteNumber(Infinity); // 0
//         toFiniteNumber(NaN); // 0
export function toFiniteNumber(obj: any): number {

	const num = toNumber(obj);
	return isFinite(num) ? num : 0;
}
