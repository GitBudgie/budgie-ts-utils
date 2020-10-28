import { getIndex } from './get-index';

// Returns the number of occurrences of the object in the array.
//
// Examples:
//         getNumberOfOccurrences(5, [1, 3, 5, 6, 7, 5, 9, 5]); // 3
//         getNumberOfOccurrences('a', ['a', 'b', 'b', 'a']); // 2
//         getNumberOfOccurrences(NaN, [2, 'b', NaN, 'x']); // 1
//         getNumberOfOccurrences('x', ['a', 'b', 'c']); // 0
//         getNumberOfOccurrences('', []); // 0
export function getNumberOfOccurrences(obj: any, objects: any[]): number {

	let num = 0;
	let index = getIndex(obj, objects);
	while (index > -1) {
		num++;
		index = getIndex(obj, objects, index + 1);
	}
	return num;
}
