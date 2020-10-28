import { isDate } from '../is-date';

describe('isDate', () => {
	test('should return true given a new Date', () => {
		expect(isDate(new Date())).toBe(true);
	});
	test('should return false given an invalid Date', () => {
		expect(isDate(new Date(''))).toBe(false);
	});
	test('should return false given null', () => {
		expect(isDate(null)).toBe(false);
	});
});
