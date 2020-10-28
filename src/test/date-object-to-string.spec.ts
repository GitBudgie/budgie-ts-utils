import { dateObjectToString } from '../date-object-to-string';

describe('dateObjectToString', () => {

	const obj = { year: 1999, month: 12, day: 31 };
	const str = JSON.stringify(obj);
	test(`should return "1999-12-31" given ${str}`, () => {
		expect(dateObjectToString(obj)).toBe('1999-12-31');
	});

	const obj2 = { year: -2525, month: 11, day: 30 };
	const str2 = JSON.stringify(obj2);
	test(`should return "-2525-11-30" given ${str2}`, () => {
		expect(dateObjectToString(obj2)).toBe('-2525-11-30');
	});

	const obj3 = { day: 20 };
	const str3 = JSON.stringify(obj3);
	test(`should return "0000-00-20" given ${str3}`, () => {
		expect(dateObjectToString(obj3)).toBe('0000-00-20');
	});

	const obj4 = {};
	const str4 = JSON.stringify(obj4);
	test(`should return "0000-00-00" given ${str4}`, () => {
		expect(dateObjectToString(obj4)).toBe('0000-00-00');
	});

});
