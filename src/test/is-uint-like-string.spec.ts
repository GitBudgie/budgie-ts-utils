import{ isUIntLikeString } from '../is-uint-like-string';

describe('isUIntLikeString', () => {
	test('should return true given "0"', () => {
		expect(isUIntLikeString('0')).toBe(true);
	});
	test('should return true given "123"', () => {
		expect(isUIntLikeString('123')).toBe(true);
	});
	test('should return false given "+123"', () => {
		expect(isUIntLikeString('+123')).toBe(false);
	});
	test('should return false given "-123"', () => {
		expect(isUIntLikeString('-123')).toBe(false);
	});
	test('should return false given "123.4"', () => {
		expect(isUIntLikeString('123.4')).toBe(false);
	});
	test('should return false given "abc"', () => {
		expect(isUIntLikeString('abc')).toBe(false);
	});
	test('should return false given ""', () => {
		expect(isUIntLikeString('')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isUIntLikeString(null)).toBe(false);
	});
});
