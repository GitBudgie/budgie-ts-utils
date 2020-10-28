import { dateTimeObjectToString } from './date-time-object-to-string';
import { defaultDateTimeString } from './default-date-time-string';
import { toDateTimeObject } from './to-date-time-object';

// Returns the parameter converted into a date-time string.
// Returns the default value if the parameter is not valid.
//
// The optional time fields are considered to be zero by default.
//
// See "foas-definitions.ts" for information on FOAS.
//
// Examples:
//         toDateTimeString('0-1-1'); // '0000-01-01 00:00:00'
//         toDateTimeString('0-1-1 0:0:0'); // '0000-01-01 00:00:00'
//         toDateTimeString(' 0-1-1 0:0:0 '); // '0000-01-01 00:00:00'
//         toDateTimeString('0-1-1 0:0:0', 'ms'); // '0000-01-01 00:00:00:000'
//         toDateTimeString('1999-12-31'); // '1999-12-31 00:00:00'
//         toDateTimeString('abc', '', 'err'); // 'err'
export function toDateTimeString(
	obj: any,
	foasType: string = '',
	defaultValue: string = defaultDateTimeString,
	delimiterDate: string = '-',
	delimiterType: string = ' ',
	delimiterTime: string = ':'
): string {

	const dateTimeObj = toDateTimeObject(obj, foasType, delimiterDate,
		delimiterType, delimiterTime);

	return (dateTimeObjectToString(dateTimeObj, defaultValue,
		delimiterDate, delimiterType, delimiterTime));
}
