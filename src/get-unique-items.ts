import { isPopulatedArray } from './is-populated-array';

// Returns the unique items from the array.
//
// Example:
//         getUniqueItems([2, 2, 'a', 'a', NaN, 3.14]);
//                 // [2, 'a', NaN, 3.14]
export function getUniqueItems(items: any[]): any[] {

	const arr: any[] = [];
	if (!isPopulatedArray(items))
		return arr;

	// According to benchmarks, this seems to be a lot faster than
	// "const uniqueItems = Array.from(new Set(items))".
	for (const obj of items)
		if (!arr.includes(obj))
			arr.push(obj);

	return arr;
}
