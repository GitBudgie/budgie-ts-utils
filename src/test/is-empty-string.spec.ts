import { isEmptyString } from '../is-empty-string';

describe('isEmptyString', () => {
	test('should return true given ""', () => {
		expect(isEmptyString('')).toBe(true);
	});
	test('should return false given " "', () => {
		expect(isEmptyString(' ')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isEmptyString(null)).toBe(false);
	});
});
