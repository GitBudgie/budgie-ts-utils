import { objectToString } from '../object-to-string';

describe('objectToString', () => {
	test('should return "abc" given "abc"', () => {
		expect(objectToString('abc')).toBe('abc');
	});
	test('should return "123" given 123', () => {
		expect(objectToString(123)).toBe('123');
	});
	test('should return "[1, 2, 3]" given [1, 2, 3]', () => {
		expect(objectToString([1, 2, 3])).toBe('[1, 2, 3]');
	});
	test('should return "null" given null', () => {
		expect(objectToString(null)).toBe('null');
	});
});
