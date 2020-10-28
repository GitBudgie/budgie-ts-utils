import{ isFiniteNumberLikeString } from '../is-finite-number-like-string';

describe('isFiniteNumberLikeString', () => {
	test('should return true given "0"', () => {
		expect(isFiniteNumberLikeString('0')).toBe(true);
	});
	test('should return true given "123"', () => {
		expect(isFiniteNumberLikeString('123')).toBe(true);
	});
	test('should return true given "-123"', () => {
		expect(isFiniteNumberLikeString('-123')).toBe(true);
	});
	test('should return true given "123.456"', () => {
		expect(isFiniteNumberLikeString('123.456')).toBe(true);
	});
	test('should return true given "-123.456"', () => {
		expect(isFiniteNumberLikeString('-123.456')).toBe(true);
	});
	test('should return false given "1e+999"', () => {
		expect(isFiniteNumberLikeString('1e+999')).toBe(false);
	});
	test('should return false given "-1e+999"', () => {
		expect(isFiniteNumberLikeString('-1e+999')).toBe(false);
	});
	test('should return false given " 5"', () => {
		expect(isFiniteNumberLikeString(' 5')).toBe(false);
	});
	test('should return false given "5 "', () => {
		expect(isFiniteNumberLikeString('5 ')).toBe(false);
	});
	test('should return false given ""', () => {
		expect(isFiniteNumberLikeString('')).toBe(false);
	});
});
