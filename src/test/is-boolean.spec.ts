import { isBoolean } from '../is-boolean';

describe('isBoolean', () => {
	test('should return true given true', () => {
		expect(isBoolean(true)).toBe(true);
	});
	test('should return true given false', () => {
		expect(isBoolean(false)).toBe(true);
	});
	test('should return false given 0', () => {
		expect(isBoolean(0)).toBe(false);
	});
	test('should return false given 1', () => {
		expect(isBoolean(1)).toBe(false);
	});
	test('should return false given 123', () => {
		expect(isBoolean(123)).toBe(false);
	});
	test('should return false given "boolean"', () => {
		expect(isBoolean('boolean')).toBe(false);
	});
	test('should return false given "true"', () => {
		expect(isBoolean('true')).toBe(false);
	});
	test('should return false given "false"', () => {
		expect(isBoolean('false')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isBoolean(null)).toBe(false);
	});
});
