import P5 from 'p5';
import { getParams } from './getParams.js';
import * as calcUpdate from './calcUpdate.js';

const params = getParams(300);
const pointNum = params.waveNum * 4 + 1;

test('calcStatus', () => {
	// confirm for keep status
	for (let frameCount = 0; frameCount < params.statusSwitchDuration; frameCount++) {
		const status = calcUpdate.calcStatus(frameCount);
		expect(status).toBe('keep');
	}
	// confirm for stretch status
	const status_stretch = calcUpdate.calcStatus(params.statusSwitchDuration);
	expect(status_stretch).toBe('stretch');
	// confirm for keep status
	for (let frameCount = params.statusSwitchDuration + 1; frameCount < params.statusSwitchDuration * 2; frameCount++) {
		const status = calcUpdate.calcStatus(frameCount);
		expect(status).toBe('keep');
	}
	// confirm for shrink status
	const status_shrink = calcUpdate.calcStatus(params.statusSwitchDuration * 2);
	expect(status_shrink).toBe('shrink');
});

test('calcShrinkedSnakePos', () => {
	const currentTargetPos = new P5.Vector(0, 0);
	// when pointIndex is 0
	const shrinkedSnakePosFunc = calcUpdate.calcShrinkedSnakePos(currentTargetPos, 0);
	const shrinkedSnakePos = shrinkedSnakePosFunc(params);
	expect(shrinkedSnakePos.x).toBe(currentTargetPos.x);
	expect(shrinkedSnakePos.y).toBe(currentTargetPos.y);
	// when pointIndex is greater than 0
	for (let pointIndex = 1; pointIndex < pointNum; pointIndex++) {
		const shrinkedSnakePosFunc = calcUpdate.calcShrinkedSnakePos(currentTargetPos, pointIndex);
		const shrinkedSnakePos = shrinkedSnakePosFunc(params);
		expect(shrinkedSnakePos.x).toBeGreaterThan(currentTargetPos.x);
		expect(shrinkedSnakePos.y).toBe(currentTargetPos.y);
	}
});

test('calcStretchedSnakePos', () => {
	const currentTargetPos = new P5.Vector(0, 0);
	// when pointIndex is less than the last index
	for (let pointIndex = 0; pointIndex < pointNum - 1; pointIndex++) {
		const stretchedSnakePosFunc = calcUpdate.calcStretchedSnakePos(currentTargetPos, pointIndex, Array(pointNum));
		const stretchedSnakePos = stretchedSnakePosFunc(params);
		expect(stretchedSnakePos.x).toBeGreaterThan(currentTargetPos.x);
		expect(stretchedSnakePos.y).toBe(currentTargetPos.y);
	}
	// when pointIndex is the last index
	const stretchedSnakePosFunc = calcUpdate.calcStretchedSnakePos(currentTargetPos, pointNum - 1, Array(pointNum));
	const stretchedSnakePos = stretchedSnakePosFunc(params);
	expect(stretchedSnakePos.x).toBe(currentTargetPos.x);
	expect(stretchedSnakePos.y).toBe(currentTargetPos.y);
});

