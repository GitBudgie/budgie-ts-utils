import { arrayToDecoratedString } from '../array-to-decorated-string';
import { isSafeIntArray } from '../is-safe-int-array';

describe('isSafeIntArray', () => {
	const arr = [-5, 0, 4, 9007199254740991];
	const str = arrayToDecoratedString(arr);
	test(`should return true given ${str}`, () => {
		expect(isSafeIntArray(arr)).toBe(true);
	});
	const arr2 = [-5, 0, 4, 9007199254740992];
	const str2 = arrayToDecoratedString(arr2);
	test(`should return false given ${str2}`, () => {
		expect(isSafeIntArray(arr2)).toBe(false);
	});
	const arr3 = [-5, 0, 4, 6.5];
	const str3 = arrayToDecoratedString(arr3);
	test(`should return false given ${str3}`, () => {
		expect(isSafeIntArray(arr3)).toBe(false);
	});
	test('should return false given []', () => {
		expect(isSafeIntArray([])).toBe(false);
	});
	test('should return false given null', () => {
		expect(isSafeIntArray(null)).toBe(false);
	});
});
