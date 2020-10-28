const trueStrings: string[] = ['t', 'T', 'true', 'TRUE'];

// Returns the parameter converted into a boolean.
// Returns a boolean as it is.
// Returns a number greater or less than 0 as true. NaN returns false.
// Returns strings "t", "T", "true" and "TRUE" as true.
// Returns everything else as false.
//
// Examples:
//         toBoolean(123); // true
//         toBoolean('t'); // true
//         toBoolean(true); // true
//         toBoolean(Infinity); // true
//         toBoolean(false); // false
//         toBoolean(NaN); // false
//         toBoolean(0); // false
export function toBoolean(obj: any): boolean {

	const typ = typeof obj;
	if (typ === 'boolean')
		return obj;

	if (typ === 'number')
		return isNaN(obj) ? false : obj !== 0;

	if (typ === 'string')
		return trueStrings.indexOf(obj) > -1;

	return false;
}
