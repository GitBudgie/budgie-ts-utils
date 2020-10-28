import { toTimeObject } from '../to-time-object';

describe('toTimeObject', () => {

	let str = '23:58:59';
	let obj = { hour: 23, minute: 58, second: 59 };
	let res = JSON.stringify(obj);
	test(`should return ${res} given "${str}"`, () => {
		expect(toTimeObject(str)).toMatchObject(obj);
	});

	let str2 = '23:58:59:999';
	let obj2 = { hour: 23, minute: 58, second: 59,
		foas: 999, foasType: '' };
	let res2 = JSON.stringify(obj2);
	test(`should return ${res2} given "${str2}"`, () => {
		expect(toTimeObject(str2)).toMatchObject(obj2);
	});

	let str3 = '01:02:03:004';
	let obj3 = { hour: 1, minute: 2, second: 3, foas: 4, foasType: 'ms' };
	let res3 = JSON.stringify(obj3);
	test(`should return ${res3} given "${str3}", "ms"`, () => {
		expect(toTimeObject(str3, 'ms')).toMatchObject(obj3);
	});

	let str4 = '';
	let obj4 = { hour: 0, minute: 0, second: 0, foas: 0, foasType: '' };
	let res4 = JSON.stringify(obj4);
	test(`should return ${res4} given "${str4}"`, () => {
		expect(toTimeObject(str4)).toMatchObject(obj4);
	});

	let str5 = '01:02:03:1000';
	let obj5 = null;
	let res5 = JSON.stringify(obj5);
	test(`should return ${res5} given "${str5}", "ms"`, () => {
		expect(toTimeObject(str5, 'ms')).toBeNull();
	});

	let str6 = 'abc';
	let obj6 = null;
	let res6 = JSON.stringify(obj6);
	test(`should return ${res6} given "${str6}"`, () => {
		expect(toTimeObject(str6)).toBeNull();
	});
});
