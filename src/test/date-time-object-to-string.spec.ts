import { dateTimeObjectToString } from '../date-time-object-to-string';

describe('dateTimeObjectToString', () => {

	const obj = {
		year: 1999, month: 12, day: 31,
		hour: 23, minute: 59, second: 59
	};
	const str = JSON.stringify(obj);
	test(`should return "1999-12-31 23:59:59" given ${str}`, () => {
		expect(dateTimeObjectToString(obj))
			.toBe('1999-12-31 23:59:59');
	});

	const obj2 = {
		year: 1999, month: 12, day: 31,
		hour: 23, minute: 59, second: 59,
		foas: 999, foasType: 'ms'
	};
	const str2 = JSON.stringify(obj2);
	test(`should return "1999-12-31 23:59:59:999" given ${str2}`, () => {
		expect(dateTimeObjectToString(obj2))
			.toBe('1999-12-31 23:59:59:999');
	});

	const obj3 = {
		year: 1999, month: 12, day: 31,
		hour: 23, minute: 59, second: 59,
		foas: 999999999, foasType: 'ns'
	};
	const str3 = JSON.stringify(obj3);
	test(`should return "1999-12-31 23:59:59:999999999" given ${str3}`,
		() => {
			expect(dateTimeObjectToString(obj3))
				.toBe('1999-12-31 23:59:59:999999999');
	});

	const obj4 = {
		year: -1999, month: -12, day: -31,
		hour: -23, minute: -59, second: -59,
		foas: -999, foasType: '-ms'
	};
	const str4 = JSON.stringify(obj4);
	test(`should return "-1999-12-31 23:59:59:999" given ${str4}`, () => {
		expect(dateTimeObjectToString(obj4))
			.toBe('-1999-12-31 23:59:59:999');
	});

	const obj5 = {};
	const str5 = JSON.stringify(obj5);
	test(`should return "0000-00-00 00:00:00" given ${str5}`, () => {
		expect(dateTimeObjectToString(obj5))
			.toBe('0000-00-00 00:00:00');
	});
});
