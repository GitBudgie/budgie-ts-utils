import { isMap } from '../is-map';

describe('isMap', () => {
	test('should return true given new Map()', () => {
		expect(isMap(new Map())).toBe(true);
	});
	test('should return false given new Set()', () => {
		expect(isMap(new Set())).toBe(false);
	});
	test('should return false given null', () => {
		expect(isMap(null)).toBe(false);
	});
});
