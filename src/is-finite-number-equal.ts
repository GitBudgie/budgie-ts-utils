import { toClampedSafeInt } from './to-clamped-safe-int';

// Returns true if the finite numbers are considered equal to the precision.
// Returns false if either number is not a finite number.
// Returns false if extreme values cause infiniteness.
//
// See "round()" for information on number, precision and rounding.
//
// Examples:
//         isFiniteNumberEqual(0.1, 0.2); // true
//         isFiniteNumberEqual(0.9, 1); // true
//         isFiniteNumberEqual(123.5, 123.5); // true
//         isFiniteNumberEqual(0.3, 0.30000000000000004); // true
//         isFiniteNumberEqual(0.123, 0.1234, 3); // true
//         isFiniteNumberEqual(0.123, 0.1234, 4); // false
//         isFiniteNumberEqual(0.4, 0.5); // false
//         isFiniteNumberEqual(0.9, 1, 1); // false
//         isFiniteNumberEqual(0.1, 0.2, 1); // false
//         isFiniteNumberEqual(-1000.1234, -1000.1235, 3); // false
export function isFiniteNumberEqual(
	a: number,
	b: number,
	precision: number = 0
): boolean {

	if (!isFinite(a) || !isFinite(b))
		return false;

	// A simple trick with the scale factor.
	// The epsilon is used to ensure correct rounding.
	//
	// This seems to be about 2 - 3 times faster
	// than comparing strings created by "toFixed(n)";
	const e = Math.pow(10, toClampedSafeInt(precision, 7, 0, 15));
	a = Math.round((Math.abs(a) + Number.EPSILON) * e) * Math.sign(a);
	b = Math.round((Math.abs(b) + Number.EPSILON) * e) * Math.sign(b);

	const diff = Math.abs(a - b);
	return isFinite(diff) ? diff < Number.EPSILON : false;
}
