import { isPopulatedString } from './is-populated-string';
import { toSafeInt } from './to-safe-int';

// Returns the string repeated to the length.
//
// Examples:
//         repeatString('abc', 1); // 'a'
//         repeatString('abc', 4); // 'abca'
//         repeatString('abc', 10); // 'abcabcabca'
//         repeatString('', 10); // ''
export function repeatString(str: string, len: number): string {

	if (!isPopulatedString(str))
		return '';

	len = toSafeInt(len);
	if (len < 1)
		return '';

	const arr: string[] = [];
	while (len > 0) {
		const tmp = str.substr(0, len);
		len -= tmp.length;
		arr.push(tmp);
	}
	return arr.join('');
}
