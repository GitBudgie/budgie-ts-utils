import { DateTimeObject } from './classes/date-time-object';
import { isPopulatedString } from './is-populated-string';
import { isString } from './is-string';
import { toDateObject } from './to-date-object';
import { toTimeObject } from './to-time-object';

// The zero values for a time (hour, minute, second, FOAS).
const zeroTimeValues: number[] = [0, 0, 0, 0];

// Returns the parameter converted into a date-time object.
// Returns null if the parameter is not valid.
//
// The format is "yyyy-mm-dd hh:ii:ss".
// Leading zeroes are ignored and not required.
//
// The year can be negative.
//
// See "foas-definitions.ts" for information on FOAS.
//
// Examples:
//
//         toDateTimeObject('1999-12-31');
//         // returns { year: 1999, month: 12, day: 31,
//                    hour: 0, minute: 0, second: 0,
//                    foas: 0, foasType: '' }
//
//         toDateTimeObject('1999-12-31 23:59:59');
//         // returns { year: 1999, month: 12, day: 31,
//                    hour: 23, minute: 59, second: 59,
//                    foas: 0, foasType: '' }
//
//         toDateTimeObject('1999-12-31 23:59:59:999');
//         // returns { year: 1999, month: 12, day: 31,
//                    hour: 23, minute: 59, second: 59,
//                    foas: 999, foasType: '' }
//
//         toDateTimeObject('1999-12-31 23:59:59:999', 'ms');
//         // returns { year: 1999, month: 12, day: 31,
//                    hour: 23, minute: 59, second: 59,
//                    foas: 999, foasType: 'ms' }
//
export function toDateTimeObject(
	obj: any,
	foasType: string = '',
	delimiterDate: string = '-',
	delimiterType: string = ' ',
	delimiterTime: string = ':'
): DateTimeObject | null {

	if (!isPopulatedString(obj))
		return null;

	// Allow loose spacing: '   1999-12-31   23:59:59   '
	const arr = obj.trim().split(delimiterType).filter(
		(s: string) => s.length > 0);

	const len = arr.length;
	if (len > 2)
		return null;

	const dateObj = toDateObject(arr[0], delimiterDate);
	if (!dateObj)
		return null;

	let [hour, minute, second, foas] = zeroTimeValues;
	if (isString(arr[1])) {
		const timeObj = toTimeObject(arr[1], foasType, delimiterTime);
		if (!timeObj)
			return null;

		({ hour, minute, second, foas } = timeObj);
	}
	const { year, month, day } = dateObj;
	return { year, month, day, hour, minute, second, foas, foasType };
}
