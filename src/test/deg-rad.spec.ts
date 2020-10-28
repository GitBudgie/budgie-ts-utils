import { degRad } from '../deg-rad';
import { isFiniteNumberEqual } from '../is-finite-number-equal';

describe('degRad', () => {
	test('should return true given degRad', () => {
		expect(isFiniteNumberEqual(degRad, Math.PI / 180, 7))
			.toBe(true);
	});
});
