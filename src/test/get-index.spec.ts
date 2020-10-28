import { getIndex } from '../get-index';
import { arrayToDecoratedString } from '../array-to-decorated-string';

describe('getIndex', () => {
	const arr: number[] = [0, 1, 2, 3, 4];
	const str = arrayToDecoratedString(arr);
	test(`should return 3 given 3, ${str}`, () => {
		expect(getIndex(3, arr)).toBe(3);
	});
	const arr2: string[] = ['a', 'b', 'c'];
	const str2 = arrayToDecoratedString(arr2);
	test(`should return 0 given "a", ${str2}`, () => {
		expect(getIndex('a', arr2)).toBe(0);
	});
	const arr3: any[] = [2, 3, NaN, 'x'];
	const str3 = arrayToDecoratedString(arr3);
	test(`should return 2 given NaN, ${str3}`, () => {
		expect(getIndex(NaN, arr3)).toBe(2);
	});
	const arr4: number[] = [9, 5, 6, 7, 9];
	const str4 = arrayToDecoratedString(arr4);
	test(`should return 4 given 9, ${str4}, 1`, () => {
		expect(getIndex(9, arr4, 1)).toBe(4);
	});
	test('should return -1 given "", []', () => {
		expect(getIndex('', [])).toBe(-1);
	});
});
