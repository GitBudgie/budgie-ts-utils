import { isArray } from './is-array';
import { isDate } from './is-date';
import { isMap } from './is-map';
import { isSet } from './is-set';

// Returns the type of the parameter.
//
// The returned string is one of these:
//
//         array
//         bigint
//         boolean
//         date
//         map
//         null
//         number
//         object
//         set
//         string
//         symbol
//         undefined
//
// Examples:
//         getObjectType(123); // 'number'
//         getObjectType('abc'); // 'string'
export function getObjectType(obj: any): string {

	if (obj === null)
		return 'null';

	if (isArray(obj))
		return 'array';

	if (isDate(obj))
		return 'date';

	if (isMap(obj))
		return 'map';

	if (isSet(obj))
		return 'set';

	return typeof obj;
}
