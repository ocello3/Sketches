'use strict';

import { initParams } from './initParams.js';
import { initBall } from './initBall.js';
import { updateBall } from './updateBall.js';

window.confirm = jest.fn();
const params = initParams(100, 100);
const balls = Array.from(Array(params.ballNum), (ball, index) => initBall(index)(params));
const balls_0 = balls.map((ball) => updateBall(ball)(params, 0));
const balls_1 = balls.map((ball) => updateBall(ball)(params, 61));

test('confirm frameVal for first round', () => {
	balls_0.forEach((ball) => {
		expect(ball.frameVal).toBe(0);
	});
});

test('confirm frameVal for next round', () => {
	balls_1.forEach((ball) => {
		expect(ball.frameVal).toBe(1);
	});
});
