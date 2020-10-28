// Returns true if the arrays contain the same items in any order.
//
// The number of items must also match.
//
// Examples:
//         isArrayEquivalent([], []); // true
//         isArrayEquivalent([1, 2, 3], [2, 3, 1]); // true
//         isArrayEquivalent([1, 2, NaN], [2, NaN, 1]); // true
//         isArrayEquivalent([7, 'abcd'], ['abcd', 7]); // true
//         isArrayEquivalent([1, 2, 3], [1, 2, 3, 3]); // false
//         isArrayEquivalent([1, 2, 3], [1, 2, 3, 4]); // false
export function isArrayEquivalent(a: any[], b: any[]): boolean {

	if (!Array.isArray(a) || !Array.isArray(b))
		return false;

	if (a.length !== b.length)
		return false;

	for (const item of a)
		if (!b.includes(item))
			return false;

	return true;
}
