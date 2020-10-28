import { getRandomSafeIntIncl } from '../get-random-safe-int-incl';

// Testing a function - that returns a random value - is fascinating.

describe('getRandomSafeIntIncl', () => {
	test('should return 0 given NaN, NaN', () => {
		expect(getRandomSafeIntIncl(NaN, NaN)).toBe(0);
	});
	test('should return 0 given 0, 0', () => {
		expect(getRandomSafeIntIncl(0, 0)).toBe(0);
	});
	test('should return -1 given -1, -1', () => {
		expect(getRandomSafeIntIncl(-1, -1)).toBe(-1);
	});
	test('should return 1 given 1, 1', () => {
		expect(getRandomSafeIntIncl(1, 1)).toBe(1);
	});
	test('should return < 0 given -9, -1', () => {
		expect(getRandomSafeIntIncl(-9, -1)).toBeLessThan(0);
	});
	test('should return > 0 given 1, 9', () => {
		expect(getRandomSafeIntIncl(1, 9)).toBeGreaterThan(0);
	});
});
