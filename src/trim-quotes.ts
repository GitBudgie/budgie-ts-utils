import { isPopulatedString } from './is-populated-string';

// Returns the string with the common quotes trimmed from beginning and end.
//
// Example:
//         trimQuotes('"Hi!"'); // 'Hi!'
export function trimQuotes(str: string): string {

	if (!isPopulatedString(str))
		return '';

	return str.replace(/^['"`´]+|[´`"']+$/g, '');
}
