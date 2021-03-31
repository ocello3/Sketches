import P5 from 'p5';
import { params, getParams } from '../getParams';
import * as target from './status';

const params: params = getParams(300);
const pointNum: number = params.waveNum * 4 + 1;
const currentStatusSwitchDuration = 50;

test('calcStatus for restart status', () => {
});

test('calcStatus for stretch status', () => {
	const frameCount = currentStatusSwitchDuration;
	const currentPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(0, 0));
	const status = target.calcStatus(params, frameCount, currentStatusSwitchDuration, currentPosArray);
	expect(status).toBe('stretch');
});

test('calcStatus for shrink status', () => {
	const frameCount = currentStatusSwitchDuration * 2;
	const currentPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(0, 0));
	const status = target.calcStatus(params, frameCount, currentStatusSwitchDuration, currentPosArray);
	expect(status).toBe('shrink');
});

test('calcStatus for keep status', () => {
	const currentPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(0, 0));
	for (let frameCount = 1; frameCount < currentStatusSwitchDuration; frameCount++) {
		const status = target.calcStatus(params, frameCount, currentStatusSwitchDuration, currentPosArray);
		expect(status).toBe('keep');
	}
	for (let frameCount = (params.statusSwitchDuration.min + 1); frameCount < (params.statusSwitchDuration.min * 2); frameCount++) {
		const status = target.calcStatus(params, frameCount, currentStatusSwitchDuration, currentPosArray);
		expect(status).toBe('keep');
	}
});

