// Returns true if the parameter is a safe integer.
//
// A safe integer is between -9007199254740991 and 9007199254740991.
//
// See "Number.isInteger()" and "Number.isSafeInteger()" from MDN docs.
//
// Note: A numeric value 5.0000000000000001 will return true,
// a value 5.000000000000001 will return false.
//
// Examples:
//         isSafeInt(0); // true
//         isSafeInt(6433); // true
//         isSafeInt(-143245); // true
//         isSafeInt(9007199254740991); // true
//         isSafeInt(9007199254740992); // false
//         isSafeInt('123'); // false
export function isSafeInt(obj: any): boolean {

	return typeof obj === 'number' && Number.isSafeInteger(obj);
}
