import { getParams } from './getParams.js';
import * as target from './calcUpdate.js';

const params = getParams(300);

test('calcStatus', () => {
	// confirm for keep status
	for (let frameCount = 0; frameCount < params.statusSwitchDuration; frameCount++) {
		const status = target.calcStatus(params, frameCount);
		expect(status).toBe('keep');
	}
	// confirm for stretch status
	const status_stretch = target.calcStatus(params, params.statusSwitchDuration);
	expect(status_stretch).toBe('stretch');
	// confirm for keep status
	for (let frameCount = params.statusSwitchDuration + 1; frameCount < params.statusSwitchDuration * 2; frameCount++) {
		const status = target.calcStatus(params, frameCount);
		expect(status).toBe('keep');
	}
	// confirm for shrink status
	const status_shrink = target.calcStatus(params, params.statusSwitchDuration * 2);
	expect(status_shrink).toBe('shrink');
});

