import { getNumberOfOccurrences } from '../get-number-of-occurrences';
import { isAsciiCharacterArray } from '../is-ascii-character-array';

// Test utilities.

// To run a single test suite: npm test to-clamped-safe-int

// Returns true if the parameter is an array of 52 unique ASCII characters
// (A-Z and a-z).
export function isArrayOf52UniqueAsciiCharacters(objects: any): boolean {

	if (!isAsciiCharacterArray(objects) || objects.length !== 52)
		return false;

	for (const chr of objects) {
		const n = getNumberOfOccurrences(chr, objects);
		if (n !== 1)
			return false;
	}
	return true;
}
