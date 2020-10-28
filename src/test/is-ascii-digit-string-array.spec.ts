import { arrayToDecoratedString } from '../array-to-decorated-string';
import { isAsciiDigitStringArray } from '../is-ascii-digit-string-array';

describe('isAsciiDigitStringArray', () => {
	const arr = ['123', '456', '7'];
	const str = arrayToDecoratedString(arr);
	test(`should return true given ${str}`, () => {
		expect(isAsciiDigitStringArray(arr)).toBe(true);
	});
	const arr2 = ['123', '456', 'a'];
	const str2 = arrayToDecoratedString(arr2);
	test(`should return false given ${str2}`, () => {
		expect(isAsciiDigitStringArray(arr2)).toBe(false);
	});
	test('should return false given []', () => {
		expect(isAsciiDigitStringArray([])).toBe(false);
	});
	test('should return false given null', () => {
		expect(isAsciiDigitStringArray(null)).toBe(false);
	});
});
