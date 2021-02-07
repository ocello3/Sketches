'use strict';

import { initParams } from './initParams.js';
import { initBall } from './initBall.js';
import { updateBall } from './updateBall.js';

window.confirm = jest.fn();
const params = initParams(100, 100);
const balls = Array.from(Array(params.ballNum), (ball, index) => initBall(index)(params));
const frameCount_init = 0;
const frameCount_next = balls.map(ball => ball.cycleLength + 1);
const balls_0 = balls.map((ball) => updateBall(ball)(params, frameCount_init));
const balls_1 = balls.map((ball, index) => updateBall(ball)(params, frameCount_next[index]));

test('confirm frameVal for first cycle', () => {
	balls_0.forEach((ball) => {
		expect(ball.frameVal).toBe(0);
	});
});

test('confirm frameVal for next cycle', () => {
	balls_1.forEach((ball) => {
		expect(ball.frameVal).toBe(1);
	});
});

test('confirm pos for fisrt cycle', () => {
	balls_0.forEach((ball) => {
		expect(ball.pos.x).toBeGreaterThan(0);
		expect(ball.pos.y).toBeGreaterThan(0);
	});
});

