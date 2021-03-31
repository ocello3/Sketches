import P5 from 'p5';
import { params, getParams } from './getParams';
import * as target from './calcUpdate';
import { snake } from './snake';

const params = getParams(300);
const pointNum = params.waveNum * 4 + 1;
const currentSnake: snake = {
	statusSwitchDuration: 0,
	initEasingFactor: 0,
	easingFactorReducRate: 0,
	status: 'keep',
	frameCount: 1,
	targetPosArray: Array.from(Array(pointNum), () => new P5.Vector().set(0, 0)),
	currentPosArray: Array.from(Array(pointNum), () => new P5.Vector().set(0, 0)),
};

test('status for restart', () => {
    currentSnake.currentPosArray = Array.from(Array(pointNum), () => new P5.Vector().set(params.canvasSize + 50, params.canvasSize / 2));
    for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
        const updateSnakeFunc = target.calcUpdate(currentSnake, snakeIndex);
        const updateSnake = updateSnakeFunc(params);
        expect(updateSnake.status).toBe('restart');
    }
});

test('currentPosArray for restart', () => {
    currentSnake.frameCount = 1000;
    currentSnake.currentPosArray = Array.from(Array(pointNum), () => new P5.Vector().set((params.canvasSize + 50, 100)));
    for (let snakeIndex = 0; snakeIndex < params.snakeNum; snakeIndex++) {
        const updateSnakeFunc = target.calcUpdate(currentSnake, snakeIndex);
        const updateSnake = updateSnakeFunc(params);
        updateSnake.currentPosArray.forEach(currentPos => {
            expect(currentPos.x).toBeGreaterThanOrEqual(0);
            expect(currentPos.y).toBeGreaterThanOrEqual(0);
            expect(currentPos.y).toBeLessThan(params.canvasSize);
        });
    }
});

