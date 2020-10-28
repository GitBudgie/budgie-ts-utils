import { getCommonItems } from '../get-common-items';

describe('getCommonItems', () => {
	test('should return ["b"] given ["a", "b"], ["b", "b", "c"]', () => {
		expect(getCommonItems(['a', 'b'], ['b', 'b', 'c']))
			.toEqual(['b']);
	});
	test('should return [2, NaN] given [1, 2, NaN], [2, NaN, 4]', () => {
		expect(getCommonItems([1, 2, NaN], [2, NaN, 4]))
			.toEqual([2, NaN]);
	});
	test('should return [2, 3] given [1, 2, 3], [2, 3, 4]', () => {
		expect(getCommonItems([1, 2, 3], [2, 3, 4]))
			.toEqual([2, 3]);
	});
	test('should return [] given [1, 2, 3], [4, 5, 6]', () => {
		expect(getCommonItems([1, 2, 3], [4, 5, 6]))
			.toEqual([]);
	});
});
