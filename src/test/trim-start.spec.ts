import { arrayToDecoratedString } from '../array-to-decorated-string';
import { trimStart } from '../trim-start';

describe('trimStart', () => {
	test('should return "" given ""', () => {
		expect(trimStart('')).toBe('');
	});
	const res = 'abc';
	const str = '   abc';
	test(`should return "${res}" given "${str}"`, () => {
		expect(trimStart(str)).toBe(res);
	});
	const res2 = 'abc   ';
	const str2 = '   abc   ';
	test(`should return "${res2}" given "${str2}"`, () => {
		expect(trimStart(str2)).toBe(res2);
	});
	const res3 = 'abc';
	const str3 = '123abc';
	const arr3 = ['123'];
	const par3 = arrayToDecoratedString(arr3);
	test(`should return "${res3}" given "${str3}" and ${par3}`,
		() => {
			expect(trimStart(str3, arr3)).toBe(res3);
	});
	const res4 = 'abc123';
	const str4 = '123abc123';
	const arr4 = ['123'];
	const par4 = arrayToDecoratedString(arr4);
	test(`should return "${res4}" given "${str4}" and ${par4}`,
		() => {
			expect(trimStart(str4, arr4)).toBe(res4);
	});
});
