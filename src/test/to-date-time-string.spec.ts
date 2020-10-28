import { toDateTimeString } from '../to-date-time-string';

describe('toDateTimeString', () => {

	let str = '1999-12-31';
	let res = '1999-12-31 00:00:00';
	test(`should return "${res}" given "${str}"`, () => {
		expect(toDateTimeString(str)).toBe(res);
	});

	let str2 = '1-1-1 23:59:59';
	let res2 = '0001-01-01 23:59:59';
	test(`should return "${res2}" given "${str2}"`, () => {
		expect(toDateTimeString(str2)).toBe(res2);
	});

	let str3 = '-1337:12:31 1:2:3:4';
	let res3 = '-1337:12:31 01:02:03:004';
	test(`should return "${res3}" given "${str3}", "ms", "err", ":"`,
		() => {
			expect(toDateTimeString(str3, 'ms', "err", ':'))
				.toBe(res3);
	});

	let str4 = '0-0-0';
	let res4 = 'err';
	test(`should return "${res4}" given "${str4}", "", "err"`, () => {
		expect(toDateTimeString(str4, '', 'err')).toBe(res4);
	});
});
