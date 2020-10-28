// Returns the numbers sorted in ascending order.
//
// Sorts the array in place. The given array is modified and returned.
//
// Example:
//         sortNumbers([6, 2, 9]); // [2, 6, 9]
export function sortNumbers(numbers: number[]): number[] {

	return numbers.sort((a, b) => a - b);
}
