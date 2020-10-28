import { clamp } from '../clamp';

describe('clamp', () => {
	test('should return 0 given 0', () => {
		expect(clamp(0)).toBe(0);
	});
	test('should return 0 given 0, -1, 1', () => {
		expect(clamp(0, -1, 1)).toBe(0);
	});
	test('should return 5 given 0, 5, 10', () => {
		expect(clamp(0, 5, 10)).toBe(5);
	});
	test('should return -5 given 0, -5, -10', () => {
		expect(clamp(0, -5, -10)).toBe(-5);
	});
	test('should return 10 given 11, -10, 10', () => {
		expect(clamp(11, -10, 10)).toBe(10);
	});
	test('should return -10 given -11, -10, 10', () => {
		expect(clamp(-11, -10, 10)).toBe(-10);
	});
	test('should return 0 given 0, NaN, NaN', () => {
		expect(clamp(0, NaN, NaN)).toBe(0);
	});
	test('should return 0 given NaN, NaN, NaN', () => {
		expect(clamp(NaN, NaN, NaN)).toBe(0);
	});
	test('should return 0 given NaN, -Infinity, Infinity', () => {
		expect(clamp(NaN, -Infinity, Infinity)).toBe(0);
	});
	test('should return 10 given Infinity, -10, 10', () => {
		expect(clamp(Infinity, -10, 10)).toBe(10);
	});
	test('should return -10 given -Infinity, -10, -10', () => {
		expect(clamp(-Infinity, -10, 10)).toBe(-10);
	});
	test('should return Infinity given Infinity, -Infinity, Infinity',
		() => {
			expect(clamp(Infinity, -Infinity, Infinity))
				.toBe(Infinity);
	});
	test('should return -Infinity given -Infinity, -Infinity, Infinity',
		() => {
			expect(clamp(-Infinity, -Infinity, Infinity))
				.toBe(-Infinity);
	});
});
