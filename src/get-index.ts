import { toNonNegativeSafeInt } from './to-non-negative-safe-int';

// Returns the index of the object in the array.
// Returns -1 if the object is not in the array.
//
// Examples:
//         getIndex(3, [0, 1, 2, 3, 4]); // 3
//         getIndex('a', ['a', 'b', 'c']); // 0
//         getIndex(NaN, [2, 3, NaN, 'x']); // 2
//         getIndex(9, [9, 5, 6, 7, 9], 1); // 4
//         getIndex('', []); // -1
export function getIndex(
	obj: any,
	objects: any[],
	startIndex: number = 0
): number {

	startIndex = toNonNegativeSafeInt(startIndex);
	return (Number.isNaN(obj)
		? objects.findIndex((e: any, i: number) =>
			i >= startIndex && Number.isNaN(e))
		: objects.indexOf(obj, startIndex));
}
