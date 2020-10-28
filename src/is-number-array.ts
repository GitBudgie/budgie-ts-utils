import { isNumber } from './is-number';
import { isPopulatedArray } from './is-populated-array';

// Returns true if the parameter is an array of numbers.
//
// Examples:
//         isNumberArray([-25.7, 1, 2.5, 3.96, 0.08]); // true
//         isNumberArray([-44, NaN, 23, Infinity]); // true
//         isNumberArray([3.254, 724, 'abc']); // false
export function isNumberArray(objects: any): boolean {

	if (!isPopulatedArray(objects))
		return false;

	for (const obj of objects)
		if (!isNumber(obj))
			return false;

	return true;
}
