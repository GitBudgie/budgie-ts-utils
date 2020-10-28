import { toStr } from '../to-str';

describe('toStr', () => {
	test('should return "" given ""', () => {
		expect(toStr('')).toBe('');
	});
	test('should return "hello" given "hello"', () => {
		expect(toStr('hello')).toBe('hello');
	});
	test('should return "123" given 123', () => {
		expect(toStr(123)).toBe('123');
	});
	test('should return "1234567890" given BigInt(1234567890)', () => {
		expect(toStr(BigInt(1234567890))).toBe('1234567890');
	});
	test('should return "" given a new Date', () => {
		expect(toStr(new Date())).toBe('');
	});
	test('should return "" given {}', () => {
		expect(toStr({})).toBe('');
	});
	test('should return "" given []', () => {
		expect(toStr([])).toBe('');
	});
	test('should return "" given NaN', () => {
		expect(toStr(NaN)).toBe('');
	});
	test('should return "" given Infinity', () => {
		expect(toStr(Infinity)).toBe('');
	});
	test('should return "" given undefined', () => {
		expect(toStr(undefined)).toBe('');
	});
	test('should return "" given null', () => {
		expect(toStr(null)).toBe('');
	});
});
