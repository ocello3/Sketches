'use strict';

import { initParams } from './initParams.js';
import { initBall } from './initBall.js';

window.confirm = jest.fn();
const params = initParams(100, 100);
const balls = Array.from(Array(params.ballNum), (ball, index) => initBall(index)(params));

test('confirm amp', () => {
	balls.forEach((ball) => {
		expect(ball.amp).toBeGreaterThan(0);
	});
});

test('confirm pos', () => {
	balls.forEach((ball, index) => {
		expect(ball.pos.x).toBeGreaterThan(100/params.ballNum * index);
	});
});

