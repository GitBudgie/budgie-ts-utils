import { getPadLengthForFoasType } from '../get-pad-length-for-foas-type';

describe('getPadLengthForFoasType', () => {
	test('should return 3 given "ms"', () => {
		expect(getPadLengthForFoasType('ms')).toBe(3);
	});
	test('should return 6 given "us"', () => {
		expect(getPadLengthForFoasType('us')).toBe(6);
	});
	test('should return 9 given "ms"', () => {
		expect(getPadLengthForFoasType('ns')).toBe(9);
	});
	test('should return 0 given "abc"', () => {
		expect(getPadLengthForFoasType('abc')).toBe(0);
	});
	test('should return 0 given ""', () => {
		expect(getPadLengthForFoasType('')).toBe(0);
	});
});
