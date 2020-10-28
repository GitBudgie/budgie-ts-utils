import { arrayToDecoratedString } from '../array-to-decorated-string';
import { getMaxFiniteNumber } from '../get-max-finite-number';

describe('getMaxFiniteNumber', () => {
	const arr: number[] = [5, -9, 8, 4, 9, -5, 3, 1, 0, 7];
	const str = arrayToDecoratedString(arr);
	test(`should return 9 given ${str}`, () => {
		expect(getMaxFiniteNumber(arr)).toBe(9);
	});
	const arr2: number[] = [-96, NaN, 64, Infinity, 0, 23, 32];
	const str2 = arrayToDecoratedString(arr2);
	test(`should return 64 given ${str2}`, () => {
		expect(getMaxFiniteNumber(arr2)).toBe(64);
	});
	const arr3: number[] = [NaN, 5, 2, Infinity, 6, -5, 7];
	const str3 = arrayToDecoratedString(arr3);
	test(`should return 100 given ${str3}, 100`, () => {
		expect(getMaxFiniteNumber(arr3, 100)).toBe(100);
	});
	test('should return 99 given [], 99', () => {
		expect(getMaxFiniteNumber([], 99)).toBe(99);
	});
	test('should return 0 given []', () => {
		expect(getMaxFiniteNumber([])).toBe(0);
	});
});
