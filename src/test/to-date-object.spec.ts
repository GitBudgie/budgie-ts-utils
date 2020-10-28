import { toDateObject } from '../to-date-object';

describe('toDateObject', () => {

	let str = '1999-12-31';
	let obj = { year: 1999, month: 12, day: 31 };
	let res = JSON.stringify(obj);
	test(`should return ${res} given "${str}"`, () => {
		expect(toDateObject(str)).toMatchObject(obj);
	});

	let str2 = '-1337:12:31';
	let obj2 = { year: -1337, month: 12, day: 31 };
	let res2 = JSON.stringify(obj2);
	test(`should return ${res2} given "${str2}", ":"`, () => {
		expect(toDateObject(str2, ':')).toMatchObject(obj2);
	});

	let str3 = '0-0-0';
	let obj3 = null;
	let res3 = JSON.stringify(obj3);
	test(`should return ${res3} given "${str3}"`, () => {
		expect(toDateObject(str3)).toBeNull();
	});

	let str4 = '';
	let obj4 = null;
	let res4 = JSON.stringify(obj4);
	test(`should return ${res4} given "${str4}"`, () => {
		expect(toDateObject(str4)).toBeNull();
	});
});
