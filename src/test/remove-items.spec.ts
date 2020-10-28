import { removeItems } from '../remove-items';

describe('removeItems', () => {
	test('should return ["a", "b"] given ["c"], ["a", "b", "c", "c"]]',
		() => {
			expect(removeItems(['c'], ['a', 'b', 'c', 'c']))
				.toEqual(['a', 'b']);
		});
	test('should return [2, 3] given [1, 4], [1, 2, 3, 4]]', () => {
		expect(removeItems([1, 4], [1, 2, 3, 4])).toEqual([2, 3]);
	});
	test('should return [-1, 1] given [NaN], [-1, NaN, 1]]', () => {
		expect(removeItems([NaN], [-1, NaN, 1])).toEqual([-1, 1]);
	});
	test('should return [] given [], []]', () => {
		expect(removeItems([], [])).toEqual([]);
	});
});
