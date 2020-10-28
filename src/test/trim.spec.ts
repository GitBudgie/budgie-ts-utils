import { arrayToDecoratedString } from '../array-to-decorated-string';
import { trim } from '../trim';

describe('trim', () => {
	test('should return "" given ""', () => {
		expect(trim('')).toBe('');
	});
	const res = 'abc';
	const str = 'abc';
	test(`should return "${res}" given "${str}"`, () => {
		expect(trim(str)).toBe(res);
	});
	const str2 = ' abc ';
	test(`should return "${res}" given "${str2}"`, () => {
		expect(trim(str2)).toBe(res);
	});
	const str3 = '123abc123';
	const arr3 = ['123'];
	const par3 = arrayToDecoratedString(arr3);
	test(`should return "${res}" given "${str3}" and ${par3}`, () => {
		expect(trim(str3, arr3)).toBe(res);
	});
});
