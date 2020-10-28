import { halfPi } from '../half-pi';
import { isFiniteNumberEqual } from '../is-finite-number-equal';

describe('halfPi', () => {
	test('should return true given halfPi', () => {
		expect(isFiniteNumberEqual(halfPi, Math.PI / 2, 7))
			.toBe(true);
	});
});
