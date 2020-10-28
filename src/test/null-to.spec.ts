import { nullTo } from '../null-to';

describe('nullTo', () => {
	test('should return null given null, null', () => {
		expect(nullTo(null, null)).toBe(null);
	});
	test('should return null given undefined, null', () => {
		expect(nullTo(undefined, null)).toBe(null);
	});
	test('should return 1 given null, 1', () => {
		expect(nullTo(null, 1)).toBe(1);
	});
	test('should return 1 given undefined, 1', () => {
		expect(nullTo(undefined, 1)).toBe(1);
	});
	test('should return 2 given 2, 1', () => {
		expect(nullTo(2, 1)).toBe(2);
	});
	test('should return 123 given 123, "abc"', () => {
		expect(nullTo(123, 'abc')).toBe(123);
	});
	test('should return "abc" given "abc", 123', () => {
		expect(nullTo("abc", 123)).toBe('abc');
	});
	test('should return "hello" given null, "hello"', () => {
		expect(nullTo(null, 'hello')).toBe('hello');
	});
	test('should return "hello" given "hello", "there"', () => {
		expect(nullTo('hello', 'there')).toBe('hello');
	});
});
