import { clamp } from './clamp';

// Returns a spherically interpolated number
// between start and end - by the interpolant number time.
//
// The time is not clamped to the range 0 - 1 by default.
//
// Examples:
//         slerp(0, 10, 0); // 0
//         slerp(0, 10, 0.5); // 5
//         slerp(0, 10, 1); // 10
//         slerp(-100, 100, 0.25); // -70.7106781
//         slerp(987, -654, 0.35); // 538.999205
//         slerp(NaN, NaN, NaN); // 0
export function slerp(
	start: number,
	end: number,
	time: number,
	isTimeToClamp: boolean = false
): number {

	if (!isFinite(start) || !isFinite(end) || !isFinite(time))
		return 0;

	if (isTimeToClamp)
		time = clamp(time, 0, 1);

	time = (-Math.cos(Math.PI * time) + 1) * 0.5;
	const num = start + (end - start) * time;
	return isFinite(num) ? num : 0;
}
