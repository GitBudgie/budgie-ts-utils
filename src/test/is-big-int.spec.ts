import { isBigInt } from '../is-big-int';

describe('isBigInt', () => {
	test('should return true given BigInt(0)', () => {
		expect(isBigInt(BigInt(0))).toBe(true);
	});
	test('should return false given 0', () => {
		expect(isBigInt(0)).toBe(false);
	});
	test('should return false given "0"', () => {
		expect(isBigInt('0')).toBe(false);
	});
	test('should return false given Infinity', () => {
		expect(isBigInt(Infinity)).toBe(false);
	});
	test('should return false given NaN', () => {
		expect(isBigInt(NaN)).toBe(false);
	});
	test('should return false given null', () => {
		expect(isBigInt(null)).toBe(false);
	});
});
