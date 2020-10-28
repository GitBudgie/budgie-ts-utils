import { isUndefined } from '../is-undefined';

describe('isUndefined', () => {
	test('should return true given undefined', () => {
		expect(isUndefined(undefined)).toBe(true);
	});
	test('should return false given null', () => {
		expect(isUndefined(null)).toBe(false);
	});
	test('should return false given "abc"', () => {
		expect(isUndefined('abc')).toBe(false);
	});
	test('should return false given 0', () => {
		expect(isUndefined(0)).toBe(false);
	});
});
