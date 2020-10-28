import { arrayToDecoratedString } from '../array-to-decorated-string';
import { trimStrings } from '../trim-strings';

describe('trimStrings', () => {

	let arr = [' a ', ' b ', ' c '];
	let str = arrayToDecoratedString(arr);
	let res = ['a', 'b', 'c'];
	let resStr = arrayToDecoratedString(res);
	test(`should return ${resStr} given ${str}`, () => {
		expect(trimStrings(arr)).toMatchObject(res);
	});

	let arr2 = ['xayx', 'xbyx'];
	let str2 = arrayToDecoratedString(arr2);
	let res2 = ['a', 'b'];
	let resStr2 = arrayToDecoratedString(res2);
	test(`should return ${resStr2} given ${str2}, ['x', 'y']`, () => {
		expect(trimStrings(arr2, ['x', 'y'])).toMatchObject(res2);
	});
});
