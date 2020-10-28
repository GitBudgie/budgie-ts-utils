// Shuffles the array.
//
// Shuffles the array in place. The given array is modified and returned.
//
// Note: This does not have a test.
//
// Example:
//         shuffle([1, 2, 3]]); // [3, 1, 2] - or another random order
export function shuffle(objects: any[]): any[] {

	let index = objects.length - 1;
	while (index > 0) {
		const temp = objects[index];
		const n = Math.trunc(index * Math.random());
		objects[index--] = objects[n];
		objects[n] = temp;
	}
	return objects;
}
