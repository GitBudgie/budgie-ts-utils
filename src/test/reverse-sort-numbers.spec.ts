import { reverseSortNumbers } from '../reverse-sort-numbers';

describe('reverseSortNumbers', () => {
	test('should return [] given []', () => {
		expect(reverseSortNumbers([])).toEqual([]);
	});
	test('should return [9, 8, 3, -7] given [8, 3, -7, 9]', () => {
		expect(reverseSortNumbers([8, 3, -7, 9]))
			.toEqual([9, 8, 3, -7]);
	});
	test('should return [5, 4, -2, -8] given [4, -8, 5, -2]', () => {
		expect(reverseSortNumbers([4, -8, 5, -2]))
			.toEqual([5, 4, -2, -8]);
	});
});
