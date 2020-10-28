import { lerp } from '../lerp';
import { round } from '../round';

describe('lerp', () => {
	test('should return 0 given 0, 0, 0', () => {
		expect(lerp(0, 0, 0)).toBe(0);
	});
	test('should return 0 given 0, 1, 0', () => {
		expect(lerp(0, 1, 0)).toBe(0);
	});
	test('should return 1 given 0, 1, 1', () => {
		expect(lerp(0, 1, 1)).toBe(1);
	});
	test('should return -1 given 0, -1, 1', () => {
		expect(lerp(0, -1, 1)).toBe(-1);
	});
	test('should return -50 given -100, 100, 0.25', () => {
		expect(lerp(-100, 100, 0.25)).toBe(-50);
	});
	test('should return ~412.65 given 987, -654, 0.35', () => {
		expect(round(lerp(987, -654, 0.35), 2)).toBe(412.65);
	});
	test('should return ~2.64664 given -3.14, 9.55, 0.456', () => {
		expect(round(lerp(-3.14, 9.55, 0.456), 5)).toBe(2.64664);
	});
	test('should return 0 given NaN, NaN, NaN', () => {
		expect(lerp(NaN, NaN, NaN)).toBe(0);
	});
});
