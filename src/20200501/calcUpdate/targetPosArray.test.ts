import P5 from 'p5';
import { params, getParams } from '../getParams';
import * as target from './targetPosArray';

const params: params = getParams(300);
const pointNum: number = params.waveNum * 4 + 1;

test('calcShrinkedSnakePos', () => {
	const currentTargetPos = new P5.Vector().set(0, 0);
	// when pointIndex is 0
	const shrinkedSnakePosFunc = target.calcShrinkedSnakePos(currentTargetPos, 0);
	const shrinkedSnakePos = shrinkedSnakePosFunc(params);
	expect(shrinkedSnakePos.x).toBe(currentTargetPos.x);
	expect(shrinkedSnakePos.y).toBe(currentTargetPos.y);
	// when pointIndex is greater than 0
	for (let pointIndex = 1; pointIndex < pointNum; pointIndex++) {
		const shrinkedSnakePosFunc = target.calcShrinkedSnakePos(currentTargetPos, pointIndex);
		const shrinkedSnakePos = shrinkedSnakePosFunc(params);
		expect(shrinkedSnakePos.x).toBeGreaterThan(currentTargetPos.x);
		expect(shrinkedSnakePos.y).toBe(currentTargetPos.y);
	}
});

test('calcShrinkedSnakePosArray', () => {
	const currentTargetPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(0, 0));
	const shrinkedSnakePosArray = target.calcShrinkedSnakePosArray(currentTargetPosArray, params);
	shrinkedSnakePosArray.forEach((shrinkedSnakePos, pointIndex) => {
		if (pointIndex == 0) {
			expect(shrinkedSnakePos.x).toBe(0);
			expect(shrinkedSnakePos.y).toBe(0);
		}
		else {
			expect(shrinkedSnakePos.x).toBeGreaterThan(0);
			expect(shrinkedSnakePos.y).toBe(0);
		}
	});
});

test('calcStretchedSnakePos', () => {
	const currentTargetPos = new P5.Vector().set(0, 0);
	// when pointIndex is less than the last index
	for (let pointIndex = 0; pointIndex < pointNum - 1; pointIndex++) {
		const stretchedSnakePosFunc = target.calcStretchedSnakePos(currentTargetPos, pointIndex, Array(pointNum));
		const stretchedSnakePos = stretchedSnakePosFunc(params);
		expect(stretchedSnakePos.x).toBeGreaterThan(currentTargetPos.x);
		expect(stretchedSnakePos.y).toBe(currentTargetPos.y);
	}
	// when pointIndex is the last index
	const stretchedSnakePosFunc = target.calcStretchedSnakePos(currentTargetPos, pointNum - 1, Array(pointNum));
	const stretchedSnakePos = stretchedSnakePosFunc(params);
	expect(stretchedSnakePos.x).toBe(currentTargetPos.x);
	expect(stretchedSnakePos.y).toBe(currentTargetPos.y);
});

test('calcStretchedSnakePosArray', () => {
	const currentTargetPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(0, 0));
	const stretchedSnakePosArray = target.calcStretchedSnakePosArray(currentTargetPosArray, params);
	stretchedSnakePosArray.forEach((stretchedSnakePos, pointIndex, self) => {
		if (pointIndex == (self.length - 1)) {
			expect(stretchedSnakePos.x).toBe(0);
			expect(stretchedSnakePos.y).toBe(0);
		}
		else {
			expect(stretchedSnakePos.x).toBeGreaterThan(0);
			expect(stretchedSnakePos.y).toBe(0);
		}
	});
});

test('calcTargetPosArray for restart status', () => {
	const currentTargetPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(310, 100));
	for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		const targetPosArray = target.calcTargetPosArray(currentTargetPosArray, snakeIndex, params, 'restart');
		targetPosArray.forEach(targetPos => {
			expect(targetPos.x).toBeLessThanOrEqual(0);
			expect(targetPos.y).toBeGreaterThan(0);
			expect(targetPos.y).toBeLessThan(params.canvasSize);
		});
	}
});

test('calcTargetPosArray for keep status', () => {
	const currentTargetPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(0, 0));
	for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		const targetPosArray = target.calcTargetPosArray(currentTargetPosArray, snakeIndex, params, 'keep');
		targetPosArray.forEach(targetPos => {
			expect(targetPos.x).toBe(0);
			expect(targetPos.y).toBe(0);
		});
	}
});

test('calcTargetPosArray for shrink status', () => {
	const currentTargetPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(0, 0));
	for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		const targetPosArray = target.calcTargetPosArray(currentTargetPosArray, snakeIndex, params, 'shrink');
		targetPosArray.forEach(targetPos => {
			expect(targetPos.x).not.toBeUndefined();
			expect(targetPos.y).not.toBeUndefined();
		});
	}
});

test('calcTargetPosArray for stretch status', () => {
	const currentTargetPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(0, 0));
	for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		const targetPosArray = target.calcTargetPosArray(currentTargetPosArray, snakeIndex, params, 'stretch');
		targetPosArray.forEach(targetPos => {
			expect(targetPos.x).not.toBeUndefined();
			expect(targetPos.y).not.toBeUndefined();
		});
	}
});

