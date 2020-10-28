import { isPopulatedString } from '../is-populated-string';

describe('isPopulatedString', () => {
	const str = 'Hello';
	test(`should return true given "${str}"`, () => {
		expect(isPopulatedString(str)).toBe(true);
	});
	test('should return false given ""', () => {
		expect(isPopulatedString('')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isPopulatedString(null)).toBe(false);
	});
});
