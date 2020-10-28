import { isSet } from '../is-set';

describe('isSet', () => {
	test('should return true given new Set()', () => {
		expect(isSet(new Set())).toBe(true);
	});
	test('should return false given new Map()', () => {
		expect(isSet(new Map())).toBe(false);
	});
	test('should return false given null', () => {
		expect(isSet(null)).toBe(false);
	});
});
