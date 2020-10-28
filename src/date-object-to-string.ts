import { dateNumbersToString } from './date-numbers-to-string';
import { defaultDateString } from './default-date-string';
import { isObject } from './is-object';

// Returns the date object converted into a string.
// Returns the default value if the parameter is not valid.
//
// Does not require an exact DateObject but accepts any likeness.
//
// Does not validate the sanity of the date.
//
// The year can be negative.
//
// Examples:
//
//         dateObjectToString({ year: 1999, month: 12, day: 31 });
//                 // '1999-12-31'
//
//         dateObjectToString({ year: 1, month: 1, day: 1 });
//                 // '0001-01-01'
//
//         dateObjectToString({ year: -1, month: -1, day: -1 });
//                 // '-0001-01-01'
//
//         dateObjectToString({ month: 1 });
//                 // '0000-01-00'
//
//         dateObjectToString(null, 'err');
//                 // 'err'
//
export function dateObjectToString(
	dateObj: any,
	defaultValue: string = defaultDateString,
	delimiter: string = '-'
): string {

	if (!isObject(dateObj))
		return defaultValue;

	return (dateNumbersToString(
		Number(dateObj.year),
		Number(dateObj.month),
		Number(dateObj.day),
		delimiter));
}
