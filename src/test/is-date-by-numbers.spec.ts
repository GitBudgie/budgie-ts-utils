import { isDateByNumbers } from '../is-date-by-numbers';

describe('isDateByNumbers', () => {
	test('should return true given 0, 1, 1', () => {
		expect(isDateByNumbers(0, 1, 1)).toBe(true);
	});
	test('should return true given -1, 1, 1', () => {
		expect(isDateByNumbers(-1, 1, 1)).toBe(true);
	});
	test('should return true given 1999, 12, 31', () => {
		expect(isDateByNumbers(1999, 12, 31)).toBe(true);
	});
	test('should return false given 0, -1, 1', () => {
		expect(isDateByNumbers(0, -1, 1)).toBe(false);
	});
	test('should return false given 0, 1, -1', () => {
		expect(isDateByNumbers(0, 1, -1)).toBe(false);
	});
	test('should return false given 1999, 12, 32', () => {
		expect(isDateByNumbers(1999, 12, 32)).toBe(false);
	});
	test('should return false given 1999, 13, 31', () => {
		expect(isDateByNumbers(1999, 13, 31)).toBe(false);
	});
});
