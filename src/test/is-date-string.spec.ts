import { isDateString } from '../is-date-string';

describe('isDateString', () => {

	const str = '1999-12-31';
	test(`should return true given "${str}"`, () => {
		expect(isDateString(str)).toBe(true);
	});

	const str2 = '-1:1:1';
	test(`should return true given "${str2}, ":""`, () => {
		expect(isDateString(str2, ':')).toBe(true);
	});

	const str3 = ' 1999-12-31 ';
	test(`should return false given "${str3}"`, () => {
		expect(isDateString(str3)).toBe(false);
	});

	const str4 = 'today';
	test(`should return false given "${str4}"`, () => {
		expect(isDateString(str4)).toBe(false);
	});
});
