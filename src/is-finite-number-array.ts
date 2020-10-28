import { isFiniteNumber } from './is-finite-number';
import { isPopulatedArray } from './is-populated-array';

// Returns true if the parameter is an array of finite numbers.
//
// Examples:
//         isFiniteNumberArray([-25.7, 1, 2.5, 3.96]); // true
//         isFiniteNumberArray([3.2, 724, NaN, Infinity, 'abc']); // false
//         isFiniteNumberArray([]); // false
export function isFiniteNumberArray(objects: any): boolean {

	if (!isPopulatedArray(objects))
		return false;

	for (const obj of objects)
		if (!isFiniteNumber(obj))
			return false;

	return true;
}
