import { isFiniteNumberEqual } from '../is-finite-number-equal';
import { minInt32 } from '../min-int-32';

describe('minInt32', () => {

	const n = Math.pow(2, 32) / 2 * - 1;

	test('should return true given minInt32', () => {
		expect(isFiniteNumberEqual(minInt32, n)).toBe(true);
	});
});
