// Returns true if the parameter is an object that can have properties.
// Returns true for an array and a set (at least).
// Returns false for null; a null is an object but can not have properties.
//
// "In JavaScript, everything is an object, even when it's something else."
//
// Examples:
//         isObject({}); // true
//         isObject([]); // true
//         isObject(new Set()); // true
//         isObject(new Date()); // true
//         isObject(123); // false
//         isObject('test'); // false
//         isObject(null); // false
export function isObject(obj: any): boolean {

	// Just checking the "typeof" of an object is not enough.
	// The type of null is "object", but an attempt to access
	// a property will cause a type error ("obj is null").
	return typeof obj === 'object' && Object(obj) === obj;
}
