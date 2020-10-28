// Returns true if the parameter is a BigInt.
//
// Examples:
//         isBigInt(0n); // true
//         isBigInt(BigInt(1)); // true
//         isBigInt('abc'); // false
//         isBigInt(null); // false
//         isBigInt(''); // false
//         isBigInt(5); // false
export function isBigInt(obj: any): boolean {

	return typeof obj === 'bigint';
}
