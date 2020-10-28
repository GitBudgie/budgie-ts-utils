// Returns true if the parameter is strictly a boolean.
//
// Examples:
//         isBoolean(true); // true
//         isBoolean(false); // true
//         isBoolean('true'); // false
//         isBoolean('false'); // false
//         isBoolean(0); // false
//         isBoolean(1); // false
//         isBoolean(null); // false
export function isBoolean(obj: any): boolean {

	return typeof obj === 'boolean';
}
