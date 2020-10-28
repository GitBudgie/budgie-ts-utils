import { asciiLetters } from '../ascii-letters';
import { isArrayOf52UniqueAsciiCharacters } from './test-utils';

describe('asciiLetters', () => {
	test('should return true given asciiLetters', () => {
		expect(isArrayOf52UniqueAsciiCharacters(asciiLetters))
			.toBe(true);
	});
});
