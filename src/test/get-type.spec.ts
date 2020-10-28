import { getType } from '../get-type';

describe('getType', () => {
	test('should return "array" given []', () => {
		expect(getType([])).toBe('array');
	});
	test('should return "bigint" given BigInt(7)', () => {
		expect(getType(BigInt(7))).toBe('bigint');
	});
	test('should return "boolean" given true', () => {
		expect(getType(true)).toBe('boolean');
	});
	test('should return "date" given new Date(0)', () => {
		expect(getType(new Date(0))).toBe('date');
	});
	test('should return "map" given new Map()', () => {
		expect(getType(new Map())).toBe('map');
	});
	test('should return "null" given null', () => {
		expect(getType(null)).toBe('null');
	});
	test('should return "number" given 7', () => {
		expect(getType(7)).toBe('number');
	});
	test('should return "object" given {}', () => {
		expect(getType({})).toBe('object');
	});
	test('should return "set" given new Set()', () => {
		expect(getType(new Set())).toBe('set');
	});
	test('should return "string" given "abc"', () => {
		expect(getType('abc')).toBe('string');
	});
	test('should return "symbol" given Symbol()', () => {
		expect(getType(Symbol())).toBe('symbol');
	});
	test('should return "undefined" given undefined', () => {
		expect(getType(undefined)).toBe('undefined');
	});
});
