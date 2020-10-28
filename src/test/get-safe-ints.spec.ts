import { getSafeInts } from '../get-safe-ints';

describe('getSafeInts', () => {
	test('should return [] given []', () => {
		expect(getSafeInts([])).toEqual([]);
	});
	test('should return [] given [NaN, Infinity, "foo"]', () => {
		expect(getSafeInts([NaN, Infinity, 'foo'])).toEqual([]);
	});
	test('should return [3, -5] given [NaN, 3, "foo", -5, 3.14]', () => {
		expect(getSafeInts([NaN, 3, 'foo', -5, 3.14]))
			.toEqual([3, -5]);
	});
});
