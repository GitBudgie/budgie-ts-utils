import { toBoolean } from '../to-boolean';

describe('toBoolean', () => {
	test('should return true given true', () => {
		expect(toBoolean(true)).toBe(true);
	});
	test('should return true given 1', () => {
		expect(toBoolean(1)).toBe(true);
	});
	test('should return true given "t"', () => {
		expect(toBoolean('t')).toBe(true);
	});
	test('should return true given "true"', () => {
		expect(toBoolean('true')).toBe(true);
	});
	test('should return false given false', () => {
		expect(toBoolean(false)).toBe(false);
	});
	test('should return false given 0', () => {
		expect(toBoolean(0)).toBe(false);
	});
	test('should return false given "f"', () => {
		expect(toBoolean('f')).toBe(false);
	});
	test('should return false given "false"', () => {
		expect(toBoolean('false')).toBe(false);
	});
	test('should return false given ""', () => {
		expect(toBoolean('')).toBe(false);
	});
	test('should return false given null', () => {
		expect(toBoolean(null)).toBe(false);
	});
	test('should return false given undefined', () => {
		expect(toBoolean(undefined)).toBe(false);
	});
});
