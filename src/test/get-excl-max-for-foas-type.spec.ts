import { getExclMaxForFoasType } from '../get-excl-max-for-foas-type';

describe('getExclMaxForFoasType', () => {
	test('should return 1000 given "ms"', () => {
		expect(getExclMaxForFoasType('ms')).toBe(1000);
	});
	test('should return 1000000 given "us"', () => {
		expect(getExclMaxForFoasType('us')).toBe(1000000);
	});
	test('should return 1000000000 given "ns"', () => {
		expect(getExclMaxForFoasType('ns')).toBe(1000000000);
	});
	test('should return 0 given "abc"', () => {
		expect(getExclMaxForFoasType('abc')).toBe(0);
	});
	test('should return 0 given ""', () => {
		expect(getExclMaxForFoasType('')).toBe(0);
	});
});
