import { arrayToDecoratedString } from '../array-to-decorated-string';

describe('arrayToDecoratedString', () => {
	test('should return "[]" given []', () => {
		expect(arrayToDecoratedString([])).toBe('[]');
	});
	test('should return "[1, 2, 3]" given [1, 2, 3]', () => {
		expect(arrayToDecoratedString([1, 2, 3])).toBe('[1, 2, 3]');
	});
	test('should return "["A", 2, 3]" given ["A", 2, 3]', () => {
		expect(arrayToDecoratedString(['A', 2, 3]))
			.toBe('["A", 2, 3]');
	});
});
