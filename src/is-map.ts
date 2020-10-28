// Returns true if the parameter is a Map.
//
// Examples:
//         isMap(new Map()); // true
//         isMap('abc'); // false
//         isMap(null); // false
export function isMap(obj: any): boolean {

	return Object.prototype.toString.call(obj) === '[object Map]';
}
