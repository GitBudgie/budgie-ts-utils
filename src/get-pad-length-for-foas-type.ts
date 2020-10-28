import { getFoasDefinitionByType } from './get-foas-definition-by-type';

// Returns the pad length for the FOAS type.
// Returns 0 for an invalid type.
//
// Examples:
//         getPadLengthForFoasType('ms'); // 3
//         getPadLengthForFoasType('xx'); // 0
//         getPadLengthForFoasType(''); // 0
export function getPadLengthForFoasType(foasType: string): number {

	const def = getFoasDefinitionByType(foasType);
	return def ? def.padLength : 0;
}
