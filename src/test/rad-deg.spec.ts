import { isFiniteNumberEqual } from '../is-finite-number-equal';
import { radDeg } from '../rad-deg';

describe('radDeg', () => {
	test('should return true given radDeg', () => {
		expect(isFiniteNumberEqual(radDeg, 180 / Math.PI, 7))
			.toBe(true);
	});
});
