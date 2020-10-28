import { isNumber } from './is-number';

// Returns the sort direction number of the numbers.
// Returns a positive value for an ascending order.
// Returns a negative value for a descending order.
// Returns 0 for an empty array or if the direction can not be determined.
//
// Examines only the first two non-NaN numbers.
//
// Can not distinguish numbers with tiny precision difference.
//
// Examples:
//         getDirectionOfNumbers([]); // 0
//         getDirectionOfNumbers([2]); // 0
//         getDirectionOfNumbers([5, 5]); // 0
//         getDirectionOfNumbers([2, 2.5]); // 1
//         getDirectionOfNumbers([1, 2, 3]); // 1
//         getDirectionOfNumbers([3, 2, 1]); // -1
//         getDirectionOfNumbers([0, Infinity]); // 1
//         getDirectionOfNumbers([0, -Infinity]); // -1
export function getDirectionOfNumbers(numbers: number[]): number {

	let prevNum = 0;
	let first = true;
	for (const num of numbers) {
		if (!isNumber(num) || isNaN(num))
			continue;

		if (first) {
			prevNum = num;
			first = false;
			continue;
		}
		if (num === prevNum)
			continue;

		return num > prevNum ? 1 : -1;
	}
	return 0;
}
