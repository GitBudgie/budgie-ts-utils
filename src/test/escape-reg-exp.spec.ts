import { escapeRegExp } from '../escape-reg-exp';

describe('escapeRegExp', () => {
	test('should return "" given ""', () => {
		expect(escapeRegExp('')).toBe('');
	});
	const str = 'Abc123';
	test(`should return "${str}" given "${str}"`, () => {
		expect(escapeRegExp(str)).toBe(str);
	});
	const str2 = '-\\^$*+?.()|[]{}';
	const res2 = '\\-\\\\\\^\\$\\*\\+\\?\\.\\(\\)\\|\\[\\]\\{\\}';
	test(`should return "${res2}" given "${str2}"`, () => {
		expect(escapeRegExp(str2)).toBe(res2);
	});
});
