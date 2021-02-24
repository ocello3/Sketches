'use strict';

import { initParams } from './initParams.js';
import { initBall } from './initBall.js';

const params = initParams(100);
const balls = Array.from(Array(params.ballNum), (ball, index) => initBall(index)(params));

test('confirm leftEdge', () => {
	balls.forEach((ball) => {
		expect(ball.get('leftEdge').x).toBeLessThan(params.canvasSize / 2);
		expect(ball.get('leftEdge').y).toBe(params.canvasSize / 2);
	});
});

test('confirm rightEdge', () => {
	balls.forEach((ball) => {
		expect(ball.get('rightEdge').x).toBeGreaterThan(params.canvasSize / 2);
		expect(ball.get('rightEdge').y).toBe(params.canvasSize / 2);
	});
});

test('confirm amp', () => {
	balls.forEach((ball) => {
		expect(ball.get('amp')).toBeGreaterThan(0);
		expect(ball.get('amp')).toBeLessThan(params.canvasSize);
	});
});

test('confirm amp and margin', () => {
	balls.forEach((ball) => {
		const amp = ball.get('amp');
		const margin_y = params.canvasSize * ball.get('marginRate').y * 2;
		expect(amp + margin_y).toBe(params.canvasSize);
	});
});

test('confirm pos', () => {
	const firstBall = balls[0];
	expect(firstBall.get('pos').x).toBeGreaterThan(0);
	const lastBall = balls[params.ballNum - 1];
	expect(lastBall.get('pos').x).toBeLessThan(params.canvasSize);
});

