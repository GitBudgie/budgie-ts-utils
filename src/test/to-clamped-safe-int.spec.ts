import { toClampedSafeInt } from '../to-clamped-safe-int';

describe('toClampedSafeInt', () => {
	test('should return 0 given undefined', () => {
		expect(toClampedSafeInt(undefined)).toBe(0);
	});
	test('should return 123 given 123', () => {
		expect(toClampedSafeInt(123)).toBe(123);
	});
	test('should return 456 given "456"', () => {
		expect(toClampedSafeInt('456')).toBe(456);
	});
	test('should return 7 given "" and 7', () => {
		expect(toClampedSafeInt('', 7)).toBe(7);
	});
	test('should return 1 given -15, 7, 1 and 10', () => {
		expect(toClampedSafeInt(-15, 7, 1, 10)).toBe(1);
	});
	test('should return 5 given 5, 7, 1 and 10', () => {
		expect(toClampedSafeInt(5, 7, 1, 10)).toBe(5);
	});
	test('should return 10 given 15, 7, 1 and 10', () => {
		expect(toClampedSafeInt(15, 7, 1, 10)).toBe(10);
	});
});
