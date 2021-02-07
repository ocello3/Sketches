'use strict';

import { initParams } from './initParams.js';
import { initBall } from './initBall.js';

window.confirm = jest.fn();
const params = initParams(100, 100);
const balls = Array.from(Array(params.ballNum), (ball, index) => initBall(index)(params));

test('confirm leftEdge', () => {
	balls.forEach((ball) => {
		expect(ball.leftEdge.x).toBeLessThan(params.canvasSize / 2);
		expect(ball.leftEdge.y).toBe(params.canvasSize / 2);
	});
});

test('confirm rightEdge', () => {
	balls.forEach((ball) => {
		expect(ball.rightEdge.x).toBeGreaterThan(params.canvasSize / 2);
		expect(ball.rightEdge.y).toBe(params.canvasSize / 2);
	});
});

test('confirm amp', () => {
	balls.forEach((ball) => {
		expect(ball.amp).toBeGreaterThan(0);
		expect(ball.amp).toBeLessThan(params.canvasSize);
	});
});

test('confirm amp and margin', () => {
	balls.forEach((ball) => {
		const amp = ball.amp;
		const margin_y = params.canvasSize * ball.marginRate.y * 2;
		expect(amp + margin_y).toBe(params.canvasSize);
	});
});

test('confirm pos', () => {
	const firstBall = balls[0];
	expect(firstBall.pos.x).toBeGreaterThan(0);
	const lastBall = balls[params.ballNum - 1];
	expect(lastBall.pos.x).toBeLessThan(params.canvasSize);
});

