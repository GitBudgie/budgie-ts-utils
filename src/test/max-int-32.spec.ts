import { isFiniteNumberEqual } from '../is-finite-number-equal';
import { maxInt32 } from '../max-int-32';

describe('maxInt32', () => {

	const n = Math.pow(2, 32) / 2 - 1;

	test('should return true given maxInt32', () => {
		expect(isFiniteNumberEqual(maxInt32, n)).toBe(true);
	});
});
