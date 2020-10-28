import { isPopulatedArray } from './is-populated-array';

// Returns true if every item is in the array.
//
// Examples:
//         isEveryItemInArray([2, 4], [1, 2, 3, 4, 5]); // true
//         isEveryItemInArray(['abc', NaN], [NaN, 5, 'abc']); // true
//         isEveryItemInArray([3, 7], [3, 4, 5]); // false
//         isEveryItemInArray([], []); // false
export function isEveryItemInArray(items: any[], arr: any[]): boolean {

	if (!isPopulatedArray(items) || !isPopulatedArray(arr))
		return false;

	for (const item of items)
		if (!arr.includes(item))
			return false;

	return true;
}
