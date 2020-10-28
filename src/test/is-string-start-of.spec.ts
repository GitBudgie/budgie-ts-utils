import { isStringStartOf } from '../is-string-start-of';

describe('isStringStartOf', () => {
	test('should return true given "", ""', () => {
		expect(isStringStartOf('', '')).toBe(true);
	});
	test('should return true given "" and "abcdef"', () => {
		expect(isStringStartOf('', 'abcdef')).toBe(true);
	});
	test('should return true given "abc" and "abcdef"', () => {
		expect(isStringStartOf('abc', 'abcdef')).toBe(true);
	});
	test('should return false given "abc" and "Abcdef"', () => {
		expect(isStringStartOf('abc', 'Abcdef')).toBe(false);
	});
	test('should return false given "hello" and "abcdef"', () => {
		expect(isStringStartOf('hello', 'abcdef')).toBe(false);
	});
});
