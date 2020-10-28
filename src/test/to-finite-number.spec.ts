import { toFiniteNumber } from '../to-finite-number';

describe('toFiniteNumber', () => {
	test('should return 0 given ""', () => {
		expect(toFiniteNumber('')).toBe(0);
	});
	test('should return 123 given 123', () => {
		expect(toFiniteNumber(123)).toBe(123);
	});
	test('should return 123 given "123"', () => {
		expect(toFiniteNumber('123')).toBe(123);
	});
	test('should return 3.1 given "3.1"', () => {
		expect(toFiniteNumber('3.1')).toBe(3.1);
	});
	test('should return -3.1 given "-3.1"', () => {
		expect(toFiniteNumber('-3.1')).toBe(-3.1);
	});
	test('should return 0 given "1e+999"', () => {
		expect(toFiniteNumber('1e+999')).toBe(0);
	});
	test('should return 1234567890 given BigInt(1234567890)', () => {
		expect(toFiniteNumber(BigInt(1234567890))).toBe(1234567890);
	});
	test('should return 0 given Infinity', () => {
		expect(toFiniteNumber(Infinity)).toBe(0);
	});
	test('should return 0 given "test"', () => {
		expect(toFiniteNumber('test')).toBe(0);
	});
	test('should return 0 given null', () => {
		expect(toFiniteNumber(null)).toBe(0);
	});
	test('should return 0 given NaN', () => {
		expect(toFiniteNumber(NaN)).toBe(0);
	});
	test('should return 0 given undefined', () => {
		expect(toFiniteNumber(undefined)).toBe(0);
	});
});
