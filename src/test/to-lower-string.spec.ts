import { toLowerString } from '../to-lower-string';

describe('toLowerString', () => {
	test('should return "" given ""', () => {
		expect(toLowerString(undefined)).toBe('');
	});
	test('should return "abc123" given "ABC 123"', () => {
		expect(toLowerString('ABC 123')).toBe('abc 123');
	});
});
