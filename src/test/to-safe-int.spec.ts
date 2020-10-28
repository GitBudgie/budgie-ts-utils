import { toSafeInt, SAFE_INT_MAX, SAFE_INT_MIN } from '../to-safe-int';

describe('toSafeInt', () => {
	test('should return 0 given 0', () => {
		expect(toSafeInt(0)).toBe(0);
	});
	test('should return 123 given "123"', () => {
		expect(toSafeInt('123')).toBe(123);
	});
	test('should return 123 given "-123.456"', () => {
		expect(toSafeInt('-123.456')).toBe(-123);
	});
	test('should return ' + SAFE_INT_MAX + ' given ' + SAFE_INT_MAX,
		() => {
			expect(toSafeInt(SAFE_INT_MAX)).toBe(SAFE_INT_MAX);
	});
	test('should return ' + SAFE_INT_MIN + ' given ' + SAFE_INT_MIN,
		() => {
			expect(toSafeInt(SAFE_INT_MIN)).toBe(SAFE_INT_MIN);
	});
	test('should return 0 given ' + (SAFE_INT_MAX + 1),
		() => {
			expect(toSafeInt(SAFE_INT_MAX + 1))
				.toBe(0);
	});
	test('should return 0 given ' + (SAFE_INT_MIN - 1),
		() => {
			expect(toSafeInt(SAFE_INT_MIN - 1))
				.toBe(0);
	});
	test('should return 0 given Infinity', () => {
		expect(toSafeInt(Infinity)).toBe(0);
	});
	test('should return 0 given NaN', () => {
		expect(toSafeInt(NaN)).toBe(0);
	});
	test('should return 0 given ""', () => {
		expect(toSafeInt('')).toBe(0);
	});
	test('should return 0 given null', () => {
		expect(toSafeInt(null)).toBe(0);
	});
});
