import { getParams } from './getParams.js';
import * as calcInit from './calcInit.js';

const params = getParams(300);
const pointNum = calcInit.calcPointNum(params);

test('calcPointNum', () => {
	const pointNum = calcInit.calcPointNum(params);
	expect(pointNum).toBeGreaterThan(1);
});

test('calcStretchedSnakeHeadPos', () => {
	for(let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		const stretchedSnakeHeadPos = calcInit.calcStretchedSnakeHeadPos(snakeIndex, params);
		expect(stretchedSnakeHeadPos.x).toBe(0);
		expect(stretchedSnakeHeadPos.y).toBeGreaterThan(0);
	}
});

test('calcStretchedSnakePosAngle', () => {
	// test when pointIndex is 0
	const stretchedSnakePosAngle = calcInit.calcStretchedSnakePosAngle(0);
	expect(stretchedSnakePosAngle).toBe(0);
	// test when pointIndex is greater than 0
	for (let pointIndex = 1; pointIndex < pointNum; pointIndex++) {
		const stretchedSnakePosAngle = calcInit.calcStretchedSnakePosAngle(pointIndex);
		expect(stretchedSnakePosAngle).toBeGreaterThan(0);
	}
});

test('calcWaveAmp', () => {
	// test when pointIndex is 0
	const waveAmp = calcInit.calcWaveAmp(0, params);
	expect(waveAmp).toBe(params.headWaveAmp);
	// test when pointIndex is greater than 0
	for (let pointIndex = 1; pointIndex < pointNum; pointIndex++) {
		const waveAmp = calcInit.calcWaveAmp(pointIndex, params);
		expect(waveAmp).toBeLessThan(params.headWaveAmp);
	}
});

test('calcInitStretchedSnakePos', () => {
	for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		// test when pointIndex is 0
		const stretchedSnakeHeadPos = calcInit.calcStretchedSnakeHeadPos(snakeIndex, params);
		const initStretchedSnakePosFunc = calcInit.calcInitStretchedSnakePos(0);
		const initStretchedSnakePos = initStretchedSnakePosFunc(snakeIndex, params);
		expect(initStretchedSnakePos.x).toBe(stretchedSnakeHeadPos.x);
		expect(initStretchedSnakePos.y).toBe(stretchedSnakeHeadPos.y);
		// test whne pointIndex is greater than 0
		for (let pointIndex = 1; pointIndex < pointNum; pointIndex++) {
			const initStretchedSnakePosFunc = calcInit.calcInitStretchedSnakePos(pointIndex);
			const initStretchedSnakePos = initStretchedSnakePosFunc(snakeIndex, params);
			expect(initStretchedSnakePos.x).toBeLessThan(0);
			expect(initStretchedSnakePos.y).toBeGreaterThan(0);
		}
	}
});


