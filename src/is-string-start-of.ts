// Returns true if the string A is equal to B to the length of A.
//
// Examples:
//         isStringStartOf('', ''); // true
//         isStringStartOf('', 'abcdef'); // true
//         isStringStartOf('abc', 'abcdef'); // true
//         isStringStartOf('abc', 'Abcdef'); // false
//         isStringStartOf('hello', 'abcdef'); // false
export function isStringStartOf(a: string, b: string): boolean {

	return a === b.substring(0, a.length);
}
