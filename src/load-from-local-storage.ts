import { isPopulatedString } from './is-populated-string';
import { isWebStorageAvailable } from './is-web-storage-available';

// Returns the object from the local storage.
// Returns null if the local storage is not available
// or there is nothing to load.
//
// Throws an error if the object can not be parsed.
//
// Note: This does not have a test.
//
// Example:
//         loadFromLocalStorage('mySettings'); // { name: 'John' }
export function loadFromLocalStorage(key: string): any {

	if (!isWebStorageAvailable())
		return null;

	const str = localStorage.getItem(key);
	if (!isPopulatedString(str))
		return null;

	return JSON.parse(str!);
}
