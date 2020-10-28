import { isObject } from './is-object';

// Returns the values from the objects by the property.
//
// Examples:
//         getValuesByProperty('id', objects'); // [93, 7, -5, 64, NaN]
//         getValuesByProperty('name', objects); // ['Ann', 'John', null]
//         getValuesByProperty('tag', objects); // ['x', null, undefined]
export function getValuesByProperty(
	property: string,
	objects: any[]
): any[] {

	const arr: any[] = [];
	for (const obj of objects)
		if (isObject(obj) && property in obj)
			arr.push(obj[property]);

	return arr;
}
