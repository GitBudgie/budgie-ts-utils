import { getUniqueItems } from '../get-unique-items';

describe('getUniqueItems', () => {
	test('should return [2, "a", NaN, 3.14]' +
		' given [2, 2, "a", "a", NaN, 3.14]',
		() => {
			expect(getUniqueItems(
				[2, 2, "a", "a", NaN, 3.14]))
					.toEqual([2, "a", NaN, 3.14]);
		});
	test('should return [] given []', () => {
		expect(getUniqueItems([])).toEqual([]);
	});
});
