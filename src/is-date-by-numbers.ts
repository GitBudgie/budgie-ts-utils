import { isSafeInt } from './is-safe-int';

// Returns true if the date - defined by safe integer numbers - is valid.
//
// Supports years from -9999 to 9999.
// The month parameter is an order number (1 - 12), not an index (0 - 11).
//
// Examples:
//         isDateByNumbers(2020, 1, 26); // true
//         isDateByNumbers(2525, 12, 31); // true
//         isDateByNumbers(-9999, 12, 31); // true
//         isDateByNumbers(3535, 13, 32); // false
export function isDateByNumbers(
	year: number = 0,
	month: number = 0,
	day: number = 0
): boolean {

	// The built-in Date accepts only integer numbers.
	if (!isSafeInt(year) || !isSafeInt(month) || !isSafeInt(day))
		return false;

	// Avoid surely invalid values.
	if (year < -9999 || year > 9999 || month < 1 || month > 12 ||
		day < 1 || day > 31)
		return false;

	// "In order to create and get dates between the years 0 and 99
	// the Date.prototype.setFullYear() and Date.prototype.getFullYear()
	// methods should be used." (MDN)
	const d = new Date(0);
	d.setUTCFullYear(year);
	d.setUTCMonth(--month, day);

	// About "setUTCMonth()": "If you do not specify the 'dayValue'
	// parameter, the value returned from the 'getUTCDate()'
	// method is used. -- If a parameter you specify is outside
	// of the expected range, 'setUTCMonth()' attempts to update
	// the date information in the Date object accordingly." (MDN)
	//
	// If today is 2020-09-30 and the above code runs like this:
	//
	//         1. const d = new Date(); // 2020-8-30
	//         2. d.setUTCFullYear(1999); // 1999-8-30
	//         3. d.setUTCMonth(1); // 1999-2-2
	//         4. d.setUTCDate(9); // 1999-2-9
	//
	// The indexed month value will be 2 (March) after line 3!
	// Why? Because the current day 30 will be used for February (1).
	// This causes an internal date 1999-01-30 (30th of February 1999)
	// - which is invalid - and results to March (2).
	// The following test will then fail (months do not match).
	//
	// Lesson learned: Always initialize a base Date with zero (0)
	// or at least set (UTC) month and date together.

	// The Date may be "Invalid Date" after setting extreme values.
	return (!Number.isNaN(d.valueOf()) &&
		d.getUTCFullYear() === year &&
		d.getUTCMonth() === month &&
		d.getUTCDate() === day);
}
