import { isNonNaNNumber } from '../is-non-nan-number';

describe('isNonNaNNumber', () => {
	test('should return true given 7', () => {
		expect(isNonNaNNumber(7)).toBe(true);
	});
	test('should return true given -3.14', () => {
		expect(isNonNaNNumber(-3.14)).toBe(true);
	});
	test('should return true given Infinity', () => {
		expect(isNonNaNNumber(Infinity)).toBe(true);
	});
	test('should return false given NaN', () => {
		expect(isNonNaNNumber(NaN)).toBe(false);
	});
	test('should return false given "abc"', () => {
		expect(isNonNaNNumber('abc')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isNonNaNNumber(null)).toBe(false);
	});
});
