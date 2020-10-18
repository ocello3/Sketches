import P5 from 'p5';
import { getParams } from './getParams.js';
import * as target from './calcUpdate.js';

const params = getParams(300);
const pointNum = params.waveNum * 4 + 1;
const currentSnake = {};
currentSnake.status = 'keep';
currentSnake.frameCount = 1;
currentSnake.targetPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
currentSnake.currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));

test('status for restart', () => {
	currentSnake.currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(params.canvasSize + 50, params.canvasSize / 2));
	for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		const updateSnakeFunc = target.calcUpdate(currentSnake, snakeIndex);
		const updateSnake = updateSnakeFunc(params);
		expect(updateSnake.status).toBe('restart');
	}
});

test('currentPosArray for restart', () => {
	currentSnake.frameCount = 1000;
	currentSnake.currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(params.canvasSize + 50, 100));
	for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
		const updateSnakeFunc = target.calcUpdate(currentSnake, snakeIndex);
		const updateSnake = updateSnakeFunc(params);
		updateSnake.currentPosArray.forEach(currentPos => {
			expect(currentPos.x).toBeLessThanOrEqual(0);
			expect(currentPos.y).toBeGreaterThan(0);
			expect(currentPos.y).toBeLessThan(params.canvasSize);
		});
	}
});

