import { isFiniteNumberLike } from '../is-finite-number-like';

describe('isFiniteNumberLike', () => {
	test('should return true given 0', () => {
		expect(isFiniteNumberLike(0)).toBe(true);
	});
	test('should return true given 1234567890', () => {
		expect(isFiniteNumberLike(1234567890)).toBe(true);
	});
	test('should return true given -1234567890', () => {
		expect(isFiniteNumberLike(-1234567890)).toBe(true);
	});
	test('should return true given -0.01', () => {
		expect(isFiniteNumberLike(-0.01)).toBe(true);
	});
	test('should return true given 0.01', () => {
		expect(isFiniteNumberLike(0.01)).toBe(true);
	});
	test('should return true given "+123"', () => {
		expect(isFiniteNumberLike('+123')).toBe(true);
	});
	test('should return true given "-123"', () => {
		expect(isFiniteNumberLike('-123')).toBe(true);
	});
	test('should return true given "+123.456"', () => {
		expect(isFiniteNumberLike('+123.456')).toBe(true);
	});
	test('should return true given "-123.456"', () => {
		expect(isFiniteNumberLike('-123.456')).toBe(true);
	});
	test('should return true given BigInt(123)', () => {
		expect(isFiniteNumberLike(BigInt(123))).toBe(true);
	});
	test('should return true given BigInt(9999999999999999)', () => {
		expect(isFiniteNumberLike(BigInt(9999999999999999)))
			.toBe(true);
	});
	test('should return false given "1e+999"', () => {
		expect(isFiniteNumberLike('1e+999')).toBe(false);
	});
	test('should return false given " 5"', () => {
		expect(isFiniteNumberLike(' 5')).toBe(false);
	});
	test('should return false given "foo"', () => {
		expect(isFiniteNumberLike('foo')).toBe(false);
	});
	test('should return false given "foo123"', () => {
		expect(isFiniteNumberLike('foo123')).toBe(false);
	});
	test('should return false given "123foo"', () => {
		expect(isFiniteNumberLike('123foo')).toBe(false);
	});
	test('should return false given undefined', () => {
		expect(isFiniteNumberLike(undefined)).toBe(false);
	});
	test('should return false given Infinity', () => {
		expect(isFiniteNumberLike(Infinity)).toBe(false);
	});
	test('should return false given NaN', () => {
		expect(isFiniteNumberLike(NaN)).toBe(false);
	});
	test('should return false given null', () => {
		expect(isFiniteNumberLike(null)).toBe(false);
	});
});
