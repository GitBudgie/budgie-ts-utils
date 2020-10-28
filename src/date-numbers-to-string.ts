import { padStartNumber } from './pad-start-number';

// Returns the date numbers converted into a string.
//
// Adds leading zeroes as needed.
//
// Does not validate the sanity of the date.
//
// The year can be negative.
//
// Examples:
//         dateNumbersToString(99, 1, 31); // '0099-01-31'
//         dateNumbersToString(1999, 12, 31); // '1999-12-31'
//         dateNumbersToString(-99, -1, -31, ':'); // '-0099-01:31'
export function dateNumbersToString(
	year: number,
	month: number,
	day: number,
	delimiter: string = '-'
): string {

	return (padStartNumber(year, 4, '0', '-') + delimiter +
		padStartNumber(month, 2, '0') + delimiter +
		padStartNumber(day, 2, '0'));
}
