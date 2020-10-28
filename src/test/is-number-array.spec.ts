import { isNumberArray } from '../is-number-array';

describe('isNumberArray', () => {
	test('should return true given [-1.5, 0, 1, 2, NaN, Infinity]',
		() => {
			expect(isNumberArray([-1.5, 0, 1, 2, NaN, Infinity]))
				.toBe(true);
	});
	test('should return true given [Infinity, NaN]', () => {
		expect(isNumberArray([Infinity, NaN])).toBe(true);
	});
	test('should return false given [1, "foo", Symbol()]', () => {
		expect(isNumberArray([1, 'foo', Symbol()])).toBe(false);
	});
	test('should return false given []', () => {
		expect(isNumberArray([])).toBe(false);
	});
	test('should return false given {}', () => {
		expect(isNumberArray({})).toBe(false);
	});
	test('should return false given null]', () => {
		expect(isNumberArray(null)).toBe(false);
	});
});
