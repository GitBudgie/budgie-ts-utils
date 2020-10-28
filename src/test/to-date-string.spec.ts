import { toDateString } from '../to-date-string';

describe('toDateString', () => {

	let str = '1999-12-31';
	let res = '1999-12-31';
	test(`should return "${res}" given "${str}"`, () => {
		expect(toDateString(str)).toBe(res);
	});

	let str2 = '1-1-1';
	let res2 = '0001-01-01';
	test(`should return "${res2}" given "${str2}"`, () => {
		expect(toDateString(str2)).toBe(res2);
	});

	let str3 = '0-0-0';
	let res3 = 'err';
	test(`should return "${res3}" given "${str3}", "err"`, () => {
		expect(toDateString(str3, 'err')).toBe(res3);
	});
});
