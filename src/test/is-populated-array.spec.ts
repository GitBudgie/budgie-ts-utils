import { arrayToDecoratedString } from '../array-to-decorated-string';
import { isPopulatedArray } from '../is-populated-array';

describe('isPopulatedArray', () => {
	const arr: number[] = [0, 1, 2];
	const str = arrayToDecoratedString(arr);
	test(`should return true given ${str}`, () => {
		expect(isPopulatedArray(arr)).toBe(true);
	});
	const arr2: any[] = [];
	const str2 = arrayToDecoratedString(arr2);
	test(`should return false given ${str2}`, () => {
		expect(isPopulatedArray(arr2)).toBe(false);
	});
	test('should return false given null', () => {
		expect(isPopulatedArray(null)).toBe(false);
	});
});
