import { isPopulatedArray } from './is-populated-array';
import { toNonNegativeSafeInt } from './to-non-negative-safe-int';

// Returns the clamped index for the array.
// Returns -1 if the array is empty.
//
// Examples:
//         clampIndex(-7, ['a', 'b', 'c']); // 0
//         clampIndex(9, ['a', 'b', 'c']); // 2
//         clampIndex(5, []); // -1
export function clampIndex(index: number, objects: any[]): number {

	if (!isPopulatedArray(objects))
		return -1;

	index = toNonNegativeSafeInt(index);
	const lastIndex = objects.length - 1;
	return index > lastIndex ? lastIndex : index;
}
