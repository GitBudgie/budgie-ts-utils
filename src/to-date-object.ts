import { DateObject } from './classes/date-object';
import { isAsciiDigitString } from './is-ascii-digit-string';
import { isDateByNumbers } from './is-date-by-numbers';
import { isIntLikeString } from './is-int-like-string';
import { isPopulatedString } from './is-populated-string';

// Returns the parameter converted into a DateObject.
// Returns null if the parameter is not valid.
//
// The format is "yyyy-mm-dd". Leading zeroes are ignored and not required.
//
// The year can be negative.
//
// Examples:
//         toDateObject('1999-12-31'); // { year: 1999, month: 12, day: 31 }
//         toDateObject('-1:1:1', ':'); // { year: -1, month: 1, day: 1 }
//         toDateObject('1999-12-32'); // null
//         toDateObject(''); // null
export function toDateObject(
	obj: any,
	delimiter: string = '-'
): DateObject | null {

	if (!isPopulatedString(obj))
		return null;

	const arr = obj.trim().split(delimiter);
	if (arr.length !== 3 || !isIntLikeString(arr[0]) ||
		!isAsciiDigitString(arr[1]) || !isAsciiDigitString(arr[2]))
		return null;

	const year = Number(arr[0]);
	const month = Number(arr[1]);
	const day = Number(arr[2]);
	if (!isDateByNumbers(year, month, day))
		return null;

	return { year, month, day };
}
