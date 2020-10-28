// Returns true if the parameter is undefined.
//
// Examples:
//         isUndefined(undefined); // true
//         isUndefined('abc'); // false
//         isUndefined(null); // false
//         isUndefined(0); // false
export function isUndefined(obj: any): boolean {

	// "One reason to use typeof is that it does not throw an error
	// if the variable has not been declared." - MDN
	//
	// The above situation is not a problem with a function parameter.
	// A dedicated function saves some space and typing.
	//
	// Comparison:
	//
	//         if (isUndefined(obj))
	//         if (obj === undefined)
	//         if (typeof obj === 'undefined')
	//
	return typeof obj === 'undefined';
}
