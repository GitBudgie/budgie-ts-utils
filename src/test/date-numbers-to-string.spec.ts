import { dateNumbersToString } from '../date-numbers-to-string';

describe('dateNumbersToString', () => {
	test('should return "1999-12-31" given 1999, 12, 31', () => {
		expect(dateNumbersToString(1999, 12, 31)).toBe('1999-12-31');
	});
	test('should return "0000-01-02" given 0, 1, 2', () => {
		expect(dateNumbersToString(0, 1, 2)).toBe('0000-01-02');
	});
	test('should return "0000-00-00" given 0, 0, 0', () => {
		expect(dateNumbersToString(0, 0, 0)).toBe('0000-00-00');
	});
	test('should return "123456-777-888" given 123456, 777, 888', () => {
		expect(dateNumbersToString(123456, 777, 888))
			.toBe('123456-777-888');
	});
	test('should return "-0001:02:03" given -1, 2, 3, ":"', () => {
		expect(dateNumbersToString(-1, 2, 3, ':'))
			.toBe('-0001:02:03');
	});
	test('should return "-0001:02:03" given -1, -2, -3, ":"', () => {
		expect(dateNumbersToString(-1, -2, -3, ':'))
			.toBe('-0001:02:03');
	});
});
