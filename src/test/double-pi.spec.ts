import { doublePi } from '../double-pi';
import { isFiniteNumberEqual } from '../is-finite-number-equal';

describe('doublePi', () => {
	test('should return true given doublePi', () => {
		expect(isFiniteNumberEqual(doublePi, Math.PI * 2, 7))
			.toBe(true);
	});
});
