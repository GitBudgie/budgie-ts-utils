import { isSafeIntLike } from '../is-safe-int-like';

describe('isSafeIntLike', () => {
	test('should return true given 0', () => {
		expect(isSafeIntLike(0)).toBe(true);
	});
	test('should return true given 1234567890', () => {
		expect(isSafeIntLike(1234567890)).toBe(true);
	});
	test('should return true given -1234567890', () => {
		expect(isSafeIntLike(-1234567890)).toBe(true);
	});
	test('should return true given "+123"', () => {
		expect(isSafeIntLike('+123')).toBe(true);
	});
	test('should return true given "-123"', () => {
		expect(isSafeIntLike('-123')).toBe(true);
	});
	test('should return false given 3.14', () => {
		expect(isSafeIntLike(3.14)).toBe(false);
	});
	test('should return false given "3.14"', () => {
		expect(isSafeIntLike('3.14')).toBe(false);
	});
	test('should return false given " 5"', () => {
		expect(isSafeIntLike(' 5')).toBe(false);
	});
	test('should return false given "foo"', () => {
		expect(isSafeIntLike('foo')).toBe(false);
	});
	test('should return false given "foo123"', () => {
		expect(isSafeIntLike('foo123')).toBe(false);
	});
	test('should return false given "123foo"', () => {
		expect(isSafeIntLike('123foo')).toBe(false);
	});
	test('should return true given BigInt(123)', () => {
		expect(isSafeIntLike(BigInt(123))).toBe(true);
	});
	test('should return false given BigInt(9999999999999999)', () => {
		expect(isSafeIntLike(BigInt(9999999999999999))).toBe(false);
	});
	test('should return false given "1e+999"', () => {
		expect(isSafeIntLike('1e+999')).toBe(false);
	});
	test('should return false given undefined', () => {
		expect(isSafeIntLike(undefined)).toBe(false);
	});
	test('should return false given Infinity', () => {
		expect(isSafeIntLike(Infinity)).toBe(false);
	});
	test('should return false given NaN', () => {
		expect(isSafeIntLike(NaN)).toBe(false);
	});
	test('should return false given null', () => {
		expect(isSafeIntLike(null)).toBe(false);
	});
});
