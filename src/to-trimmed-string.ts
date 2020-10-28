import { toStr } from './to-str';

// Returns the parameter converted into a string trimmed from whitespace.
//
// Converts only bigints, numbers and strings.
// The other types return an empty string.
//
// Examples:
//         toTrimmedString(' hello '); // 'hello'
//         toTrimmedString(6.3); // '6.3'
//         toTrimmedString(null); // ''
//         toTrimmedString(NaN); // ''
export function toTrimmedString(obj: any): string {

	return toStr(obj).trim();
}
