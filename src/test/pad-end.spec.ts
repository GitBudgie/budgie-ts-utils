import { padEnd } from '../pad-end';

describe('padEnd', () => {
	test('should return "1" string given "1", 1, "0"', () => {
		expect(padEnd('1', 1, '0')).toBe('1');
	});
	test('should return "10" string given "1", 2, "0"', () => {
		expect(padEnd('1', 2, '0')).toBe('10');
	});
	test('should return "abc" string given "abc", 3, "x"', () => {
		expect(padEnd('abc', 3, 'x')).toBe('abc');
	});
	test('should return "abcdef" string given "abcdef", 4, "x"', () => {
		expect(padEnd('abcdef', 4, 'x')).toBe('abcdef');
	});
	test('should return "abc12312" string given "abc", 8, "123"', () => {
		expect(padEnd('abc', 8, '123')).toBe('abc12312');
	});
	test('should return "abc123123" string given "abc", 9, "123"', () => {
		expect(padEnd('abc', 9, '123')).toBe('abc123123');
	});
	test('should return "1231" string given "", 4, "123"', () => {
		expect(padEnd('', 4, '123')).toBe('1231');
	});
	test('should return "abc" string given "abc", 9, ""', () => {
		expect(padEnd('abc', 9, '')).toBe('abc');
	});
});
