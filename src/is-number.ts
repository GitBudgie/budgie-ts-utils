// Returns true if the parameter is a number.
//
// Examples:
//         isNumber(0); // true
//         isNumber(Infinity); // true
//         isNumber(NaN); // true
//         isNumber('0'); // false
//         isNumber(null); // false
export function isNumber(obj: any): boolean {

	return typeof obj === 'number';
}
