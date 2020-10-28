// Returns true if the parameter is a Symbol.
//
// Examples:
//         isSymbol(Symbol()); // true
//         isSymbol('abc'); // false
//         isSymbol(null); // false
//         isSymbol(0); // false
export function isSymbol(obj: any): boolean {

	return typeof obj === 'symbol';
}
