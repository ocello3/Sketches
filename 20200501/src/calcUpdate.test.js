import P5 from 'p5';
import { getParams } from './getParams.js';
import * as target from './calcUpdate.js';

const params = getParams(300);
const pointNum = params.waveNum * 4 + 1;

test('calcStatus for restart status', () => {
});

test('calcStatus for stretch status', () => {
	const frameCount = params.statusSwitchDuration;
	const currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
	const status = target.calcStatus(params, frameCount, currentPosArray);
	expect(status).toBe('stretch');
});

test('calcStatus for shrink status', () => {
	const frameCount = params.statusSwitchDuration * 2;
	const currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
	const status = target.calcStatus(params, frameCount, currentPosArray);
	expect(status).toBe('shrink');
});

test('calcStatus for keep status', () => {
	const currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
	for (let frameCount = 1; frameCount < params.statusSwitchDuration; frameCount++) {
		const status = target.calcStatus(params, frameCount, currentPosArray);
		expect(status).toBe('keep');
	}
	for (let frameCount = params.statusSwitchDuration + 1; frameCount < params.statusSwitchDuration * 2; frameCount++) {
		const status = target.calcStatus(params, frameCount, currentPosArray);
		expect(status).toBe('keep');
	}
});

test('calcFrameCount when restart', () => {
	const currentFrameCount = 10;
	const updateFrameCount = target.calcFrameCount(currentFrameCount, 'restart');
	expect(updateFrameCount).toBe(1);
});

test('calcFrameCount without restart', () => {
	const currentFrameCount = 10;
	const updateFrameCount = target.calcFrameCount(currentFrameCount, 'keep');
	expect(updateFrameCount).toBe(currentFrameCount + 1);
});

