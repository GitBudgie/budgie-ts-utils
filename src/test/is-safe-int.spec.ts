import { isSafeInt } from '../is-safe-int';

describe('isSafeInt', () => {
	test('should return true given 0', () => {
		expect(isSafeInt(0)).toBe(true);
	});
	test('should return true given 9007199254740991', () => {
		expect(isSafeInt(9007199254740991)).toBe(true);
	});
	test('should return true given -9007199254740991', () => {
		expect(isSafeInt(-9007199254740991)).toBe(true);
	});
	test('should return false given 9007199254740992', () => {
		expect(isSafeInt(9007199254740992)).toBe(false);
	});
	test('should return false given -9007199254740992', () => {
		expect(isSafeInt(-9007199254740992)).toBe(false);
	});
	test('should return false given "123"', () => {
		expect(isSafeInt('123')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isSafeInt(null)).toBe(false);
	});
});
