import { sortNumbers } from '../sort-numbers';

describe('sortNumbers', () => {
	test('should return [] given []', () => {
		expect(sortNumbers([])).toEqual([]);
	});
	test('should return [-7, 3, 8, 9] given [8, 3, -7, 9]', () => {
		expect(sortNumbers([8, 3, -7, 9]))
			.toEqual([-7, 3, 8, 9]);
	});
	test('should return [-8, -2, 4, 5] given [4, -8, 5, -2]', () => {
		expect(sortNumbers([4, -8, 5, -2]))
			.toEqual([-8, -2, 4, 5]);
	});
});
