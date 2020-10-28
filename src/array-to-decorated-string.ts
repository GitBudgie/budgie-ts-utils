import { objectToString } from './object-to-string';

// Returns the array converted into a decorated string.
//
// Warning! Not thoroughly tested!
//
// Examples:
//         arrayToDecoratedString([1, 2, 3]); // '[1, 2, 3]'
//         arrayToDecoratedString([]); // '[]'
export function arrayToDecoratedString(objects: any[]): string {

	const arr: string[] = [];
	for (const item of objects) {
		let str = objectToString(item);
		if (typeof item === 'string')
			str = '"' + str + '"';

		arr.push(str);
	}
	return '[' + arr.join(', ') + ']';
}
