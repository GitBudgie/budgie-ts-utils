import { isPopulatedArray } from './is-populated-array';

// Returns the common items from the arrays.
//
// Only the unique common items are returned.
//
// Examples:
//         getCommonItems(['a', 'b' ], ['b', 'b', 'c']); // ['b']
//         getCommonItems([1, 2, NaN], [2, NaN, 4]); // [2, NaN]
//         getCommonItems([1, 2, 3], [2, 3, 4]); // [2, 3]
//         getCommonItems([1, 2, 3], [4, 5, 6]); // []
export function getCommonItems(a: any[], b: any[]): any[] {

	if (!isPopulatedArray(a) || !isPopulatedArray(b))
		return [];

	const arr: any = [];
	for (const item of a) {
		if (arr.includes(item))
			continue;

		if (b.includes(item))
			arr.push(item);
	}
	return arr;
}
