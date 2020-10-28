// Returns true if the parameter is an array.
//
// Examples:
//         isArray([]); // true
//         isArray([1, 2, 3]); // true
//         isArray('abc'); // false
//         isArray(null); // false
export function isArray(obj: any): boolean {

	return Array.isArray(obj);
}
