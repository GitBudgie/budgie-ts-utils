import { isPopulatedArray } from './is-populated-array';
import { trim } from './trim';

// Returns the strings trimmed from whitespace.
//
// The optional strings are the ones to remove instead of whitespace.
//
// Examples:
//         trimStrings(['hi ', ' there  ']); // ['hi', 'there']
//         trimStrings(['xfoox', 'xbarx'], ['x']); // ['foo', 'bar']
export function trimStrings(
	strings: string[],
	optStrings: string[] = []
): string[] {

	const arr: string[] = [];
	if (isPopulatedArray(optStrings)) {
		for (const str of strings)
			arr.push(trim(str, optStrings));
	} else {
		for (const str of strings)
			arr.push(str.trim());
	}
	return arr;
}
