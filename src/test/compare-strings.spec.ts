import { compareStrings } from '../compare-strings';

// TODO: Tests to compare strings with various locales and options.

describe('compareStrings', () => {
	test('should return 0 given "", ""', () => {
		expect(compareStrings('', '')).toBe(0);
	});
	test('should return 0 given "a", "a"', () => {
		expect(compareStrings('A', 'A')).toBe(0);
	});
	test('should return 0 given "A", "A"', () => {
		expect(compareStrings('A', 'A')).toBe(0);
	});
	test('should return 0 given "Äörgh! 😀", "Äörgh! 😀"', () => {
		expect(compareStrings('Äörgh! 😀"', 'Äörgh! 😀"')).toBe(0);
	});
	test('should return < 0 given "", "A"', () => {
		expect(compareStrings('', 'A')).toBeLessThan(0);
	});
	test('should return > 0 given "A", ""', () => {
		expect(compareStrings('A', '')).toBeGreaterThan(0);
	});
	test('should return < 0 given "a", "A"', () => {
		expect(compareStrings('a', 'A')).toBeLessThan(0);
	});
	test('should return > 0 given "A", "a"', () => {
		expect(compareStrings('A', 'a')).toBeGreaterThan(0);
	});
});
