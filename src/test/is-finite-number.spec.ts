import { isFiniteNumber } from '../is-finite-number';

describe('isFiniteNumber', () => {
	test('should return true given 0', () => {
		expect(isFiniteNumber(0)).toBe(true);
	});
	test('should return true given 13371337', () => {
		expect(isFiniteNumber(13371337)).toBe(true);
	});
	test('should return true given -6345.657', () => {
		expect(isFiniteNumber(-6345.657)).toBe(true);
	});
	test('should return true given 9007199254740992', () => {
		expect(isFiniteNumber(9007199254740992)).toBe(true);
	});
	test('should return true given -9007199254740992', () => {
		expect(isFiniteNumber(-9007199254740992)).toBe(true);
	});
	test('should return false given Infinity', () => {
		expect(isFiniteNumber(Infinity)).toBe(false);
	});
	test('should return false given -Infinity', () => {
		expect(isFiniteNumber(-Infinity)).toBe(false);
	});
	test('should return false given NaN', () => {
		expect(isFiniteNumber(NaN)).toBe(false);
	});
	test('should return false given "1234567890"', () => {
		expect(isFiniteNumber('1234567890')).toBe(false);
	});
});
