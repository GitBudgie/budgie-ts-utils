import { dateObjectToString } from './date-object-to-string';
import { defaultDateTimeString } from './default-date-time-string';
import { isObject } from './is-object';
import { timeObjectToString } from './time-object-to-string';
import { toStr } from './to-str';

// Returns the date-time object converted into a string.
// Returns the default value if the parameter is not valid.
//
// Does not require an exact DateTimeObject but accepts any likeness.
//
// Does not validate the sanity of the date-time.
//
// The year can be negative.
//
// Examples:
//
//         dateTimeObjectToString({ year: 1, month: 2, day: 3,
//                 hour: 4, minute: 5, second: 6 });
//                         // '0001-02-03 04:05:06'
//
//         dateTimeObjectToString({ year: 1999, month: 12, day: 31,
//                 hour: 23, minute: 59, second: 0,
//                 foas: 999, foasType: 'ms' });
//                         // '1999-12-31 23:59:59:999'
//
export function dateTimeObjectToString(
	dateTimeObj: any,
	defaultValue: string = defaultDateTimeString,
	delimiterDate: string = '-',
	delimiterType: string = ' ',
	delimiterTime: string = ':'
): string {

	if (!isObject(dateTimeObj))
		return defaultValue;

	const arr = defaultValue.split(delimiterType);
	const defaultDateStr = toStr(arr[0]);
	const defaultTimeStr = toStr(arr[1]);

	const dateStr = dateObjectToString(
		dateTimeObj, defaultDateStr, delimiterDate);

	const timeStr = timeObjectToString(
		dateTimeObj, defaultTimeStr, delimiterTime);

	return dateStr + delimiterType + timeStr;
}
