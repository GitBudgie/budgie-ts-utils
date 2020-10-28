import { isFiniteNumber } from './is-finite-number';
import { isPopulatedArray } from './is-populated-array';
import { isSafeInt } from './is-safe-int';

// Returns the index of the first finite number in the array.
// Returns -1 if the parameter is not a populated array.
// Returns -1 if the array does not contain finite numbers
// (starting from the given index).
// Returns -1 if the parameter "startIndex" is invalid.
//
// Examples:
//         getIndexOfFiniteNumber([0, 1, 2]); // 0
//         getIndexOfFiniteNumber([NaN, 1.5, 123]); // 1
//         getIndexOfFiniteNumber([NaN, NaN, 456]); // 2
//         getIndexOfFiniteNumber([0, NaN, NaN, 123], 1); // 3
//         getIndexOfFiniteNumber([NaN, NaN, NaN]); // -1
//         getIndexOfFiniteNumber([]); // -1
export function getIndexOfFiniteNumber(
	objects: any[],
	startIndex: number = 0
): number {

	if (!isPopulatedArray(objects) || !isSafeInt(startIndex)
		|| startIndex < 0)
		return -1;

	for (let i = startIndex, len = objects.length; i < len; i++)
		if (isFiniteNumber(objects[i]))
			return i;

	return -1;
}
