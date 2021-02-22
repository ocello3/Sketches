'use strict';

import { initParams } from './initParams.js';
import { initBall } from './initBall.js';
import { updateBall } from './updateBall.js';

const params = initParams(100);
const balls = Array.from(Array(params.ballNum), (ball, index) => initBall(index)(params));
const frameCount_init = 0;
const frameCount_next = balls.map(ball => ball.get('cycleLength') + 1);
const balls_0 = balls.map((ball) => updateBall(ball)(params, frameCount_init));
const balls_1 = balls.map((ball, index) => updateBall(ball)(params, frameCount_next[index]));

test('confirm frameVal for first cycle', () => {
	balls_0.forEach((ball) => {
		expect(ball.get('frameVal')).toBe(0);
	});
});

test('confirm frameVal for next cycle', () => {
	balls_1.forEach((ball) => {
		expect(ball.get('frameVal')).toBe(1);
	});
});

test('confirm pos for fisrt cycle', () => {
	balls_0.forEach((ball) => {
		expect(ball.get('pos').x).toBeGreaterThan(0);
		expect(ball.get('pos').y).toBeGreaterThan(0);
	});
});

test('confirm volume between -50 and -10', () => {
	balls_1.forEach((ball) => {
		expect(ball.get('volume')).toBeGreaterThan(-50);
		expect(ball.get('volume')).toBeLessThan(-10);
	})
})
