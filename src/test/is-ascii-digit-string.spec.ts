import { isAsciiDigitString } from '../is-ascii-digit-string';

describe('isAsciiDigitString', () => {
	const str = '0123456789';
	test(`should return true given ${str}`, () => {
		expect(isAsciiDigitString(str)).toBe(true);
	});
	const str2 = 'hello';
	test(`should return false given ${str2}`, () => {
		expect(isAsciiDigitString(str2)).toBe(false);
	});
	test('should return false given ""', () => {
		expect(isAsciiDigitString('')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isAsciiDigitString(null)).toBe(false);
	});
});
