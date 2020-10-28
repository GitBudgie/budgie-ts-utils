import { isFiniteNumber } from './is-finite-number';

// Returns the finite numbers from the objects.
//
// Examples:
//         getFiniteNumbers([1, 'abc', -2, NaN, 3.14]); // [1, -2, 3.14]
//         getFiniteNumbers([NaN, Infinity, null]); // []
export function getFiniteNumbers(objects: any[]): number[] {

	const arr: number[] = [];
	for (const obj of objects)
		if (isFiniteNumber(obj))
			arr.push(obj);

	return arr;
}
