// Returns true if the parameter is a string.
//
// Examples:
//         isString('hello'); // true
//         isString(''); // true
//         isString(5); // false
//         isString(null); // false
export function isString(obj: any): boolean {

	return typeof obj === 'string';
}
