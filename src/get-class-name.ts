import { isPopulatedString } from './is-populated-string';

// Returns the class name of the object.
// Returns an empty string if the class name can not be determined.
//
// Examples:
//         getClassName(3); // 'Number'
//         getClassName({}); // 'Object'
//         getClassName('abc'); // 'String'
//         getClassName(new Date()); // 'Date'
export function getClassName(obj: any): string {

	if (obj === null || obj === undefined)
		return '';

	const con = obj.constructor;
	if (con === null || con === undefined)
		return '';

	const str = con.name;
	return isPopulatedString(str) ? str : '';
}
