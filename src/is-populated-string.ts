// Returns true if the parameter is a string having at least one character.
//
// Examples:
//         isPopulatedString('hello'); // true
//         isPopulatedString(''); // false
//         isPopulatedString(null); // false
export function isPopulatedString(obj: any): boolean {

	return typeof obj === 'string' && obj.length > 0;
}
