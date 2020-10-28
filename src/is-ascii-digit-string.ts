import { isAsciiDigit } from './is-ascii-digit';
import { isPopulatedString } from './is-populated-string';

// Returns true if the parameter is a string
// that contains only ASCII digits (0 - 9).
//
// Examples:
//         isAsciiDigitString('0123456789'); // true
//         isAsciiDigitString('123 456'); // false
//         isAsciiDigitString('hello'); // false
//         isAsciiDigitString(''); // false
export function isAsciiDigitString(obj: any): boolean {

	if (!isPopulatedString(obj))
		return false;

	for (const chr of obj)
		if (!isAsciiDigit(chr))
			return false;

	return true;
}
