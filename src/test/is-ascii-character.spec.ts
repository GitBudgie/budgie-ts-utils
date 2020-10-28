import { isAsciiCharacter } from '../is-ascii-character';

describe('isAsciiCharacter', () => {
	const str = 'A';
	test(`should return true given "${str}"`, () => {
		expect(isAsciiCharacter(str)).toBe(true);
	});
	const str2 = '4';
	test(`should return true given "${str2}"`, () => {
		expect(isAsciiCharacter(str2)).toBe(true);
	});
	const str3 = 'AB';
	test(`should return false given "${str3}"`, () => {
		expect(isAsciiCharacter(str3)).toBe(false);
	});
	test('should return false given "😀"', () => {
		expect(isAsciiCharacter('😀')).toBe(false);
	});
	test('should return false given ""', () => {
		expect(isAsciiCharacter('')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isAsciiCharacter(null)).toBe(false);
	});
});
