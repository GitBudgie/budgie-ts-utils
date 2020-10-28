// Returns true if the parameter is a number but not NaN.
//
// Examples:
//         isNonNaNNumber(7); // true
//         isNonNaNNumber(-3.14); // true
//         isNonNaNNumber(Infinity); // true
//         isNonNaNNumber(NaN); // false
//         isNonNaNNumber('abc'); // false
//         isNonNaNNumber(null); // false
export function isNonNaNNumber(obj: any): boolean {

	return typeof obj === 'number' && !isNaN(obj);
}
