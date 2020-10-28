// Returns the parameter "val" if the parameter "obj" is null or undefined.
//
// Examples:
//         nullTo(null, null); // null
//         nullTo(null, 1); // 1
//         nullTo(null, 'abc'); // 'abc'
//         nullTo(2, 1); // 2
//         nullTo('abc, 'def'); // 'abc'
export function nullTo(obj: any, val: any): any {

	// Also, just "obj == null" should catch both values simultaneously.
	return obj === null || obj === undefined ? val : obj;
}
