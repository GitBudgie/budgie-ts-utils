import { isSymbol } from '../is-symbol';

describe('isSymbol', () => {
	test('should return true given Symbol()', () => {
		expect(isSymbol(Symbol())).toBe(true);
	});
	test('should return false given "abc"', () => {
		expect(isSymbol('abc')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isSymbol(null)).toBe(false);
	});
	test('should return false given 0', () => {
		expect(isSymbol(0)).toBe(false);
	});
});
