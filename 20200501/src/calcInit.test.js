import { getParams } from './getParams.js';
import * as target from './calcInit.js';

const params = getParams(300);
const pointNum = target.calcPointNum(params);

test('calcStatusSwitchDuration', () => {
	const statusSwitchDuration = target.calcStatusSwitchDuration(params);
	expect(statusSwitchDuration).toBeGreaterThanOrEqual(params.statusSwitchDuration.min);
	expect(statusSwitchDuration).toBeLessThanOrEqual(params.statusSwitchDuration.max);
});


test('calcInitEasingFactor', () => {
	const initEasingFactor = target.calcInitEasingFactor(params);
	expect(initEasingFactor).toBeGreaterThanOrEqual(params.initEasingFactor.min);
	expect(initEasingFactor).toBeLessThanOrEqual(params.initEasingFactor.max);
});

test('calcPointNum', () => {
	const pointNum = target.calcPointNum(params);
	expect(pointNum).toBeGreaterThan(1);
});

test('calcStretchedSnakeHeadPos', () => {
	for(let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		const stretchedSnakeHeadPos = target.calcStretchedSnakeHeadPos(snakeIndex, params);
		expect(stretchedSnakeHeadPos.x).toBe(0);
		expect(stretchedSnakeHeadPos.y).toBeGreaterThan(0);
		expect(stretchedSnakeHeadPos.y).toBeLessThan(params.canvasSize);
	}
});

test('calcStretchedSnakePosAngle', () => {
	// test when pointIndex is 0
	const stretchedSnakePosAngle = target.calcStretchedSnakePosAngle(0);
	expect(stretchedSnakePosAngle).toBe(0);
	// test when pointIndex is greater than 0
	for (let pointIndex = 1; pointIndex < pointNum; pointIndex++) {
		const stretchedSnakePosAngle = target.calcStretchedSnakePosAngle(pointIndex);
		expect(stretchedSnakePosAngle).toBeGreaterThan(0);
	}
});

test('calcWaveAmp', () => {
	// test when pointIndex is 0
	const waveAmp = target.calcWaveAmp(0, params);
	expect(waveAmp).toBe(params.headWaveAmp);
	// test when pointIndex is greater than 0
	for (let pointIndex = 1; pointIndex < pointNum; pointIndex++) {
		const waveAmp = target.calcWaveAmp(pointIndex, params);
		expect(waveAmp).toBeLessThanOrEqual(params.headWaveAmp);
	}
});

test('calcInitStretchedSnakePos', () => {
	for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		// test when pointIndex is 0
		const stretchedSnakeHeadPos = target.calcStretchedSnakeHeadPos(snakeIndex, params);
		const initStretchedSnakePosFunc = target.calcInitStretchedSnakePos(0);
		const initStretchedSnakePos = initStretchedSnakePosFunc(snakeIndex, params);
		expect(initStretchedSnakePos.x).toBe(stretchedSnakeHeadPos.x);
		expect(initStretchedSnakePos.y).toBe(stretchedSnakeHeadPos.y);
		expect(initStretchedSnakePos.y).toBeLessThan(params.canvasSize);
		// test whne pointIndex is greater than 0
		for (let pointIndex = 1; pointIndex < pointNum; pointIndex++) {
			const initStretchedSnakePosFunc = target.calcInitStretchedSnakePos(pointIndex);
			const initStretchedSnakePos = initStretchedSnakePosFunc(snakeIndex, params);
			expect(initStretchedSnakePos.x).toBeLessThan(0);
			expect(initStretchedSnakePos.y).toBeGreaterThan(0);
			if (pointIndex % 2 == 0) {
				expect(initStretchedSnakePos.y).toBeCloseTo(stretchedSnakeHeadPos.y);
			}
		}
	}
});

test('calcInitStretchedSnakePosArray', () => {
	for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		const initStretchedSnakePosArray = target.calcInitStretchedSnakePosArray(snakeIndex, params);
		for (let pointIndex = 0; pointIndex < pointNum; pointIndex++) {
			const initStretchedSnakePos = initStretchedSnakePosArray[pointIndex];
			const testPosFunc = target.calcInitStretchedSnakePos(pointIndex);
			const testPos = testPosFunc(snakeIndex, params);
			expect(initStretchedSnakePos.x).toBe(testPos.x);
			expect(initStretchedSnakePos.y).toBe(testPos.y);
			expect(initStretchedSnakePos.y).toBeLessThan(params.canvasSize);
		}
	}
});

