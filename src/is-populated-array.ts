// Returns true if the parameter is an array having at least one item.
//
// Examples:
//         isPopulatedArray([1, 2, 3]); // true
//         isPopulatedArray([]); // false
//         isPopulatedArray(null); // false
export function isPopulatedArray(obj: any): boolean {

	return Array.isArray(obj) && obj.length > 0;
}
