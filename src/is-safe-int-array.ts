import { isPopulatedArray } from './is-populated-array';
import { isSafeInt } from './is-safe-int';

// Returns true if the parameter is an array of safe integers.
//
// Examples:
//         isSafeIntArray([54, -456, 0, 9007199254740991]); // true
//         isSafeIntArray([123, 9007199254740992]); // false
//         isSafeIntArray([34, 56, 5.5]); // false
//         isSafeIntArray([]); // false
export function isSafeIntArray(objects: any): boolean {

	if (!isPopulatedArray(objects))
		return false;

	for (const obj of objects)
		if (!isSafeInt(obj))
			return false;

	return true;
}
