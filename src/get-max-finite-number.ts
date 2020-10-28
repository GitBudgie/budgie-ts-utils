import { isFiniteNumber } from './is-finite-number';
import { isPopulatedArray } from './is-populated-array';

// Returns the greatest finite number in the array.
// Returns 0 if there are no suitable numbers.
// Returns the optional minimum value if there are no suitable numbers
// or the greatest number is smaller.
//
// Examples:
//         getMaxFiniteNumber(objects); // the greatest number or 0
//         getMaxFiniteNumber(objects, 1); // 1 or greater
export function getMaxFiniteNumber(objects: any[], min?: number): number {

	if (!isPopulatedArray(objects))
		return isFiniteNumber(min) ? min! : 0;

	let max = 0;
	let first = true;
	for (const obj of objects) {
		if (!isFiniteNumber(obj))
			continue;

		if (first) {
			max = obj;
			first = false;
		} else if (obj > max) {
			max = obj;
		}
	}
	if (!isFiniteNumber(min))
		return max;

	if (first || (!first && max < min!))
		max = min!;

	return max;
}
