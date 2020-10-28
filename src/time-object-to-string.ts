import { defaultTimeString } from './default-time-string';
import { isObject } from './is-object';
import { timeNumbersToString } from './time-numbers-to-string';
import { toStr } from './to-str';

// Returns the time object converted into a string.
// Returns the default value if the parameter is not valid.
//
// Does not require an exact TimeObject but accepts any likeness.
//
// Does not validate the sanity of the time.
//
// Examples:
//
//         timeObjectToString({ hour: 23, minute: 59, second: 59 });
//                 // '23-59-59'
//
//         timeObjectToString({ hour: 23, minute: 59, second: 59,
//                 foas: 999, foasType: 'ms' });
//                         // '23:59:59:999'
//
//         timeObjectToString({ hour: -1, minute: -1, second: -1 });
//                 // '01-01-01'
//
//         timeObjectToString({ hour: 1 });
//                 // '00-01-00'
//
//         timeObjectToString(null, 'err');
//                 // 'err'
//
export function timeObjectToString(
	timeObj: any,
	defaultValue: string = defaultTimeString,
	delimiter: string = ':'
): string {

	if (!isObject(timeObj))
		return defaultValue;

	// The "toStr()" is used instead of "String()"
	// to avoid undefined becoming "undefined".
	return (timeNumbersToString(
		Number(timeObj.hour),
		Number(timeObj.minute),
		Number(timeObj.second),
		Number(timeObj.foas),
		toStr(timeObj.foasType),
		delimiter));
}
