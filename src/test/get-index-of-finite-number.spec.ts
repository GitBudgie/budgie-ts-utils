import {
	getIndexOfFiniteNumber
} from '../get-index-of-finite-number';

describe('getIndexOfFiniteNumber', () => {
	test('should return 0 given [0, 1, 2]', () => {
		expect(getIndexOfFiniteNumber([0, 1, 2])).toBe(0);
	});
	test('should return 1 given [NaN, 1.5, 2]', () => {
		expect(getIndexOfFiniteNumber([NaN, 1, 2])).toBe(1);
	});
	test('should return 2 given [NaN, Infinity, 2]', () => {
		expect(getIndexOfFiniteNumber([NaN, Infinity, 2])).toBe(2);
	});
	test('should return 1 given [NaN, -123, 456, NaN]', () => {
		expect(getIndexOfFiniteNumber([NaN, -123, 456, NaN])).toBe(1);
	});
	test('should return 3 given [0, NaN, NaN, 123], 1', () => {
		expect(getIndexOfFiniteNumber([0, NaN, NaN, 123], 1)).toBe(3);
	});
	test('should return -1 given [NaN, "abc"]', () => {
		expect(getIndexOfFiniteNumber([NaN, 'abc'])).toBe(-1);
	});
	test('should return -1 given [0, 1], 2', () => {
		expect(getIndexOfFiniteNumber([0, 1], 2)).toBe(-1);
	});
	test('should return -1 given [0, 1], -2', () => {
		expect(getIndexOfFiniteNumber([0, 1], -2)).toBe(-1);
	});
	test('should return -1 given []', () => {
		expect(getIndexOfFiniteNumber([])).toBe(-1);
	});
});
