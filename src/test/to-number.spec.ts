import { toNumber } from '../to-number';

describe('toNumber', () => {
	test('should return NaN given ""', () => {
		expect(toNumber('')).toBe(NaN);
	});
	test('should return 123 given 123', () => {
		expect(toNumber(123)).toBe(123);
	});
	test('should return 123 given "123"', () => {
		expect(toNumber('123')).toBe(123);
	});
	test('should return 3.1 given "3.1"', () => {
		expect(toNumber('3.1')).toBe(3.1);
	});
	test('should return -3.1 given "-3.1"', () => {
		expect(toNumber('-3.1')).toBe(-3.1);
	});
	test('should return Infinity given "1e+999"', () => {
		expect(toNumber('1e+999')).toBe(Infinity);
	});
	test('should return 1234567890 given BigInt(1234567890)', () => {
		expect(toNumber(BigInt(1234567890))).toBe(1234567890);
	});
	test('should return Infinity given Infinity', () => {
		expect(toNumber(Infinity)).toBe(Infinity);
	});
	test('should return NaN given "test"', () => {
		expect(toNumber('test')).toBe(NaN);
	});
	test('should return NaN given null', () => {
		expect(toNumber(null)).toBe(NaN);
	});
	test('should return NaN given NaN', () => {
		expect(toNumber(NaN)).toBe(NaN);
	});
	test('should return NaN given undefined', () => {
		expect(toNumber(undefined)).toBe(NaN);
	});
});
