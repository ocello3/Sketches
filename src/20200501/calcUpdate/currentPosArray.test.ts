import P5 from 'p5';
import { params, getParams } from '../getParams';
import * as target from './currentPosArray';

const params: params = getParams(300);
const pointNum: number = params.waveNum * 4 + 1;
const initEasingFactor = 0.4;
const easingFactorReducRate = 0.8;

test('calcCurrentPos', () => {
	const currentCurrentPos = new P5.Vector().set(0, 0);
	const targetPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(10, 0));
	for (let pointIndex = 0; pointIndex < pointNum; pointIndex++) {
		const currentPosFunc = target.calcCurrentPos(currentCurrentPos, pointIndex);
		const currentPos = currentPosFunc(params, targetPosArray, initEasingFactor, easingFactorReducRate);
		expect(currentPos.x).toBeGreaterThan(0);
		expect(currentPos.y).toBe(0);
	}
});

test('calcCurrentPosArray when restart', () => {
	const currentCurrentPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(0, 0));
	const targetPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(10, 0));
	for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
		const currentPosArray = target.calcCurrentPosArray(currentCurrentPosArray, 'restart', snakeIndex, params, targetPosArray, initEasingFactor, easingFactorReducRate);
		currentPosArray.forEach(currentPos => {
			expect(currentPos.x).toBeLessThanOrEqual(0);
			expect(currentPos.y).toBeGreaterThanOrEqual(0);
			expect(currentPos.y).toBeLessThanOrEqual((params as any).canvasSize);
		});
	}
});

test('calcCurrentPosArray without restart', () => {
	const currentCurrentPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(0, 0));
	const targetPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(10, 0));
	for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
		const currentPosArray = target.calcCurrentPosArray(currentCurrentPosArray, 'keep', snakeIndex, params, targetPosArray, initEasingFactor, easingFactorReducRate);
		currentPosArray.forEach(currentPos => {
			expect(currentPos.x).toBeGreaterThan(0);
			expect(currentPos.y).toBe(0);
		});
	}
});

