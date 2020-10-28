import { arrayToDecoratedString } from '../array-to-decorated-string';
import { isAsciiLetterArray } from '../is-ascii-letter-array';

describe('isAsciiLetterArray', () => {
	const arr = ["A", "B", "c", "d"];
	const str = arrayToDecoratedString(arr);
	test(`should return true given ${str}`, () => {
		expect(isAsciiLetterArray(arr)).toBe(true);
	});
	const arr2 = ["A", "b", "1", "2"];
	const str2 = arrayToDecoratedString(arr2);
	test(`should return false given ${str2}`, () => {
		expect(isAsciiLetterArray(arr2)).toBe(false);
	});
	test('should return false given []', () => {
		expect(isAsciiLetterArray([])).toBe(false);
	});
	test('should return false given null', () => {
		expect(isAsciiLetterArray(null)).toBe(false);
	});
});
