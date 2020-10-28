// Returns the first free finite number from "numbers".
// Returns "ideal" if "numbers" does not contain it.
// Returns NaN if "ideal" or "step" is not a finite number or "step" is 0.
// Returns NaN if a free finite number is not found.
//
// The "numbers" is an array of numbers in any order. No need to pre-sort.
//
// The "ideal" is the number that would be ideal to get.
//
// The "step" is a number that tells the step value between comparison
// and the sort direction. A value greater than 0 means
// ascending and a value less than 0 descending.
// Thus, the searched free number is either "equal or greater than ideal"
// or "equal or less than ideal".
//
// The "isSorted" promises that the numbers are pre-sorted.
// An alternative, usually faster search method is then utilized.
//
// Intended for integers but works with finite numbers.
//
// Can not distinguish numbers with tiny precision difference.
//
// Examples:
//         getFreeFiniteNumber(7, []); // 7
//         getFreeFiniteNumber(1, [0]); // 1
//         getFreeFiniteNumber(5, [5], 1); // 6
//         getFreeFiniteNumber(5, [5], -1); // 4
//         getFreeFiniteNumber(1, [1, 2, 3], 1, true); // 4
//         getFreeFiniteNumber(1, [1, 2, 4], 1, true); // 3
//         getFreeFiniteNumber(1, [2, 3, 4], 1, true); // 1
//         getFreeFiniteNumber(9, [9, 8, 7], -1, true); // 6
//         getFreeFiniteNumber(8, [9, 8, 6], -1, true); // 7
//         getFreeFiniteNumber(5, [7, 6, 5, 4], 1); // 8
//         getFreeFiniteNumber(-5, [-4, -6, -5, -7], -1); // -8
export function getFreeFiniteNumber(
	ideal: number,
	numbers: number[],
	step: number = 1,
	isSorted: boolean = false
): number {

	if (!isFinite(ideal) || !isFinite(step) || step === 0)
		return NaN;

	// The ideal is free if it is not in the array.
	const idealIndex = numbers.indexOf(ideal);
	if (idealIndex < 0)
		return ideal;

	// The helper functions trust the parameters.
	const num = isSorted
		? getFromSorted(ideal, numbers, step, idealIndex)
		: getFromUnsorted(ideal, numbers, step);

	// With extreme values, "ideal + step" can result to Infinity.
	return isFinite(num) ? num : NaN;
}

// Returns the first free finite number greater or less than "ideal"
// from the sorted "numbers".
// Returns Infinity in an extreme case ("ideal" + "step").
//
// Looks for gaps.
//
// A helper function for "getFreeFiniteNumber()".
function getFromSorted(
	ideal: number,
	numbers: number[],
	step: number,
	idealIndex: number
): number {

	// It is assumed that there is at least one item
	// in the array and the ideal is there too.
	const len = numbers.length;
	const absStep = Math.abs(step);
	for (let i = ++idealIndex; i < len; i++) {
		const num = numbers[i];
		if (!isFinite(num))
			continue;

		if (Math.abs(num - ideal) > absStep)
			break;

		ideal = num;
	}
	return ideal + step;
}

// Returns the first free finite number greater or less than "ideal"
// from the unsorted "numbers".
// Returns Infinity in an extreme case ("ideal" + "step").
//
// Uses brute force. Slow.
//
// A helper function for "getFreeFiniteNumber()".
function getFromUnsorted(
	ideal: number,
	numbers: number[],
	step: number
): number {

	// It is assumed that there is at least one item
	// in the array and the ideal is there too.
	//
	// Try maximum of "number of items + 1" times before yielding.
	let n = numbers.length + 1;
	while (n--) {
		// This block is always run at least once.
		ideal += step;
		if (numbers.indexOf(ideal) < 0)
			break;
	}
	return ideal;
}
