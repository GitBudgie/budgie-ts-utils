// Returns true if the parameter is a function.
//
// Examples:
//         isFunction(() => true); // true
//         isFunction(isFinite); // true
//         isFunction(null); // false
export function isFunction(obj: any): boolean {

	return Object.prototype.toString.call(obj) === '[object Function]';
}
