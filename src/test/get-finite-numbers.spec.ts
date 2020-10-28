import { getFiniteNumbers } from '../get-finite-numbers';

describe('getFiniteNumbers', () => {
	test('should return [1, -2, 3.14]' +
		' given [NaN, 1, Infinity, -2, 3.14, "a"]',
		() => {
			expect(getFiniteNumbers(
				[NaN, 1, Infinity, -2, 3.14, 'a']))
					.toEqual([1, -2, 3.14]);
		});
	test('should return [] given [Infinity, NaN, null]', () => {
		expect(getFiniteNumbers([Infinity, NaN, null])).toEqual([]);
	});
	test('should return [] given []', () => {
		expect(getFiniteNumbers([])).toEqual([]);
	});
});
