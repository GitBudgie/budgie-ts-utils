import { arrayToDecoratedString } from '../array-to-decorated-string';
import { trimEnd } from '../trim-end';

describe('trimEnd', () => {
	test('should return "" given ""', () => {
		expect(trimEnd('')).toBe('');
	});
	const res = 'abc';
	const str = 'abc   ';
	test(`should return "${res}" given "${str}"`, () => {
		expect(trimEnd(str)).toBe(res);
	});
	const res2 = '   abc';
	const str2 = '   abc   ';
	test(`should return "${res2}" given "${str2}"`, () => {
		expect(trimEnd(str2)).toBe(res2);
	});
	const res3 = 'abc';
	const str3 = 'abc123';
	const arr3 = ['123'];
	const par3 = arrayToDecoratedString(arr3);
	test(`should return "${res3}" given "${str3}" and ${par3}`,
		() => {
			expect(trimEnd(str3, arr3)).toBe(res3);
	});
	const res4 = '123abc';
	const str4 = '123abc123';
	const arr4 = ['123'];
	const par4 = arrayToDecoratedString(arr4);
	test(`should return "${res4}" given "${str4}" and ${par4}`,
		() => {
			expect(trimEnd(str4, arr4)).toBe(res4);
	});
});
