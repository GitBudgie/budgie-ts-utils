import { isAsciiDigit } from '../is-ascii-digit';

describe('isAsciiDigit', () => {
	const str = '0';
	test(`should return true given "${str}"`, () => {
		expect(isAsciiDigit(str)).toBe(true);
	});
	const str2 = '00';
	test(`should return false given "${str2}"`, () => {
		expect(isAsciiDigit(str2)).toBe(false);
	});
	const str3 = 'a';
	test(`should return false given "${str3}"`, () => {
		expect(isAsciiDigit(str3)).toBe(false);
	});
	test('should return false given ""', () => {
		expect(isAsciiDigit('')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isAsciiDigit(null)).toBe(false);
	});
});
