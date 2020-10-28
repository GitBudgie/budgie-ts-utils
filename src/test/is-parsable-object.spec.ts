import { isParsableObject } from '../is-parsable-object';

describe('isParsableObject', () => {
	test('should return true given ""', () => {
		expect(isParsableObject('')).toBe(true);
	});
	test('should return true given 0', () => {
		expect(isParsableObject(0)).toBe(true);
	});
	test('should return true given BigInt(0)', () => {
		expect(isParsableObject(BigInt(0))).toBe(true);
	});
	test('should return false given {}', () => {
		expect(isParsableObject({})).toBe(false);
	});
	test('should return false given []', () => {
		expect(isParsableObject([])).toBe(false);
	});
	test('should return false given a new Date', () => {
		expect(isParsableObject(new Date())).toBe(false);
	});
	test('should return false given null', () => {
		expect(isParsableObject(null)).toBe(false);
	});
});
