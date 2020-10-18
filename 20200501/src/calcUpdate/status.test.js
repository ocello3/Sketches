import P5 from 'p5';
import { getParams } from '../getParams.js';
import * as target from './status.js';

const params = getParams(300);
const pointNum = params.waveNum * 4 + 1;
const currentStatusSwitchDuration = 50;

test('calcStatus for restart status', () => {
});

test('calcStatus for stretch status', () => {
	const frameCount = currentStatusSwitchDuration;
	const currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
	const status = target.calcStatus(params, frameCount, currentStatusSwitchDuration, currentPosArray);
	expect(status).toBe('stretch');
});

test('calcStatus for shrink status', () => {
	const frameCount = currentStatusSwitchDuration * 2;
	const currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
	const status = target.calcStatus(params, frameCount, currentStatusSwitchDuration, currentPosArray);
	expect(status).toBe('shrink');
});

test('calcStatus for keep status', () => {
	const currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
	for (let frameCount = 1; frameCount < currentStatusSwitchDuration; frameCount++) {
		const status = target.calcStatus(params, frameCount, currentStatusSwitchDuration, currentPosArray);
		expect(status).toBe('keep');
	}
	for (let frameCount = params.statusSwitchDuration + 1; frameCount < params.statusSwitchDuration * 2; frameCount++) {
		const status = target.calcStatus(params, frameCount, currentStatusSwitchDuration, currentPosArray);
		expect(status).toBe('keep');
	}
});

