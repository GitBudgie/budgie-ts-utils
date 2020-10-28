import { isAsciiDigitString } from './is-ascii-digit-string';
import { isPopulatedArray } from './is-populated-array';

// Returns true if the parameter is an array of ASCII digit strings.
//
// Examples:
//         isAsciiDigitStringArray(['12', '34', '567']); // true
//         isAsciiDigitStringArray(['12', '34', 567]); // false
//         isAsciiDigitStringArray([]); // false
export function isAsciiDigitStringArray(objects: any): boolean {

	if (!isPopulatedArray(objects))
		return false;

	for (const obj of objects)
		if (!isAsciiDigitString(obj))
			return false;

	return true;
}
