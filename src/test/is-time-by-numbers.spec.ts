import { isTimeByNumbers } from '../is-time-by-numbers';

describe('isTimeByNumbers', () => {
	test('should return true given 0, 0, 0', () => {
		expect(isTimeByNumbers(0, 0, 0)).toBe(true);
	});
	test('should return true given 23, 59, 59', () => {
		expect(isTimeByNumbers(23, 59, 59)).toBe(true);
	});
	test('should return true given 23, 59, 59, 9999999999', () => {
		expect(isTimeByNumbers(23, 59, 59, 9999999999)).toBe(true);
	});
	test('should return true given 23, 59, 59, 999, "ms"', () => {
		expect(isTimeByNumbers(23, 59, 59, 999, 'ms')).toBe(true);
	});
	test('should return true given 23, 59, 59, 999999, "us"', () => {
		expect(isTimeByNumbers(23, 59, 59, 999999, 'us')).toBe(true);
	});
	test('should return true given 23, 59, 59, 999999999, "ns"', () => {
		expect(isTimeByNumbers(23, 59, 59, 999999999, 'ns'))
			.toBe(true);
	});
	test('should return false given -1, 0, 0', () => {
		expect(isTimeByNumbers(-1, 0, 0)).toBe(false);
	});
	test('should return false given 0, -1, 0', () => {
		expect(isTimeByNumbers(0, -1, 0)).toBe(false);
	});
	test('should return false given 0, 0, -1', () => {
		expect(isTimeByNumbers(0, 0, -1)).toBe(false);
	});
	test('should return false given 24, 59, 59', () => {
		expect(isTimeByNumbers(24, 59, 59)).toBe(false);
	});
	test('should return false given 23, 60, 59', () => {
		expect(isTimeByNumbers(23, 60, 59)).toBe(false);
	});
	test('should return false given 23, 59, 60', () => {
		expect(isTimeByNumbers(23, 59, 60)).toBe(false);
	});
	test('should return false given 23, 59, 59, 9999999999, "ms"', () => {
		expect(isTimeByNumbers(23, 59, 59, 9999999999, 'ms'))
			.toBe(false);
	});
	test('should return false given 23, 59, 59, 9999999999, "us"', () => {
		expect(isTimeByNumbers(23, 59, 59, 9999999999, 'us'))
			.toBe(false);
	});
	test('should return false given 23, 59, 59, 9999999999, "ns"', () => {
		expect(isTimeByNumbers(23, 59, 59, 9999999999, 'ns'))
			.toBe(false);
	});
});
