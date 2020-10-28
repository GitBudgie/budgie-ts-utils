import { isNumber } from '../is-number';

describe('isNumber', () => {
	test('should return true given 0', () => {
		expect(isNumber(0)).toBe(true);
	});
	test('should return true given 123', () => {
		expect(isNumber(123)).toBe(true);
	});
	test('should return true given -123', () => {
		expect(isNumber(-123)).toBe(true);
	});
	test('should return true given 123.456', () => {
		expect(isNumber(123.456)).toBe(true);
	});
	test('should return true given -123.456', () => {
		expect(isNumber(-123.456)).toBe(true);
	});
	test('should return true given Infinity', () => {
		expect(isNumber(Infinity)).toBe(true);
	});
	test('should return true given NaN', () => {
		expect(isNumber(NaN)).toBe(true);
	});
	test('should return false given ""', () => {
		expect(isNumber('')).toBe(false);
	});
	test('should return false given "123"', () => {
		expect(isNumber('123')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isNumber(null)).toBe(false);
	});
});
