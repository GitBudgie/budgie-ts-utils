import { isFiniteNumber } from './is-finite-number';
import { padStart } from './pad-start';

// Returns the number as a string, padded from the start.
//
// A non-finite number is converted into 0.
//
// Intended for integers but works with finite numbers.
//
// Examples:
//         padStartNumber(1999, 4, '0'); // '1999';
//         padStartNumber(999, 4, '0'); // '0999';
//         padStartNumber(99, 4, '0', '+'); // '+0099';
//         padStartNumber(99, 4, '0', '+-'); // '+0099';
//         padStartNumber(-99, 4, '0', '-'); // '-0099';
//         padStartNumber(-99, 4, '0', '+-'); // '-0999';
//         padStartNumber(-999, 4, '0'); // '0999';
//         padStartNumber(0, 4, '0'); // '0000';
//         padStartNumber(NaN, 5, '0'); // '00000';
export function padStartNumber(
	num: number,
	len: number,
	pad: string = '0',
	signType: string = ''
): string {

	if (!isFiniteNumber(num))
		num = 0;

	let signStr = '';
	if (num < 0) {
		if (signType.indexOf('-') > -1)
			signStr = '-';
	} else {
		if (signType.indexOf('+') > -1)
			signStr = '+';
	}

	// Using "n.toString()" may be a bit slower than "'' + n"
	// but the intent is more readable.
	return signStr + padStart(Math.abs(num).toString(), len, pad);
}
