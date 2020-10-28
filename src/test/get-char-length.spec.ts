import { getCharLength } from '../get-char-length';

describe('getCharLength', () => {
	test('should return 0 given null', () => {
		expect(getCharLength(null)).toBe(0);
	});
	test('should return 0 given ""', () => {
		expect(getCharLength('')).toBe(0);
	});
	test('should return 1 given "a"', () => {
		expect(getCharLength('a')).toBe(1);
	});
	test('should return 1 given "ä"', () => {
		expect(getCharLength('ä')).toBe(1);
	});
	test('should return 1 given "😀"', () => {
		expect(getCharLength('😀')).toBe(1);
	});
	test('should return 2 given "😀+"', () => {
		expect(getCharLength('😀+')).toBe(2);
	});
	test('should return 3 given "😀+😎"', () => {
		expect(getCharLength('😀+😎')).toBe(3);
	});
});
