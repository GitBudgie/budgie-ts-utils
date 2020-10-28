import { toNonNegativeSafeInt } from '../to-non-negative-safe-int';

describe('toNonNegativeSafeInt', () => {
	test('should return 0 given 0', () => {
		expect(toNonNegativeSafeInt(0)).toBe(0);
	});
	test('should return 0 given -123', () => {
		expect(toNonNegativeSafeInt(-123)).toBe(0);
	});
	test('should return 0 given "-1337"', () => {
		expect(toNonNegativeSafeInt('-1337')).toBe(0);
	});
	test('should return 3 given "3.01"', () => {
		expect(toNonNegativeSafeInt('3.01')).toBe(3);
	});
	test('should return 5 given 5.123', () => {
		expect(toNonNegativeSafeInt(5.123)).toBe(5);
	});
	test('should return 9007199254740991 given 9007199254740991', () => {
		expect(toNonNegativeSafeInt(9007199254740991))
			.toBe(9007199254740991);
	});
	test('should return 0 given 9007199254740992', () => {
		expect(toNonNegativeSafeInt(9007199254740992)).toBe(0);
	});
});
