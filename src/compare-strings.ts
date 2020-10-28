import { toNonNegativeSafeInt } from './to-non-negative-safe-int';

// The default internationalization collator options.
export const defaultCollatorOptions: Intl.CollatorOptions = {
	caseFirst: 'false',
	ignorePunctuation: false,
	localeMatcher: 'best fit',
	numeric: false,
	sensitivity: 'variant',
	usage: 'sort'
};

// Returns 0 if the strings are equal.
// Returns a negative number if strA is less than strB.
// Returns a positive number if strA is greater than strB.
//
// Empty strings are considered equal.
// If the optional length is greater than 0,
// the strings are compared at most the first n characters.
//
// Parameters locale and options are not validated.
//
// The default behavior of localeCompare is that "a" comes before "A".
// Some environments may allow setting "caseFirst" to "upper" for "A" > "a".
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
// Global_Objects/Collator/Collator
//
// Examples:
//         compareStrings('abc', 'ABC'); // < 0
//         compareStrings('abc', 'abc'); // 0
//         compareStrings('ABC', 'abc'); // > 0
export function compareStrings(
	strA: string,
	strB: string,
	len: number = 0,
	locale: string = 'en',
	options: Intl.CollatorOptions = defaultCollatorOptions
): number {

	len = toNonNegativeSafeInt(len);
	if (len > 0) {
		if (strA.length > len)
			strA = strA.substring(0, len);

		if (strB.length > len)
			strB = strB.substring(0, len);
	}
	try {
		return strA.localeCompare(strB, locale, options);
	} catch (e) {
		console.error('compareStrings', e);
	}
	return 0;
}
