import { clone } from '../clone';

describe('clone', () => {
	const arr: any[] = [1, 2, 'a', 'b'];
	test('should return an array given an array', () => {
		expect(clone(arr)).toMatchObject(arr);
	});
	test('should return a boolean given a boolean', () => {
		expect(clone(true)).toBe(true);
	});
	const big = BigInt(0);
	test('should return a BigInt given a BigInt', () => {
		expect(clone(big)).toBe(big);
	});
	const date = new Date();
	test('should return a Date given a Date', () => {
		expect(clone(date)).toMatchObject(date);
	});
	const map = new Map();
	test('should return a Map given a Map', () => {
		expect(clone(map)).toMatchObject(map);
	});
	test('should return a number given a number', () => {
		expect(clone(0)).toBe(0);
	});
	const obj = { id: 123, name: "John" };
	test('should return an object given an object', () => {
		expect(clone(obj)).toMatchObject(obj);
	});
	const se = new Set();
	test('should return a Set given a Set', () => {
		expect(clone(se)).toMatchObject(se);
	});
	const str = 'abc';
	test('should return a string given a string', () => {
		expect(clone(str)).toBe(str);
	});
	test('should return null given a Symbol', () => {
		expect(clone(Symbol())).toBe(null);
	});
});
