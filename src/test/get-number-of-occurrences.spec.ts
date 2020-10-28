import { getNumberOfOccurrences } from '../get-number-of-occurrences';
import { arrayToDecoratedString } from '../array-to-decorated-string';

describe('getNumberOfOccurrences', () => {
	const arr: number[] = [];
	const str = arrayToDecoratedString(arr);
	test(`should return 0 given 0, ${str}`, () => {
		expect(getNumberOfOccurrences(0, arr)).toBe(0);
	});
	const arr2: number[] = [1, 2, 3, 4];
	const str2 = arrayToDecoratedString(arr2);
	test(`should return 1 given 3, ${str2}`, () => {
		expect(getNumberOfOccurrences(3, arr2)).toBe(1);
	});
	const arr3: string[] = ['a', 'b', 'b', 'a'];
	const str3 = arrayToDecoratedString(arr3);
	test(`should return 2 given "b", ${str3}`, () => {
		expect(getNumberOfOccurrences('b', arr3)).toBe(2);
	});
	const arr4: any[] = ['b', '2', NaN, 'x'];
	const str4 = arrayToDecoratedString(arr4);
	test(`should return 1 given NaN, ${str4}`, () => {
		expect(getNumberOfOccurrences(NaN, arr4)).toBe(1);
	});
	test('should return 0 given [], null', () => {
		expect(getNumberOfOccurrences(null, [])).toBe(0);
	});
});
