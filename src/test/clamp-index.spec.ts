import { arrayToDecoratedString } from '../array-to-decorated-string';
import { clampIndex } from '../clamp-index';

describe('clampIndex', () => {
	const arr: number[] = [0, 1, 2];
	const str = arrayToDecoratedString(arr);
	test(`should return 0 given 0, ${str}`, () => {
		expect(clampIndex(0, arr)).toBe(0);
	});
	test(`should return 0 given -1, ${str}`, () => {
		expect(clampIndex(-1, arr)).toBe(0);
	});
	test(`should return 2 given 10, ${str}`, () => {
		expect(clampIndex(10, arr)).toBe(2);
	});
	test('should return -1 given 0, []', () => {
		expect(clampIndex(0, [])).toBe(-1);
	});
});
