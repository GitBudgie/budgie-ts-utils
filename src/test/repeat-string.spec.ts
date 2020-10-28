import { repeatString } from '../repeat-string';

describe('repeatString', () => {
	test('should return "" given "", 0',
		() => {
			expect(repeatString('', 0)).toBe('');
		});
	test('should return "" given "a", 0',
		() => {
			expect(repeatString('a', 0)).toBe('');
		});
	test('should return "" given "", 1',
		() => {
			expect(repeatString('', 1)).toBe('');
		});
	test('should return "a" given "a", 1',
		() => {
			expect(repeatString('a', 1)).toBe('a');
		});
	test('should return "aaa" given "a", 3',
		() => {
			expect(repeatString('a', 3)).toBe('aaa');
		});
	test('should return "abcabcab" given "abc", 8',
		() => {
			expect(repeatString('abc', 8)).toBe('abcabcab');
		});
});
