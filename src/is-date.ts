// Returns true if the parameter is a (valid) Date.
//
// Examples:
//         isDate(new Date()); // true
//         isDate(new Date('')); // false
//         isDate(null); false
export function isDate(obj: any): boolean {

	return (Object.prototype.toString.call(obj) === "[object Date]" &&
		!Number.isNaN(obj.valueOf()));
}
