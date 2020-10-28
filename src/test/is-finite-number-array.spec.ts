import { arrayToDecoratedString } from '../array-to-decorated-string';
import { isFiniteNumberArray } from '../is-finite-number-array';

describe('isFiniteNumberArray', () => {
	const arr = [-3.456, 8, 11, 281];
	const str = arrayToDecoratedString(arr);
	test(`should return true given ${str}`, () => {
		expect(isFiniteNumberArray(arr)).toBe(true);
	});
	const arr2 = [0, 4, -5, 3.14, Infinity, 4];
	const str2 = arrayToDecoratedString(arr2);
	test(`should return false given ${str2}`, () => {
		expect(isFiniteNumberArray(arr2)).toBe(false);
	});
	const arr3 = [64, -21, 53.2367, NaN];
	const str3 = arrayToDecoratedString(arr3);
	test(`should return false given ${str3}`, () => {
		expect(isFiniteNumberArray(arr3)).toBe(false);
	});
	test('should return false given []', () => {
		expect(isFiniteNumberArray([])).toBe(false);
	});
	test('should return false given null', () => {
		expect(isFiniteNumberArray(null)).toBe(false);
	});
});
