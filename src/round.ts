import { toClampedSafeInt } from './to-clamped-safe-int';

// Returns the number rounded to the precision.
// Returns NaN if the given parameter "num" is NaN.
// Returns Infinity or -Infinity for an infinite result.
//
// The optional "precision" is the number of digits after the decimal point.
// The allowed range is 0 - 15. The recommended range is 0 - 7.
//
// A number only keeps about 17 decimal places of precision.
// Practically, the safe range is 0 - 15.
//
// Rounds towards negative or positive infinity:
// returns -1 for -0.5, whereas "Math.round()" returns -0.
//
// Does not work reliably with extreme values.
//
// For examples:
//         Number('9999999999999999.123456789') = 10000000000000000
//         Number('1234567890123.1234567890') = 1234567890123.1235
//         Number('1234567890.1234567890') = 1234567890.1234567
//         Number('1234567890.1234567890') = 1234567890.1234567
//         Number('0.12345678901234567') = 0.12345678901234566
//
// "JavaScript uses double-precision floating-point format numbers
// as specified in IEEE 754 and can only safely represent numbers
// between -(2^53 - 1) and 2^53 - 1." (MDN)
//
// Examples:
//         round(5); // 5
//         round(5.5); // 6
//         round(5.12345, 4); // 5.1235
//         round(0.5); // 1
//         round(0.4999999); // 0
//         round(0); // 0
//         round(-0); // -0
//         round(-0.4999999); // -0
//         round(-0.5); // -1
//         round(Infinity); // Infinity
//         round(-Infinity); // -Infinity
//         round(NaN); // NaN
export function round(num: number, precision: number = 0): number {

	if (!isFinite(num))
		return num;

	// A simple trick with the scale factor.
	// The epsilon is used to ensure correct rounding.
	//
	// "The Math.pow() function returns the base to the exponent power,
	// that is, base^exponent." (MDN)
	const sign = Math.sign(num);
	const e = Math.pow(10, toClampedSafeInt(precision, 0, 0, 15));
	num = Math.round((Math.abs(num) + Number.EPSILON) * e) / e * sign;
	return num;
}
