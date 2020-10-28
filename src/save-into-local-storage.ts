import { isWebStorageAvailable } from './is-web-storage-available';

// Saves the object into the local storage.
// Returns true if the object was successfully saved.
//
// Throws an error if there is not enough space etc.
//
// Note: This does not have a test.
//
// Example:
//         saveIntoLocalStorage('mySettings', obj); // true
export function saveIntoLocalStorage(key: string, obj: any): boolean {

	if (!isWebStorageAvailable())
		return false;

	localStorage.setItem(key, JSON.stringify(obj));
	return true;
}
