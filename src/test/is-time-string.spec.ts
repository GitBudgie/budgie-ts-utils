import { isTimeString } from '../is-time-string';

describe('isTimeString', () => {

	const str = '';
	test(`should return true given ""`, () => {
		expect(isTimeString(str)).toBe(true);
	});

	const str2 = '0';
	test(`should return true given "${str2}"`, () => {
		expect(isTimeString(str2)).toBe(true);
	});

	const str3 = '00:00:00';
	test(`should return true given "${str3}"`, () => {
		expect(isTimeString(str3)).toBe(true);
	});

	const str4 = '23:59:59';
	test(`should return true given "${str4}`, () => {
		expect(isTimeString(str4)).toBe(true);
	});

	const str5 = '23:59:59:999999999999';
	test(`should return true given "${str5}`, () => {
		expect(isTimeString(str5)).toBe(true);
	});

	const str6 = ' 23:59:59 ';
	test(`should return false given "${str6}`, () => {
		expect(isTimeString(str6)).toBe(false);
	});

	const str7 = '24:60:60:1000';
	test(`should return false given "${str7}", "ms"`, () => {
		expect(isTimeString(str7, 'ms')).toBe(false);
	});

	const str8 = '23:59:59:999999999999';
	test(`should return false given "${str8}, "ms"`, () => {
		expect(isTimeString(str8, 'ms')).toBe(false);
	});

	const str9 = '-0:-0:-0';
	test(`should return false given "${str9}, "ms"`, () => {
		expect(isTimeString(str9, 'ms')).toBe(false);
	});

	const str10 = 'now';
	test(`should return false given "${str10}"`, () => {
		expect(isTimeString(str10)).toBe(false);
	});
});
