import { toTimeString } from '../to-time-string';

describe('toTimeString', () => {

	let str = '23:59:59';
	let res = '23:59:59';
	test(`should return "${res}" given "${str}"`, () => {
		expect(toTimeString(str)).toBe(res);
	});

	let str2 = '0:1:2:4';
	let res2 = '00:01:02';
	test(`should return "${res2}" given "${str2}"`, () => {
		expect(toTimeString(str2)).toBe(res2);
	});

	let str3 = '0:1:2:4';
	let res3 = '00:01:02:004';
	test(`should return "${res3}" given "${str3}", "ms"`, () => {
		expect(toTimeString(str3, 'ms')).toBe(res3);
	});

	let str4 = '0:1:2:4';
	let res4 = '00:01:02:000004';
	test(`should return "${res4}" given "${str4}", "us"`, () => {
		expect(toTimeString(str4, 'us')).toBe(res4);
	});

	let str5 = '0:1:2:4';
	let res5 = '00:01:02:000000004';
	test(`should return "${res5}" given "${str5}", "ns"`, () => {
		expect(toTimeString(str5, 'ns')).toBe(res5);
	});

	let str6 = '-1:-2:-3';
	let res6 = '00:00:00';
	test(`should return "${res6}" given "${str6}"`, () => {
		expect(toTimeString(str6)).toBe(res6);
	});

	let str7 = 'now';
	let res7 = 'err';
	test(`should return "${res7}" given "${str7}", "", "err"`, () => {
		expect(toTimeString(str7, '', 'err')).toBe(res7);
	});
});
