const parsableTypes: string[] = ['bigint', 'number', 'string'];

// Returns true if the parameter is a parsable object.
//
// A parsable object is bigint, number or string.
//
// Examples:
//         isParsableObject(BigInt(0)); // true
//         isParsableObject(0); // true
//         isParsableObject(''); // true
//         isParsableObject(null); // false
export function isParsableObject(obj: any): boolean {

	return parsableTypes.indexOf(typeof obj) > -1;
}
