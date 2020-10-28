import { getObjectType } from '../get-object-type';

describe('getObjectType', () => {
	test('should return "array" given []', () => {
		expect(getObjectType([])).toBe('array');
	});
	test('should return "boolean" given true', () => {
		expect(getObjectType(true)).toBe('boolean');
	});
	test('should return "date" given a new Date', () => {
		expect(getObjectType(new Date())).toBe('date');
	});
	test('should return "map" given a new Map', () => {
		expect(getObjectType(new Map())).toBe('map');
	});
	test('should return "null" given null', () => {
		expect(getObjectType(null)).toBe('null');
	});
	test('should return "number" given 0', () => {
		expect(getObjectType(0)).toBe('number');
	});
	test('should return "object" given {}', () => {
		expect(getObjectType({})).toBe('object');
	});
	test('should return "set" given a new Set', () => {
		expect(getObjectType(new Set<number>())).toBe('set');
	});
	test('should return "string" given ""', () => {
		expect(getObjectType('')).toBe('string');
	});
	test('should return "symbol" given a Symbol', () => {
		expect(getObjectType(Symbol())).toBe('symbol');
	});
	test('should return "undefined" given undefined', () => {
		expect(getObjectType(undefined)).toBe('undefined');
	});
});
