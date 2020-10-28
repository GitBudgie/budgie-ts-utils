// Returns the parameter converted into a string.
//
// Converts only bigints, numbers and strings.
// The other types return an empty string.
//
// This ensures that the value is at least an empty string
// without "undefined", "null", "NaN" or "Symbol()" content
// that comes with "String(obj)".
//
// Why "toStr" instead of "toString"?
// "- You should avoid using reserved words and other built-in names."
//
// Examples:
//         toStr('hello'); // 'hello'
//         toStr(6.3); // '6.3'
//         toStr(null); // ''
//         toStr(NaN); // ''
export function toStr(obj: any): string {

	const typ = typeof obj;
	if (typ === 'string')
		return obj;

	if ((typ === 'number' && isFinite(obj)) || typ === 'bigint')
		return obj.toString();

	return '';
}
