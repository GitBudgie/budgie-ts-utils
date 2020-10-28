import { upFirstChar } from '../up-first-char';

describe('upFirstChar', () => {
	test('should return "" given ""', () => {
		expect(upFirstChar('')).toBe('');
	});
	const str = 'hello';
	const res = 'Hello';
	test(`should return "${res}" given "${str}"`, () => {
		expect(upFirstChar(str)).toBe(res);
	});
	const str2 = 'a sentence.';
	const res2 = 'A sentence.';
	test(`should return "${res2}" given "${str2}"`, () => {
		expect(upFirstChar(str2)).toBe(res2);
	});
});
