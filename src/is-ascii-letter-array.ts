import { isAsciiLetter } from './is-ascii-letter';
import { isPopulatedArray } from './is-populated-array';

// Returns true if the parameter is an array of ASCII letters.
//
// Examples:
//         isAsciiLetterArray(['A', 'b', 'R']); // true
//         isAsciiLetterArray(['A', 'b', '3']); // false
//         isAsciiLetterArray([]); // false
export function isAsciiLetterArray(objects: any): boolean {

	if (!isPopulatedArray(objects))
		return false;

	for (const obj of objects)
		if (!isAsciiLetter(obj))
			return false;

	return true;
}
