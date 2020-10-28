import { getClassName } from '../get-class-name';

describe('getClassName', () => {
	test('should return "Object" given {}', () => {
		expect(getClassName({})).toBe('Object');
	});
	test('should return "Array" given []', () => {
		expect(getClassName([])).toBe('Array');
	});
	test('should return "Date" given a new Date', () => {
		expect(getClassName(new Date())).toBe('Date');
	});
	test('should return "Number" given 123', () => {
		expect(getClassName(123)).toBe('Number');
	});
	test('should return "String" given "hello"', () => {
		expect(getClassName('hello')).toBe('String');
	});
	test('should return "" given undefined', () => {
		expect(getClassName(undefined)).toBe('');
	});
	test('should return "" given null', () => {
		expect(getClassName(null)).toBe('');
	});
});
