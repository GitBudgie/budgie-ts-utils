import { arrayToDecoratedString } from './array-to-decorated-string';
import { isArray } from './is-array';
import { isDate } from './is-date';

// Returns the parameter converted into a string.
//
// Warning! Not thoroughly tested!
//
// Examples:
//         objectToString(123); // '123'
//         objectToString(null); // 'null'
export function objectToString(obj: any): string {

	if (isArray(obj))
		return arrayToDecoratedString(obj);

	if (isDate(obj))
		return obj.toISOString();

	const str = String(obj);
	return str.length > 0 ? str : 'unknown';
}
