import { isObject } from '../is-object';

describe('isObject', () => {
	test('should return true given {}', () => {
		expect(isObject({})).toBe(true);
	});
	test('should return true given []', () => {
		expect(isObject({})).toBe(true);
	});
	test('should return true given a new Date', () => {
		expect(isObject(new Date())).toBe(true);
	});
	test('should return false given 123', () => {
		expect(isObject(123)).toBe(false);
	});
	test('should return false given "abc"', () => {
		expect(isObject('abc')).toBe(false);
	});
	test('should return false given undefined', () => {
		expect(isObject(undefined)).toBe(false);
	});
	test('should return false given null', () => {
		expect(isObject(null)).toBe(false);
	});
});
