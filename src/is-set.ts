// Returns true if the parameter is a Set.
//
// Examples:
//         isSet(new Set()); // true
//         isSet('abc'); // false
//         isSet(null); // false
export function isSet(obj: any): boolean {

	return Object.prototype.toString.call(obj) === '[object Set]';
}
