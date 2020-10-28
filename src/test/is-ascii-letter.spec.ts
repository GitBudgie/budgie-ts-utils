import { isAsciiLetter } from '../is-ascii-letter';

describe('isAsciiLetter', () => {
	const str = 'A';
	test(`should return true given "${str}"`, () => {
		expect(isAsciiLetter(str)).toBe(true);
	});
	const str2 = 'AB';
	test(`should return false given "${str2}"`, () => {
		expect(isAsciiLetter(str2)).toBe(false);
	});
	const str3 = '4';
	test(`should return false given "${str3}"`, () => {
		expect(isAsciiLetter(str3)).toBe(false);
	});
	test('should return false given ""', () => {
		expect(isAsciiLetter('')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isAsciiLetter(null)).toBe(false);
	});
});
