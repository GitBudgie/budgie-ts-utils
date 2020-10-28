import { toTrimmedString } from '../to-trimmed-string';

describe('toTrimmedString', () => {
	test('should return "" given ""', () => {
		expect(toTrimmedString('')).toBe('');
	});
	test('should return "" given "          "', () => {
		expect(toTrimmedString('')).toBe('');
	});
	test('should return "hello" given "   hello   "', () => {
		expect(toTrimmedString('   hello   ')).toBe('hello');
	});
	test('should return "123" given 123', () => {
		expect(toTrimmedString(123)).toBe('123');
	});
	test('should return "" given null', () => {
		expect(toTrimmedString(null)).toBe('');
	});
});
