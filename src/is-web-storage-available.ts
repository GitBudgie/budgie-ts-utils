// Returns true if the web storage is available.
//
// Note: This does not have a test.
export function isWebStorageAvailable(): boolean {

	return typeof Storage !== 'undefined';
}
