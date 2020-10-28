// Returns the number clamped between min and max.
//
// Converts NaN for num to 0, min to -Infinity and max to Infinity.
//
// The optional min and max are inclusive.
//
// Examples:
//         clamp(0, 1); // 1
//         clamp(-9, -1, 0); // -1
//         clamp(11, undefined, 10); // 10
//         clamp(Infinity, -10, 10); // 10
//         clamp(-Infinity, -10, 10); // -10
//         clamp(NaN); // 0
export function clamp(num: number, min?: number, max?: number): number {

	if (typeof num !== 'number' || isNaN(num))
		num = 0;

	if (typeof min !== 'number' || isNaN(min))
		min = -Infinity;

	if (typeof max !== 'number' || isNaN(max))
		max = Infinity;

	// The exclamation mark (!) is the non-null assertion operator.
	// "Hey compiler, it is sure that the value is not null or undefined."
	if (min! > max!) {
		const tmp = min;
		min = max;
		max = tmp;
	}
	return Math.min(Math.max(num, min!), max!);
}
