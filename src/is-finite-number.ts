// Returns true if the parameter is a finite number.
//
// Examples:
//         isFiniteNumber(43798534); // true
//         isFiniteNumber(-534635.42366); // true
//         isFiniteNumber('123'); // false;
//         isFiniteNumber(null); // false;
export function isFiniteNumber(obj: any): boolean {

	return typeof obj === 'number' && isFinite(obj);
}
