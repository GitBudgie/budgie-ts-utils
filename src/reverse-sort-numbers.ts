// Returns the numbers sorted in descending order.
//
// Sorts the array in place. The given array is modified and returned.
//
// Example:
//         reverseSortNumbers([6, 2, 9]); // [9, 6, 2]
export function reverseSortNumbers(numbers: number[]): number[] {

	return numbers.sort((a, b) => b - a);
}
