import { TimeObject } from './classes/time-object';
import { isAsciiDigitStringArray } from './is-ascii-digit-string-array';
import { isString } from './is-string';
import { isTimeByNumbers } from './is-time-by-numbers';

// Returns the parameter converted into a TimeObject.
// Returns null if the parameter is not valid.
//
// The format is "hh:ii:ss". Leading zeroes are ignored and not required.
//
// An empty string is a valid time; it means zero.
//
// See "foas-definitions.ts" for information on FOAS.
//
// Examples:
//
//         toTimeObject('23:59:59');
//         // returns { hour: 23, minute: 59, second: 59,
//                    foas: 0, foasType: '' }
//
//         toTimeObject('23:59:59:999');
//         // returns { hour: 23, minute: 59, second: 59,
//                    foas: 999, foasType: '' }
//
//         toTimeObject('23:59:59:999', 'ms');
//         // returns { hour: 23, minute: 59, second: 59,
//                    foas: 999, foasType: 'ms' }
//
export function toTimeObject(
	obj: any,
	foasType: string = '',
	delimiter: string = ':'
): TimeObject | null {

	if (!isString(obj))
		return null;

	if (obj.length < 1)
		return { hour: 0, minute: 0, second: 0, foas: 0, foasType };

	// Allow sparing notation: '23:' -> '23:0'. Just ':' is not valid.
	const arr = obj.trim().split(delimiter).map(
		(s: string, i: number) => s.length < 1 && i > 0 ? '0' : s);

	const len = arr.length;
	if (len > 4 || !isAsciiDigitStringArray(arr))
		return null;

	const hour = Number(arr[0]);
	const minute = len > 1 ? Number(arr[1]): 0;
	const second = len > 2 ? Number(arr[2]): 0;
	const foas = len > 3 ? Number(arr[3]) : 0;
	if (!isTimeByNumbers(hour, minute, second, foas, foasType))
		return null;

	return { hour, minute, second, foas, foasType };
}
