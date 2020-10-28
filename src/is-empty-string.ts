// Returns true if the parameter is an empty string.
//
// Examples:
//         isEmptyString(''); // true
//         isEmptyString(' '); // false
//         isEmptyString(null); // false
export function isEmptyString(obj: any): boolean {

	return typeof obj === 'string' && obj.length < 1;
}
