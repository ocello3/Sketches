'use strict';
import { initParams } from './initParams.js';
import { initBall } from './initBall.js';
const params = initParams(100);
const balls = Array.from(Array((params as any).ballNum), (ball, index) => initBall(index)(params));
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('confirm leftEdge', () => {
    balls.forEach((ball) => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(ball.get('leftEdge').x).toBeLessThan((params as any).canvasSize / 2);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(ball.get('leftEdge').y).toBe((params as any).canvasSize / 2);
    });
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('confirm rightEdge', () => {
    balls.forEach((ball) => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(ball.get('rightEdge').x).toBeGreaterThan((params as any).canvasSize / 2);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(ball.get('rightEdge').y).toBe((params as any).canvasSize / 2);
    });
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('confirm amp', () => {
    balls.forEach((ball) => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(ball.get('amp')).toBeGreaterThan(0);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(ball.get('amp')).toBeLessThan((params as any).canvasSize);
    });
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('confirm amp and margin', () => {
    balls.forEach((ball) => {
        const amp = ball.get('amp');
        const margin_y = (params as any).canvasSize * ball.get('marginRate').y * 2;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(amp + margin_y).toBe((params as any).canvasSize);
    });
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('confirm pos', () => {
    const firstBall = balls[0];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(firstBall.get('pos').x).toBeGreaterThan(0);
    const lastBall = balls[(params as any).ballNum - 1];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(lastBall.get('pos').x).toBeLessThan((params as any).canvasSize);
});
