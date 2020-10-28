import { getFoasDefinitionByType } from '../get-foas-definition-by-type';

describe('getFoasDefinitionByType', () => {
	test('should return an object given "ms"', () => {
		expect(getFoasDefinitionByType('ms')).toBeTruthy();
	});
	test('should return an object given "us"', () => {
		expect(getFoasDefinitionByType('us')).toBeTruthy();
	});
	test('should return an object given "ns"', () => {
		expect(getFoasDefinitionByType('ns')).toBeTruthy();
	});
	test('should return null given "abc"', () => {
		expect(getFoasDefinitionByType('abc')).toBe(null);
	});
	test('should return null given ""', () => {
		expect(getFoasDefinitionByType('')).toBe(null);
	});
});
