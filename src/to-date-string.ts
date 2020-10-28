import { dateObjectToString } from './date-object-to-string';
import { defaultDateString } from './default-date-string';
import { toDateObject } from './to-date-object';

// Returns the parameter converted into a date string.
// Returns the default value if the parameter is not valid.
//
// The format is "yyyy-mm-dd". Leading zeroes are ignored and not required.
//
// Examples:
//         toDateString('1-2-3'); // '0001-02-03'
//         toDateString('99-12-31'); // '0099-12-31'
//         toDateString('1999-12-31'); // '1999-12-31'
//         toDateString('', 'err'); // 'err'
export function toDateString(
	obj: any,
	defaultValue: string = defaultDateString,
	delimiter: string = '-'
): string {

	const dateObj = toDateObject(obj, delimiter);
	return dateObjectToString(dateObj, defaultValue, delimiter);
}
