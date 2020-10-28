import { timeNumbersToString } from '../time-numbers-to-string';

describe('timeNumbersToString', () => {

	test('should return "00:00:00" given nothing', () => {
		expect(timeNumbersToString()).toBe('00:00:00');
	});
	test('should return "00:00:00" given 0, 0, 0', () => {
		expect(timeNumbersToString(0, 0, 0)).toBe('00:00:00');
	});
	test('should return "00:00:00" given 0, 0, 0, 0', () => {
		expect(timeNumbersToString(0, 0, 0, 0)).toBe('00:00:00');
	});
	test('should return "00:00:00:000" given 0, 0, 0, 0, "ms"', () => {
		expect(timeNumbersToString(0, 0, 0, 0, 'ms'))
			.toBe('00:00:00:000');
	});
	test('should return "00:00:00:000000" given 0, 0, 0, 0, "us"', () => {
		expect(timeNumbersToString(0, 0, 0, 0, 'us'))
			.toBe('00:00:00:000000');
	});
	test('should return "00:00:00:000000000" given 0, 0, 0, 0, "ns"',
		() => {
			expect(timeNumbersToString(0, 0, 0, 0, 'ns'))
				.toBe('00:00:00:000000000');
	});
	test('should return "23:58:59:999" given 23, 58, 59, 999, "ms"',
		() => {
			expect(timeNumbersToString(23, 58, 59, 999, 'ms'))
				.toBe('23:58:59:999');
	});
	test('should return "00:00:00" given NaN, -Infinity, Infinity',
		() => {
			expect(timeNumbersToString(NaN, -Infinity, Infinity))
				.toBe('00:00:00');
	});
});
