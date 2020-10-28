import { round } from '../round';
import { slerp } from '../slerp';

describe('slerp', () => {
	test('should return 0 given 0, 1, 0', () => {
		expect(slerp(0, 1, 0)).toBe(0);
	});
	test('should return 1 given 0, 1, 1', () => {
		expect(slerp(0, 1, 1)).toBe(1);
	});
	test('should return -1 given 0, -1, 1', () => {
		expect(slerp(0, -1, 1)).toBe(-1);
	});
	test('should return -70.7106781 given -100, 100, 0.25', () => {
		expect(round(slerp(-100, 100, 0.25), 7)).toBe(-70.7106781);
	});
	test('should return 538.999205 given 987, -654, 0.35', () => {
		expect(round(slerp(987, -654, 0.35), 7)).toBe(538.999205);
	});
	test('should return 0.2730048 given 0, 1, 0.35', () => {
		expect(round(slerp(0, 1, 0.35), 7)).toBe(0.2730048);
	});
	test('should return 0.7269952 given 0, 1, 0.65', () => {
		expect(round(slerp(0, 1, 0.65), 7)).toBe(0.7269952);
	});
	test('should return 222.8705545 given 4096, -1337, 0.64', () => {
		expect(round(slerp(4096, -1337, 0.64), 7)).toBe(222.8705545);
	});
	test('should return ~2.3307206 given -3.14, 9.55, 0.456', () => {
		expect(round(slerp(-3.14, 9.55, 0.456), 7)).toBe(2.3307206);
	});
	test('should return 0 given NaN, NaN, NaN', () => {
		expect(slerp(NaN, NaN, NaN)).toBe(0);
	});
});
