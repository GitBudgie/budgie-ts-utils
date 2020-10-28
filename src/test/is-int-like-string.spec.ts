import{ isIntLikeString } from '../is-int-like-string';

describe('isIntLikeString', () => {
	test('should return true given "0"', () => {
		expect(isIntLikeString('0')).toBe(true);
	});
	test('should return true given "123"', () => {
		expect(isIntLikeString('123')).toBe(true);
	});
	test('should return true given "-123"', () => {
		expect(isIntLikeString('-123')).toBe(true);
	});
	test('should return false given "123.456"', () => {
		expect(isIntLikeString('123.456')).toBe(false);
	});
	test('should return false given "-123.456"', () => {
		expect(isIntLikeString('-123.456')).toBe(false);
	});
	test('should return false given "1e+999"', () => {
		expect(isIntLikeString('1e+999')).toBe(false);
	});
	test('should return false given "-1e+999"', () => {
		expect(isIntLikeString('-1e+999')).toBe(false);
	});
	test('should return false given " 5"', () => {
		expect(isIntLikeString(' 5')).toBe(false);
	});
	test('should return false given "5 "', () => {
		expect(isIntLikeString('5 ')).toBe(false);
	});
	test('should return false given ""', () => {
		expect(isIntLikeString('')).toBe(false);
	});
});
