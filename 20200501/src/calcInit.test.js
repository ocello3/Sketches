import { getParams } from './getParams.js';
import * as calcInit from './calcInit.js';

const params = getParams(300);

test('calcInitStretchedSnakePoint', () => {
	const pointIndex = 5;
	const snakeIndex = 1;
	const initStretchedSnakePointFunc = calcInit.calcInitStretchedSnakePoint(pointIndex);
	const initStretchedSnakePoint = initStretchedSnakePointFunc(snakeIndex, params);
	expect(initStretchedSnakePoint.x).toBeGreaterThan(0);
	expect(initStretchedSnakePoint.y).toBeGreaterThan(0);
});


