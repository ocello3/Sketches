import P5 from 'p5';
import { getParams } from './getParams.js';
import * as target from './calcUpdate.js';
const params = getParams(300);
const pointNum = (params as any).waveNum * 4 + 1;
const currentSnake = {};
(currentSnake as any).status = 'keep';
(currentSnake as any).frameCount = 1;
// @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
(currentSnake as any).targetPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
// @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
(currentSnake as any).currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('status for restart', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    (currentSnake as any).currentPosArray = Array.from(Array(pointNum), () => new P5.Vector((params as any).canvasSize + 50, (params as any).canvasSize / 2));
    for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
        const updateSnakeFunc = target.calcUpdate(currentSnake, snakeIndex);
        const updateSnake = updateSnakeFunc(params);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect((updateSnake as any).status).toBe('restart');
    }
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('currentPosArray for restart', () => {
    (currentSnake as any).frameCount = 1000;
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    (currentSnake as any).currentPosArray = Array.from(Array(pointNum), () => new P5.Vector((params as any).canvasSize + 50, 100));
    for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
        const updateSnakeFunc = target.calcUpdate(currentSnake, snakeIndex);
        const updateSnake = updateSnakeFunc(params);
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'currentPos' implicitly has an 'any' typ... Remove this comment to see the full error message
        (updateSnake as any).currentPosArray.forEach(currentPos => {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(currentPos.x).toBeLessThanOrEqual(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(currentPos.y).toBeGreaterThan(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(currentPos.y).toBeLessThan((params as any).canvasSize);
        });
    }
});
