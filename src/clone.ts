import { isBigInt } from './is-big-int';
import { isBoolean } from './is-boolean';
import { isDate } from './is-date';
import { isMap } from './is-map';
import { isNumber } from './is-number';
import { isObject } from './is-object';
import { isSet } from './is-set';
import { isString } from './is-string';

// Returns a (deep) clone of the object.
// Returns null for null or if the given object can not be cloned.
//
// Clones these types:
//
//         array
//         BigInt
//         boolean
//         Date
//         Map
//         number
//         object
//         Set
//         string
//
// Intended only for simple objects. Functions will be lost.
//
// Examples:
//         clone([1, 2, 3]); // [1, 2, 3]
//         clone('abc'); // 'abc'
export function clone(obj: any): any {

	if (isBigInt(obj) || isBoolean(obj) || isNumber(obj))
		return obj;

	if (isDate(obj))
		return new Date(obj.getTime());

	if (isMap(obj))
		return new Map(obj);

	// An array is an object in JavaScript.
	if (isObject(obj)) {
		try {
			return JSON.parse(JSON.stringify(obj));
		} catch (e) {
			console.error('clone', e);
		}
	}

	if (isSet(obj))
		return new Set(obj);

	if (isString(obj))
		return String(obj);

	return null;
}
