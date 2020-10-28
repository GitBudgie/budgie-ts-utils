import { trimQuotes } from '../trim-quotes';

describe('trimQuotes', () => {
	test('should return "" given ""', () => {
		expect(trimQuotes('')).toBe('');
	});
	const res = 'hello';
	const str = 'hello';
	test(`should return "${res}" given "${str}"`, () => {
		expect(trimQuotes(str)).toBe(res);
	});
	const str2 = "'hello'";
	test(`should return "${res}" given "${str2}"`, () => {
		expect(trimQuotes(str2)).toBe(res);
	});
	const str3 = '"hello"';
	test(`should return "${res}" given '${str3}'`, () => {
		expect(trimQuotes(str3)).toBe(res);
	});
	const str4 = '`hello`';
	test(`should return "${res}" given "${str4}"`, () => {
		expect(trimQuotes(str4)).toBe(res);
	});
	const str5 = '´hello´';
	test(`should return "${res}" given "${str5}"`, () => {
		expect(trimQuotes(str5)).toBe(res);
	});
	const str6 = '\'´hello´\'';
	test(`should return "${res}" given "${str6}"`, () => {
		expect(trimQuotes(str6)).toBe(res);
	});
});
