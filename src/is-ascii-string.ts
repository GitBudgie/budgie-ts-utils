import { isAsciiCharacter } from './is-ascii-character';
import { isPopulatedString } from './is-populated-string';

// Returns true if the parameter is a string
// that contains only ASCII characters (0 - 127).
//
// Examples:
//         isAsciiString('Hello'); // true
//         isAsciiString('Hi! 😀'); // false
//         isAsciiString(''); // false
export function isAsciiString(obj: any): boolean {

	if (!isPopulatedString(obj))
		return false;

	for (const chr of obj)
		if (!isAsciiCharacter(chr))
			return false;

	return true;
}
