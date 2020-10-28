import { clamp } from './clamp';
import { isEmptyString } from './is-empty-string';
import { isParsableObject } from './is-parsable-object';
import { toSafeInt } from './to-safe-int';

// Returns the object converted into a clamped safe integer.
//
// Converts only bigints, numbers and strings.
// The other types return the default value.
//
// The "defaultValue" will be clamped if used.
//
// Examples:
//         toClampedSafeInt(123); // 123
//         toClampedSafeInt('456'); // 456
//         toClampedSafeInt('', 7); // 7
//         toClampedSafeInt(5, 7, 1, 10); // 5
//         toClampedSafeInt(15, 7, 1, 10); // 10
//         toClampedSafeInt('', 123, 0, 100); // 100
export function toClampedSafeInt(
	obj: any,
	defaultValue: number = 0,
	minValue: number = Number.MIN_SAFE_INTEGER,
	maxValue: number = Number.MAX_SAFE_INTEGER
): number {

	if (!isParsableObject(obj) || isEmptyString(obj))
		obj = defaultValue;

	return (clamp(toSafeInt(obj), toSafeInt(minValue),
		toSafeInt(maxValue)));
}
