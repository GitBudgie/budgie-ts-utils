import { getFreeFiniteNumber } from '../get-free-finite-number';

describe('getFreeFiniteNumber', () => {
	test('should return NaN given 0, [], 0', () => {
		expect(getFreeFiniteNumber(0, [], 0)).toBeNaN();
	});
	test('should return NaN given NaN, [], 1', () => {
		expect(getFreeFiniteNumber(NaN, [], 1)).toBeNaN();
	});
	test('should return 0 given 0, [], 1', () => {
		expect(getFreeFiniteNumber(0, [], 1)).toBe(0);
	});
	test('should return 7 given 7, [], 1', () => {
		expect(getFreeFiniteNumber(7, [], 1)).toBe(7);
	});
	test('should return -7 given -7, [], -1', () => {
		expect(getFreeFiniteNumber(-7, [], -1)).toBe(-7);
	});
	test('should return 3 given 2, [2], 1', () => {
		expect(getFreeFiniteNumber(2, [2], 1)).toBe(3);
	});
	test('should return 3 given 3, [2], 1', () => {
		expect(getFreeFiniteNumber(3, [2], 1)).toBe(3);
	});
	test('should return 6 given 4, [4, 5, 7], 1, true', () => {
		expect(getFreeFiniteNumber(4, [4, 5, 7], 1, true)).toBe(6);
	});
	test('should return 7 given 4, [4, 5, 6], 1, true', () => {
		expect(getFreeFiniteNumber(4, [4, 5, 6], 1, true)).toBe(7);
	});
	test('should return -6 given -4, [-4, -5, -7], -1, true', () => {
		expect(getFreeFiniteNumber(-4, [-4, -5, -7], -1, true))
			.toBe(-6);
	});
	test('should return 6 given 8, [9, 8, 7], -1, true', () => {
		expect(getFreeFiniteNumber(8, [9, 8, 7], -1, true)).toBe(6);
	});
	test('should return 6 given 5, [4, 5, 5, 5], 1, true', () => {
		expect(getFreeFiniteNumber(5, [4, 5, 5, 5], 1, true)).toBe(6);
	});
	test('should return 8 given 5, [7, 6, 5, 4], 1', () => {
		expect(getFreeFiniteNumber(5, [7, 6, 5, 4], 1)).toBe(8);
	});
	test('should return -4 given -3, [-2, -3], -1, true', () => {
		expect(getFreeFiniteNumber(-3, [-2, -3], -1, true)).toBe(-4);
	});
	test('should return -8 given -6, [-6, -7, -9], -1, true', () => {
		expect(getFreeFiniteNumber(-6, [-6, -7, -9], -1, true))
			.toBe(-8);
	});
	test('should return -6 given -5, [-4, -5, -5, -5], -1, true', () => {
		expect(getFreeFiniteNumber(-5, [-4, -5, -5, -5], -1, true))
			.toBe(-6);
	});
	test('should return -8 given -5, [-4, -6, -5, -7], -1', () => {
		expect(getFreeFiniteNumber(-5, [-4, -6, -5, -7], -1))
			.toBe(-8);
	});
});
