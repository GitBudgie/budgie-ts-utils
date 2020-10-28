import { isAsciiString } from '../is-ascii-string';

describe('isAsciiString', () => {
	const str = 'ABC';
	test(`should return true given "${str}"`, () => {
		expect(isAsciiString(str)).toBe(true);
	});
	const str2 = 'ABC\u0100';
	test(`should return false given "${str2}"`, () => {
		expect(isAsciiString(str2)).toBe(false);
	});
	test('should return false given ""', () => {
		expect(isAsciiString('')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isAsciiString(null)).toBe(false);
	});
});
