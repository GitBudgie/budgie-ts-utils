import { isEmptyOrWhitespaceString } from '../is-empty-or-whitespace-string';

describe('isEmptyOrWhitespaceString', () => {
	test('should return true given ""', () => {
		expect(isEmptyOrWhitespaceString('')).toBe(true);
	});
	test('should return true given " "', () => {
		expect(isEmptyOrWhitespaceString(' ')).toBe(true);
	});
	test('should return true given " \\n "', () => {
		expect(isEmptyOrWhitespaceString(' \n ')).toBe(true);
	});
	test('should return false given " abc "', () => {
		expect(isEmptyOrWhitespaceString(' abc ')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isEmptyOrWhitespaceString(null)).toBe(false);
	});
});
