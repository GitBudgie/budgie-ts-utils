import { isFiniteNumberEqual } from '../is-finite-number-equal';

describe('isFiniteNumberEqual', () => {
	test('should return true given 0, 0', () => {
		expect(isFiniteNumberEqual(0, 0)).toBe(true);
	});
	test('should return true given 0.1, 0.2', () => {
		expect(isFiniteNumberEqual(0.1, 0.2)).toBe(true);
	});
	test('should return true given 0.9, 1, 0', () => {
		expect(isFiniteNumberEqual(0.9, 1, 0)).toBe(true);
	});
	test('should return true given -123.5, -123.5', () => {
		expect(isFiniteNumberEqual(-123.5, -123.5)).toBe(true);
	});
	test('should return true given 0.3, 0.30000000000000004', () => {
		expect(isFiniteNumberEqual(0.3, 0.30000000000000004))
			.toBe(true);
	});
	test('should return true given 0.123, 0.1234, 3', () => {
		expect(isFiniteNumberEqual(0.123, 0.1234, 3)).toBe(true);
	});
	test('should return true given 0.1239, 0.1239, 3', () => {
		expect(isFiniteNumberEqual(0.1239, 0.1239, 3)).toBe(true);
	});
	test('should return true given -0.125, -0.129, 2', () => {
		expect(isFiniteNumberEqual(-0.125, -0.129, 2)).toBe(true);
	});
	const num = 0.9999999999999999;
	test(`should return true given ${num}, ${num}, 15`, () => {
		expect(isFiniteNumberEqual(num, num, 15)).toBe(true);
	});
	test('should return false given 0.4, 0.5', () => {
		expect(isFiniteNumberEqual(0.4, 0.5)).toBe(false);
	});
	test('should return false given 0.1, 0.2, 1', () => {
		expect(isFiniteNumberEqual(0.1, 0.2, 1)).toBe(false);
	});
	test('should return false given 0.9, 1, 1', () => {
		expect(isFiniteNumberEqual(0.9, 1, 1)).toBe(false);
	});
	test('should return false given 0.123, 0.1234, 4', () => {
		expect(isFiniteNumberEqual(0.123, 0.1234, 4)).toBe(false);
	});
	test('should return false given 0.1234, 0.1239, 3', () => {
		expect(isFiniteNumberEqual(0.1234, 0.1239, 3)).toBe(false);
	});
	test('should return false given -0.124, -0.129, 2', () => {
		expect(isFiniteNumberEqual(-0.124, -0.129, 2)).toBe(false);
	});
	test('should return false given -1000.1234, -1000.1235, 3', () => {
		expect(isFiniteNumberEqual(-1000.1234, -1000.1235, 3))
			.toBe(false);
	});
	const numA2 = 1;
	const numB2 = 0.999999999999999;
	test(`should return false given ${numA2}, ${numB2}, 15`, () => {
		expect(isFiniteNumberEqual(numA2, numB2, 15)).toBe(false);
	});
	const numA3 = 0.999999999999999;
	const numB3 = 0.999999999999998;
	test(`should return false given ${numA3}, ${numB3}, 15`, () => {
		expect(isFiniteNumberEqual(numA3, numB3, 15)).toBe(false);
	});
	const numA4 = -0.999999999999999;
	const numB4 = +0.999999999999999;
	test(`should return false given ${numA4}, ${numB4}, 15`, () => {
		expect(isFiniteNumberEqual(numA4, numB4, 15)).toBe(false);
	});
	test('should return false given -1, 1', () => {
		expect(isFiniteNumberEqual(-1, 1)).toBe(false);
	});
});
