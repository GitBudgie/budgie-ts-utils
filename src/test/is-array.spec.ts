import { isArray } from '../is-array';

describe('isArray', () => {
	test('should return true given []', () => {
		expect(isArray([])).toBe(true);
	});
	test('should return true given [1, 2, 3]', () => {
		expect(isArray([1, 2, 3])).toBe(true);
	});
	test('should return false given "abc"', () => {
		expect(isArray('abc')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isArray(null)).toBe(false);
	});
});
