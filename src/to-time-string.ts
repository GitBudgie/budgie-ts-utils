import { defaultTimeString } from './default-time-string';
import { timeObjectToString } from './time-object-to-string';
import { toTimeObject } from './to-time-object';

// Returns the parameter converted into a time string.
// Returns the default value if the parameter is not valid.
//
// An empty string is a valid time; it means zero.
//
// Examples:
//         toTimeString(''); // '00:00:00'
//         toTimeString('0'); // '00:00:00'
//         toTimeString('0:'); // '00:00:00'
//         toTimeString('1:2:3'); // '01:02:03'
//         toTimeString('23:59:59'); // '23:59:59'
//         toTimeString('23:59:59', 'ms'); // '23:59:59:000'
//         toTimeString('23:59:59:999999', 'us'); // '23:59:59:999999'
//         toTimeString('23:59:59:999', '', 'err'); // 'err'
//         toTimeString('abc', '', 'err'); // 'err'
export function toTimeString(
	obj: any,
	foasType: string = '',
	defaultValue: string = defaultTimeString,
	delimiter: string = ':'
): string {

	const timeObj = toTimeObject(obj, foasType, delimiter);
	return timeObjectToString(timeObj, defaultValue, delimiter);
}
