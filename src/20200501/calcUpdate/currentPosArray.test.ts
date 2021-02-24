import P5 from 'p5';
import { getParams } from '../getParams.js';
import * as target from './currentPosArray.js';
const params = getParams(300);
const pointNum = (params as any).waveNum * 4 + 1;
const initEasingFactor = 0.4;
const easingFactorReducRate = 0.8;
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcCurrentPos', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentCurrentPos = new P5.Vector(0, 0);
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const targetPosArray = Array.from(Array(pointNum), () => new P5.Vector(10, 0));
    for (let pointIndex = 0; pointIndex < pointNum; pointIndex++) {
        const currentPosFunc = target.calcCurrentPos(currentCurrentPos, pointIndex);
        const currentPos = currentPosFunc(params, targetPosArray, initEasingFactor, easingFactorReducRate);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(currentPos.x).toBeGreaterThan(0);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(currentPos.y).toBe(0);
    }
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcCurrentPosArray when restart', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentCurrentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const targetPosArray = Array.from(Array(pointNum), () => new P5.Vector(10, 0));
    for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
        const currentPosArray = target.calcCurrentPosArray(currentCurrentPosArray, 'restart', snakeIndex, params, targetPosArray, initEasingFactor, easingFactorReducRate);
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'currentPos' implicitly has an 'any' typ... Remove this comment to see the full error message
        currentPosArray.forEach(currentPos => {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(currentPos.x).toBeLessThanOrEqual(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(currentPos.y).toBeGreaterThanOrEqual(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(currentPos.y).toBeLessThanOrEqual((params as any).canvasSize);
        });
    }
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcCurrentPosArray without restart', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentCurrentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const targetPosArray = Array.from(Array(pointNum), () => new P5.Vector(10, 0));
    for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
        const currentPosArray = target.calcCurrentPosArray(currentCurrentPosArray, 'keep', snakeIndex, params, targetPosArray, initEasingFactor, easingFactorReducRate);
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'currentPos' implicitly has an 'any' typ... Remove this comment to see the full error message
        currentPosArray.forEach(currentPos => {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(currentPos.x).toBeGreaterThan(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(currentPos.y).toBe(0);
        });
    }
});
