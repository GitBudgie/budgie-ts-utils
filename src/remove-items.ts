import { isPopulatedArray } from './is-populated-array';

// Returns the "from items" with the items removed.
//
// Examples:
//         removeItems(['c'], ['a', 'b', 'c', 'c']); // ['a', 'b']
//         removeItems([1, 4], [1, 2, 3, 4]); // [2, 3]
//         removeItems([NaN], [-1, NaN, 1]); // [-1, 1]
//         removeItems([], []); // []
export function removeItems(
	items: any[],
	fromItems: any[]
): any[] {

	if (!isPopulatedArray(items) || !isPopulatedArray(fromItems))
		return [];

	const arr: any = [];
	for (const item of fromItems)
		if (!items.includes(item))
			arr.push(item);

	return arr;
}
