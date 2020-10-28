// Returns true if the parameter is a string
// that is empty or contains only whitespace.
//
// Examples:
//         isEmptyOrWhitespaceString(''); // true
//         isEmptyOrWhitespaceString(' '); // true
//         isEmptyOrWhitespaceString(' \n '); // true
//         isEmptyOrWhitespaceString(' abc '); // false
export function isEmptyOrWhitespaceString(obj: any): boolean {

	return typeof obj === 'string' && /^\s*$/.test(obj);
}
