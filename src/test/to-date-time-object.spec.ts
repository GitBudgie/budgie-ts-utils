import { toDateTimeObject } from '../to-date-time-object';

describe('toDateTimeObject', () => {

	let str = '1999-12-31';
	let obj = { year: 1999, month: 12, day: 31,
		hour: 0, minute: 0, second: 0, foas: 0, foasType: '' };
	let res = JSON.stringify(obj);
	test(`should return ${res} given "${str}"`, () => {
		expect(toDateTimeObject(str)).toMatchObject(obj);
	});

	let str2 = '1999-12-31 23:59:59:999';
	let obj2 = { year: 1999, month: 12, day: 31,
		hour: 23, minute: 59, second: 59, foas: 999, foasType: 'ms' };
	let res2 = JSON.stringify(obj2);
	test(`should return ${res2} given "${str2}", "ms"`, () => {
		expect(toDateTimeObject(str2, 'ms')).toMatchObject(obj2);
	});

	let str3 = 'today now';
	let obj3 = null;
	let res3 = JSON.stringify(obj3);
	test(`should return ${res3} given "${str3}"`, () => {
		expect(toDateTimeObject(str3)).toBeNull();
	});
});
