// Returns the length of the parameter in characters (Unicode codepoints).
//
// Currently supports only strings.
//
// JavaScript uses UTF-16 Unicode encoding internally.
// One character takes two bytes, thus the range is U+0000 - U+FFFF.
// But the modern 32-bit Unicode consists of more characters than that.
//
// A so called surrogate pair is needed to express an Unicode character
// from "astral plane" (emojis etc.) that is the range U+10000 - U+10FFFF.
//
// A surrogate pair (UTF-16 + UTF-16) is considered as one character
// even though its string length is two.
//
// Examples:
//         getCharLength(''); // 0
//         getCharLength('a'); // 1
//         getCharLength('hello'); // 5
//         getCharLength('😀'); // 1 (string length is 2)
//         getCharLength('😀😎'); // 2 (string length is 4)
//         getCharLength('😀+😎'); // 3 (string length is 5)
export function getCharLength(obj: any): number {

	return typeof obj === 'string' ? Array.from(obj).length : 0;
}
