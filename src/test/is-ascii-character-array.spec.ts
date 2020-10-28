import { arrayToDecoratedString } from '../array-to-decorated-string';
import { isAsciiCharacterArray } from '../is-ascii-character-array';

describe('isAsciiCharacterArray', () => {
	const arr = ["A", "B", "c", "d"];
	const str = arrayToDecoratedString(arr);
	test(`should return true given ${str}`, () => {
		expect(isAsciiCharacterArray(arr)).toBe(true);
	});
	const arr2 = ["A", "b", "1", "2"];
	const str2 = arrayToDecoratedString(arr2);
	test(`should return true given ${str2}`, () => {
		expect(isAsciiCharacterArray(arr2)).toBe(true);
	});
	const arr3 = ["A", "4", "😀"];
	const str3 = arrayToDecoratedString(arr3);
	test(`should return false given ${str3}`, () => {
		expect(isAsciiCharacterArray(arr3)).toBe(false);
	});
	test('should return false given []', () => {
		expect(isAsciiCharacterArray([])).toBe(false);
	});
	test('should return false given null', () => {
		expect(isAsciiCharacterArray(null)).toBe(false);
	});
});
