import { padStartNumber } from '../pad-start-number';

describe('padStartNumber', () => {
	test('should return "0000" given 0, 4, "0"', () => {
		expect(padStartNumber(0, 4, '0')).toBe('0000');
	});
	test('should return "0099" given 99, 4, "0"', () => {
		expect(padStartNumber(99, 4, '0')).toBe('0099');
	});
	test('should return "+0099" given 99, 4, "0", "+"', () => {
		expect(padStartNumber(99, 4, '0', "+")).toBe('+0099');
	});
	test('should return "+0099" given 99, 4, "0", "+-"', () => {
		expect(padStartNumber(99, 4, '0', "+-")).toBe('+0099');
	});
	test('should return "-0099" given -99, 4, "0", "-"', () => {
		expect(padStartNumber(-99, 4, '0', "-")).toBe('-0099');
	});
	test('should return "-0099" given -99, 4, "0", "+-"', () => {
		expect(padStartNumber(-99, 4, '0', "+-")).toBe('-0099');
	});
	test('should return "09" given 9, 2, "0"', () => {
		expect(padStartNumber(9, 2, '0')).toBe('09');
	});
	test('should return "3" given 3, 1, "0"', () => {
		expect(padStartNumber(3, 1, '0')).toBe('3');
	});
	test('should return "-3" given -3, 1, "0", "-"', () => {
		expect(padStartNumber(-3, 1, '0', '-')).toBe('-3');
	});
	test('should return "123456" given 123456, 5, "0"', () => {
		expect(padStartNumber(123456, 5, '0')).toBe('123456');
	});
	test('should return "123" given 123, 5, ""', () => {
		expect(padStartNumber(123, 5, '')).toBe('123');
	});
	test('should return "000" given NaN, 3, "0"', () => {
		expect(padStartNumber(NaN, 3, '0')).toBe('000');
	});
});
