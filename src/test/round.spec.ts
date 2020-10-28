import { round } from '../round';

describe('round', () => {
	test('should return 0 given 0', () => {
		expect(round(0)).toBe(0);
	});
	test('should return 0 given 0.4999999', () => {
		expect(round(0.4999999)).toBe(0);
	});
	test('should return 1 given 0.5', () => {
		expect(round(0.5)).toBe(1);
	});
	test('should return -0 given -0', () => {
		expect(round(-0)).toBe(-0);
	});
	test('should return -0 given -0.4999999', () => {
		expect(round(-0.4999999)).toBe(-0);
	});
	test('should return -1 given -0.5', () => {
		expect(round(-0.5)).toBe(-1);
	});
	test('should return 0.1234 given 0.12344 and 4', () => {
		expect(round(0.12344, 4)).toBe(0.1234);
	});
	test('should return 0.1235 given 0.12345 and 4', () => {
		expect(round(0.12345, 4)).toBe(0.1235);
	});
	test('should return -0.1234 given -0.12344 and 4', () => {
		expect(round(-0.12344, 4)).toBe(-0.1234);
	});
	test('should return -0.1235 given -0.12345 and 4', () => {
		expect(round(-0.12345, 4)).toBe(-0.1235);
	});
	test('should return Infinity given Infinity', () => {
		expect(round(Infinity)).toBe(Infinity);
	});
	test('should return -Infinity given -Infinity', () => {
		expect(round(-Infinity)).toBe(-Infinity);
	});
	test('should return NaN given NaN', () => {
		expect(round(NaN)).toBe(NaN);
	});
});
