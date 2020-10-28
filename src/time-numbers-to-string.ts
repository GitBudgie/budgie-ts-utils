import { getPadLengthForFoasType } from './get-pad-length-for-foas-type';
import { padStartNumber } from './pad-start-number';

// Returns the time numbers converted into a string.
//
// Adds leading zeroes as needed.
//
// Does not validate the sanity of the time.
//
// Examples:
//         timeNumbersToString(1, 2, 3); // '01:02:03'
//         timeNumbersToString(23, 59, 59, 99, 'ms'); // '23:59:59:099'
//         timeNumbersToString(-1, -1, -1); // '00:00:00'
export function timeNumbersToString(
	hour: number = 0,
	minute: number = 0,
	second: number = 0,
	foas: number = 0,
	foasType: string = '',
	delimiter: string = ':'
): string {

	let str = padStartNumber(hour, 2, '0') + delimiter +
		padStartNumber(minute, 2, '0') + delimiter +
		padStartNumber(second, 2, '0');

	if (foasType.length > 0) {
		const n = getPadLengthForFoasType(foasType);
		str += delimiter + padStartNumber(foas, n, '0');
	}
	return str;
}
