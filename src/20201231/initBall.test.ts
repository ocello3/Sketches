import { initParams } from './initParams';
import { initBall } from './initBall';
import { params } from './initParams';

const params: params = initParams(100);
const balls = Array.from(Array((params as any).ballNum), (ball, index) => initBall(index)(params));
test('confirm leftEdge', () => {
	balls.forEach((ball) => {
		expect(ball.leftEdge.x).toBeLessThan((params as any).canvasSize / 2);
		expect(ball.leftEdge.y).toBe((params as any).canvasSize / 2);
	});
});

test('confirm rightEdge', () => {
	balls.forEach((ball) => {
		expect(ball.rightEdge.x).toBeGreaterThan((params as any).canvasSize / 2);
		expect(ball.rightEdge.y).toBe((params as any).canvasSize / 2);
	});
});

test('confirm amp', () => {
	balls.forEach((ball) => {
		expect(ball.amp).toBeGreaterThan(0);
		expect(ball.amp).toBeLessThan((params as any).canvasSize);
	});
});

test('confirm amp and margin', () => {
	balls.forEach((ball) => {
		const amp = ball.amp;
		const margin_y = (params as any).canvasSize * ball.marginRate.y * 2;
		expect(amp + margin_y).toBe((params as any).canvasSize);
	});
});

test('confirm pos', () => {
	const firstBall = balls[0];
	expect(firstBall.pos.x).toBeGreaterThan(0);
	const lastBall = balls[(params as any).ballNum - 1];
	expect(lastBall.pos.x).toBeLessThan((params as any).canvasSize);
});

