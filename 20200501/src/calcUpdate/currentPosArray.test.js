import P5 from 'p5';
import { getParams } from '../getParams.js';
import * as target from './currentPosArray.js';

const params = getParams(300);
const pointNum = params.waveNum * 4 + 1;

test('calcCurrentPos', () => {
	const currentCurrentPos = new P5.Vector(0, 0);
	const targetPosArray = Array.from(Array(pointNum), () => new P5.Vector(10, 0));
	for (let pointIndex = 0; pointIndex < pointNum; pointIndex++) {
		const currentPosFunc = target.calcCurrentPos(currentCurrentPos, pointIndex);
		const currentPos = currentPosFunc(params, targetPosArray);
		expect(currentPos.x).toBeGreaterThan(0);
		expect(currentPos.y).toBe(0);
	}
});

test('calcCurrentPosArray when restart', () => {
	const currentCurrentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
	const targetPosArray = Array.from(Array(pointNum), () => new P5.Vector(10, 0));
	for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		const currentPosArray = target.calcCurrentPosArray(currentCurrentPosArray, 'restart', snakeIndex, params, targetPosArray);
		currentPosArray.forEach(currentPos => {
			expect(currentPos.x).toBeLessThanOrEqual(0);
			expect(currentPos.y).toBeGreaterThanOrEqual(0);
			expect(currentPos.y).toBeLessThanOrEqual(params.canvasSize);
		});
	}
});

test('calcCurrentPosArray without restart', () => {
	const currentCurrentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
	const targetPosArray = Array.from(Array(pointNum), () => new P5.Vector(10, 0));
	for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		const currentPosArray = target.calcCurrentPosArray(currentCurrentPosArray, 'keep', snakeIndex, params, targetPosArray);
		currentPosArray.forEach(currentPos => {
			expect(currentPos.x).toBeGreaterThan(0);
			expect(currentPos.y).toBe(0);
		});
	}
});

