'use strict';

import { initBall } from './initBall.js';
import { initParams } from './initParams.js';

window.confirm = jest.fn();
const params = initParams(400, 500);
const ball = initBall(1)(params, 0);

test('confirm frameVal', () => {
	expect(ball.frameVal).toBeGreaterThanOrEqual(0);
});

test('confirm pos', () => {
	expect(ball.pos.x).toBeGreaterThan(0);
});

