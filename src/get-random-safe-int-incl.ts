import { isSafeInt } from './is-safe-int';

// Returns a random safe integer between minimum and maximum.
// Returns 0 if min or max is not a finite number
// or the final random number is not a safe integer.
//
// Parameters min and max are inclusive.
//
// Examples:
//         getRandomSafeIntIncl(0, 10); // a safe int between 0 - 10
//         getRandomSafeIntIncl(-10, 10); // a safe int between -10 - 10
export function getRandomSafeIntIncl(
	min: number = 0,
	max: number = 0
): number {

	if (!isFinite(min) || !isFinite(max))
		return 0;

	if (min > max) {
		const tmp = min;
		min = max;
		max = tmp;
	}

	min = Math.ceil(min);
	max = Math.floor(max);

	const num = Math.floor(min + (max - min + 1) * Math.random());
	return isSafeInt(num) ? num : 0;
}
