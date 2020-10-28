import { isSafeInt } from './is-safe-int';

// Returns the safe integers from the array.
//
// Examples:
//         getSafeInts([NaN, 2, Infinity, 5.6, 3, 'foo', -7]); // [2, 3, -7]
//         getSafeInts([NaN, Infinity, 'foo', -3.14]); // []
export function getSafeInts(objects: any[]): number[] {

	const arr: number[] = [];
	for (const obj of objects)
		if (isSafeInt(obj))
			arr.push(obj);

	return arr;
}
