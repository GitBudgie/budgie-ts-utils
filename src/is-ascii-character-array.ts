import { isAsciiCharacter } from './is-ascii-character';
import { isPopulatedArray } from './is-populated-array';

// Returns true if the parameter is an array of ASCII characters.
//
// Examples:
//         isAsciiCharacterArray(['A', 'B', 'C']); // true
//         isAsciiCharacterArray(['A', 'B', '3']); // true
//         isAsciiCharacterArray(['A', '😀', '😎']); // false
//         isAsciiCharacterArray([]); // false
export function isAsciiCharacterArray(objects: any): boolean {

	if (!isPopulatedArray(objects))
		return false;

	for (const obj of objects)
		if (!isAsciiCharacter(obj))
			return false;

	return true;
}
