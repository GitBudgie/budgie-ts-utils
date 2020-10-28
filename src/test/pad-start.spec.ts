import { padStart } from '../pad-start';

describe('padStart', () => {
	test('should return "1" string given "1", 1, "0"', () => {
		expect(padStart('1', 1, '0')).toBe('1');
	});
	test('should return "01" string given "1", 2, "0"', () => {
		expect(padStart('1', 2, '0')).toBe('01');
	});
	test('should return "abc" string given "abc", 3, "x"', () => {
		expect(padStart('abc', 3, 'x')).toBe('abc');
	});
	test('should return "abcdef" string given "abcdef", 4, "x"', () => {
		expect(padStart('abcdef', 4, 'x')).toBe('abcdef');
	});
	test('should return "12312abc" string given "abc", 8, "123"', () => {
		expect(padStart('abc', 8, '123')).toBe('12312abc');
	});
	test('should return "123123abc" string given "abc", 9, "123"', () => {
		expect(padStart('abc', 9, '123')).toBe('123123abc');
	});
	test('should return "1231" string given "", 4, "123"', () => {
		expect(padStart('', 4, '123')).toBe('1231');
	});
	test('should return "abc" string given "abc", 9, ""', () => {
		expect(padStart('abc', 9, '')).toBe('abc');
	});
});
