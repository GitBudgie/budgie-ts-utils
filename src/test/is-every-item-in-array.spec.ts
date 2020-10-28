import { isEveryItemInArray } from '../is-every-item-in-array';

describe('isEveryItemInArray', () => {
	test('should return true given [2, 4], [1, 2, 3, 4, 5]', () => {
		expect(isEveryItemInArray([2, 4], [1, 2, 3, 4, 5])).toBe(true);
	});
	test('should return true given ["abc", NaN], [NaN, 5, "abc"]', () => {
		expect(isEveryItemInArray(['abc', NaN], [NaN, 5, 'abc']))
			.toBe(true);
	});
	test('should return false given [3, 7], [3, 4, 5]', () => {
		expect(isEveryItemInArray([3, 7], [3, 4, 5])).toBe(false);
	});
	test('should return false given [], []', () => {
		expect(isEveryItemInArray([], [])).toBe(false);
	});
});
