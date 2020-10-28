import { isDateTimeString } from '../is-date-time-string';

describe('isDateTimeString', () => {

	const str = '1999-12-31';
	test(`should return true given "${str}"`, () => {
		expect(isDateTimeString(str)).toBe(true);
	});

	const str2 = '-123:2:09 23';
	test(`should return true given "${str2}", "", ":"`, () => {
		expect(isDateTimeString(str2, '', ':')).toBe(true);
	});

	const str3 = '1999-12-31 23:';
	test(`should return true given "${str3}"`, () => {
		expect(isDateTimeString(str3)).toBe(true);
	});

	const str4 = '1999-12-31 23:59';
	test(`should return true given "${str4}"`, () => {
		expect(isDateTimeString(str4)).toBe(true);
	});

	const str5 = '1999-12-31 23:59:59';
	test(`should return true given "${str5}"`, () => {
		expect(isDateTimeString(str5)).toBe(true);
	});

	const str6 = '1999-12-31 23:59:59:999999999999';
	test(`should return true given "${str6}"`, () => {
		expect(isDateTimeString(str6)).toBe(true);
	});

	const str7 = '1999-12-31 23:59:59:999';
	test(`should return true given "${str7}", "ms"`, () => {
		expect(isDateTimeString(str7, 'ms')).toBe(true);
	});

	const str8 = '1999-12-31 23:59:59:999999';
	test(`should return true given "${str8}", "us"`, () => {
		expect(isDateTimeString(str8, 'us')).toBe(true);
	});

	const str9 = '1999-12-31 23:59:59:999999';
	test(`should return false given "${str9}", "ms"`, () => {
		expect(isDateTimeString(str9, 'ms')).toBe(false);
	});

	const str10 = '-1:-1:-1 -1:-1:-1:-1';
	test(`should return false given "${str10}", 'ms', ":", " ", ":"`,
		() => {
			expect(isDateTimeString(str10, 'ms', ':', ' ', ':'))
				.toBe(false);
	});

	const str11 = ' 1999-12-31 ';
	test(`should return false given "${str11}"`, () => {
		expect(isDateTimeString(str11)).toBe(false);
	});

	const str12 = '1999-12-32';
	test(`should return false given "${str12}"`, () => {
		expect(isDateTimeString(str12)).toBe(false);
	});

	const str13 = 'today now';
	test(`should return false given "${str13}"`, () => {
		expect(isDateTimeString(str13)).toBe(false);
	});
});
