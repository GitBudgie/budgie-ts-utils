// Returns true if the web worker support is available.
//
// Note: This does not have a test.
export function isWebWorkerAvailable(): boolean {

	return typeof Worker !== 'undefined';
}
