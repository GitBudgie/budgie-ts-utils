import { getDirectionOfNumbers } from '../get-direction-of-numbers';

describe('getDirectionOfNumbers', () => {
	test('should return 0 given []', () => {
		expect(getDirectionOfNumbers([])).toBe(0);
	});
	test('should return 0 given [3]', () => {
		expect(getDirectionOfNumbers([3])).toBe(0);
	});
	test('should return 0 given [5, 5]', () => {
		expect(getDirectionOfNumbers([5, 5])).toBe(0);
	});
	test('should return 0 given [Infinity, Infinity]', () => {
		expect(getDirectionOfNumbers([Infinity, Infinity])).toBe(0);
	});
	test('should return 0 given [-Infinity, -Infinity]', () => {
		expect(getDirectionOfNumbers([-Infinity, -Infinity])).toBe(0);
	});
	test('should return > 0 given [7, 8, 64]', () => {
		expect(getDirectionOfNumbers([7, 8, 64])).toBeGreaterThan(0);
	});
	test('should return > 0 given [-64, -9]', () => {
		expect(getDirectionOfNumbers([-64, -9])).toBeGreaterThan(0);
	});
	test('should return > 0 given [0, Infinity]', () => {
		expect(getDirectionOfNumbers([0, Infinity]))
			.toBeGreaterThan(0);
	});
	test('should return < 0 given [9, 8, -64]', () => {
		expect(getDirectionOfNumbers([9, 8, -64])).toBeLessThan(0);
	});
	test('should return < 0 given [-3, -64]', () => {
		expect(getDirectionOfNumbers([-3, -64])).toBeLessThan(0);
	});
	test('should return < 0 given [0, -Infinity]', () => {
		expect(getDirectionOfNumbers([0, -Infinity]))
			.toBeLessThan(0);
	});
});
