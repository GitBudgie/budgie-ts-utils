import { clamp } from './clamp';

// Returns a linearly interpolated number
// between start and end - by the interpolant number time.
//
// The time is not clamped to the range 0 - 1 by default.
//
// Examples:
//         lerp(0, 10, 0); // 0
//         lerp(0, 10, 0.5); // 5
//         lerp(0, 10, 1); // 10
//         lerp(-100, 100, 0.25); // -50
//         lerp(987, -654, 0.35); // 412.65
//         lerp(NaN, NaN, NaN); // 0
export function lerp(
	start: number,
	end: number,
	time: number,
	isTimeToClamp: boolean = false
): number {

	if (!isFinite(start) || !isFinite(end) || !isFinite(time))
		return 0;

	if (isTimeToClamp)
		time = clamp(time, 0, 1);

	const num = start + (end - start) * time;
	return isFinite(num) ? num : 0;
}
