import { timeObjectToString } from '../time-object-to-string';

describe('timeObjectToString', () => {

	const obj = { hour: 23, minute: 58, second: 59 };
	const str = JSON.stringify(obj);
	test(`should return "23:58:59" given ${str}`, () => {
		expect(timeObjectToString(obj)).toBe('23:58:59');
	});

	const obj2 = { hour: 23, minute: 58, second: 59, foas: 999 };
	const str2 = JSON.stringify(obj2);
	test(`should return "23:58:59" given ${str2}`, () => {
		expect(timeObjectToString(obj2)).toBe('23:58:59');
	});

	const obj3 = { hour: 23, minute: 58, second: 59,
		foas: 999, foasType: 'ms' };
	const str3 = JSON.stringify(obj3);
	test(`should return "23:58:59:999" given ${str3}`, () => {
		expect(timeObjectToString(obj3)).toBe('23:58:59:999');
	});

	const obj4 = { hour: 24, minute: 60, second: 61,
		foas: 1000, foasType: 'ms' };
	const str4 = JSON.stringify(obj4);
	test(`should return "24:60:61:1000" given ${str4}`, () => {
		expect(timeObjectToString(obj4)).toBe('24:60:61:1000');
	});

	const obj5 = {};
	const str5 = JSON.stringify(obj5);
	test(`should return "00:00:00" given ${str5}`, () => {
		expect(timeObjectToString(obj5)).toBe('00:00:00');
	});
});
