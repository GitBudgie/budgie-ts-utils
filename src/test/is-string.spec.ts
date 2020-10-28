import { isString } from '../is-string';

describe('isString', () => {
	const str = 'ABC';
	test(`should return true given "${str}"`, () => {
		expect(isString(str)).toBe(true);
	});
	const str2 = 'ABC\u0100';
	test(`should return true given "${str2}"`, () => {
		expect(isString(str2)).toBe(true);
	});
	test('should return true given ""', () => {
		expect(isString('')).toBe(true);
	});
	test('should return false given 123', () => {
		expect(isString(123)).toBe(false);
	});
	test('should return false given []', () => {
		expect(isString([])).toBe(false);
	});
	test('should return false given null', () => {
		expect(isString(null)).toBe(false);
	});
});
