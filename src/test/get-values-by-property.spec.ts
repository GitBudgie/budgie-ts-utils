import { getValuesByProperty } from '../get-values-by-property';

describe('getValuesByProperty', () => {

	const testObj1 = { id: 1, name: 'One' };
	const testObj2 = { id: 2, name: 'Two' };
	const testObj3 = { id: 3, name: 'Three' };
	const testObj4 = { xd: 4, name: 'Four' };

	const testObjs = [testObj1, testObj2, testObj3, testObj4];

	test('should return [1, 2, 3] given "id", test objects', () => {
		expect(getValuesByProperty('id', testObjs))
			.toEqual([1, 2, 3]);
	});
	test('should return ["One", "Two", "Three", "Four"]' +
		' given "name", test objects', () => {
		expect(getValuesByProperty('name', testObjs))
			.toEqual(['One', 'Two', 'Three', 'Four']);
	});
	test('should return [4] given "xd", test objects', () => {
		expect(getValuesByProperty('xd', testObjs)).toEqual([4]);
	});
	test('should return [] given "score", test objects', () => {
		expect(getValuesByProperty('score', testObjs)).toEqual([]);
	});
	test('should return [] given "", test objects', () => {
		expect(getValuesByProperty('', testObjs)).toEqual([]);
	});
	test('should return [] given "", []', () => {
		expect(getValuesByProperty('', [])).toEqual([]);
	});
});
