import { isFunction } from '../is-function';

const arrowFunc = () => { return true; }

function regularFunc() { return true; }

describe('isFunction', () => {
	test('should return true given a regular function', () => {
		expect(isFunction(regularFunc)).toBe(true);
	});
	test('should return true given an arrow function', () => {
		expect(isFunction(arrowFunc)).toBe(true);
	});
	test('should return false given {}', () => {
		expect(isFunction({})).toBe(false);
	});
	test('should return false given []', () => {
		expect(isFunction([])).toBe(false);
	});
	test('should return false given "hello"', () => {
		expect(isFunction('hello')).toBe(false);
	});
	test('should return false given null', () => {
		expect(isFunction(null)).toBe(false);
	});
});
