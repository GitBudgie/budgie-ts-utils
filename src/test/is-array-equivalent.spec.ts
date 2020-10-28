import { isArrayEquivalent } from '../is-array-equivalent';

describe('isArrayEquivalent', () => {
	test('should return true given [], []', () => {
		expect(isArrayEquivalent([], [])).toBe(true);
	});
	test('should return true given [1, 2, 3], [2, 3, 1]', () => {
		expect(isArrayEquivalent([1, 2, 3], [2, 3, 1])).toBe(true);
	});
	test('should return true given [1, 2, NaN], [2, NaN, 1]', () => {
		expect(isArrayEquivalent([1, 2, NaN], [2, NaN, 1])).toBe(true);
	});
	test('should return true given [7, "abcd"], ["abcd", 7]', () => {
		expect(isArrayEquivalent([7, "abcd"], ["abcd", 7])).toBe(true);
	});
	test('should return false given [1, 2, 3], [1, 2, 3, 3]', () => {
		expect(isArrayEquivalent([1, 2, 3], [1, 2, 3, 3])).toBe(false);
	});
	test('should return false given [1, 2, 3], [1, 2, 3, 4]', () => {
		expect(isArrayEquivalent([1, 2, 3], [1, 2, 3, 4])).toBe(false);
	});
});
