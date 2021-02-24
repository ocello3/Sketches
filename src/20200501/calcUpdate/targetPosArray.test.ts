import P5 from 'p5';
import { getParams } from '../getParams.js';
import * as target from './targetPosArray.js';
const params = getParams(300);
const pointNum = (params as any).waveNum * 4 + 1;
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcShrinkedSnakePos', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentTargetPos = new P5.Vector(0, 0);
    // when pointIndex is 0
    const shrinkedSnakePosFunc = target.calcShrinkedSnakePos(currentTargetPos, 0);
    const shrinkedSnakePos = shrinkedSnakePosFunc(params);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(shrinkedSnakePos.x).toBe(currentTargetPos.x);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(shrinkedSnakePos.y).toBe(currentTargetPos.y);
    // when pointIndex is greater than 0
    for (let pointIndex = 1; pointIndex < pointNum; pointIndex++) {
        const shrinkedSnakePosFunc = target.calcShrinkedSnakePos(currentTargetPos, pointIndex);
        const shrinkedSnakePos = shrinkedSnakePosFunc(params);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(shrinkedSnakePos.x).toBeGreaterThan(currentTargetPos.x);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(shrinkedSnakePos.y).toBe(currentTargetPos.y);
    }
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcShrinkedSnakePosArray', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentTargetPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
    const shrinkedSnakePosArray = target.calcShrinkedSnakePosArray(currentTargetPosArray, params);
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'shrinkedSnakePos' implicitly has an 'an... Remove this comment to see the full error message
    shrinkedSnakePosArray.forEach((shrinkedSnakePos, pointIndex) => {
        if (pointIndex == 0) {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(shrinkedSnakePos.x).toBe(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(shrinkedSnakePos.y).toBe(0);
        }
        else {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(shrinkedSnakePos.x).toBeGreaterThan(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(shrinkedSnakePos.y).toBe(0);
        }
    });
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcStretchedSnakePos', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentTargetPos = new P5.Vector(0, 0);
    // when pointIndex is less than the last index
    for (let pointIndex = 0; pointIndex < pointNum - 1; pointIndex++) {
        const stretchedSnakePosFunc = target.calcStretchedSnakePos(currentTargetPos, pointIndex, Array(pointNum));
        const stretchedSnakePos = stretchedSnakePosFunc(params);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(stretchedSnakePos.x).toBeGreaterThan(currentTargetPos.x);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(stretchedSnakePos.y).toBe(currentTargetPos.y);
    }
    // when pointIndex is the last index
    const stretchedSnakePosFunc = target.calcStretchedSnakePos(currentTargetPos, pointNum - 1, Array(pointNum));
    const stretchedSnakePos = stretchedSnakePosFunc(params);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(stretchedSnakePos.x).toBe(currentTargetPos.x);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(stretchedSnakePos.y).toBe(currentTargetPos.y);
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcStretchedSnakePosArray', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentTargetPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
    const stretchedSnakePosArray = target.calcStretchedSnakePosArray(currentTargetPosArray, params);
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'stretchedSnakePos' implicitly has an 'a... Remove this comment to see the full error message
    stretchedSnakePosArray.forEach((stretchedSnakePos, pointIndex, self) => {
        if (pointIndex == (self.length - 1)) {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(stretchedSnakePos.x).toBe(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(stretchedSnakePos.y).toBe(0);
        }
        else {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(stretchedSnakePos.x).toBeGreaterThan(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(stretchedSnakePos.y).toBe(0);
        }
    });
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcTargetPosArray for restart status', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentTargetPosArray = Array.from(Array(pointNum), () => new P5.Vector(310, 100));
    for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
        const targetPosArray = target.calcTargetPosArray(currentTargetPosArray, snakeIndex, params, 'restart');
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'targetPos' implicitly has an 'any' type... Remove this comment to see the full error message
        targetPosArray.forEach(targetPos => {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(targetPos.x).toBeLessThanOrEqual(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(targetPos.y).toBeGreaterThan(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(targetPos.y).toBeLessThan((params as any).canvasSize);
        });
    }
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcTargetPosArray for keep status', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentTargetPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
    for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
        const targetPosArray = target.calcTargetPosArray(currentTargetPosArray, snakeIndex, params, 'keep');
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'targetPos' implicitly has an 'any' type... Remove this comment to see the full error message
        targetPosArray.forEach(targetPos => {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(targetPos.x).toBe(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(targetPos.y).toBe(0);
        });
    }
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcTargetPosArray for shrink status', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentTargetPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
    for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
        const targetPosArray = target.calcTargetPosArray(currentTargetPosArray, snakeIndex, params, 'shrink');
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'targetPos' implicitly has an 'any' type... Remove this comment to see the full error message
        targetPosArray.forEach(targetPos => {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(targetPos.x).not.toBeUndefined();
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(targetPos.y).not.toBeUndefined();
        });
    }
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcTargetPosArray for stretch status', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentTargetPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
    for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
        const targetPosArray = target.calcTargetPosArray(currentTargetPosArray, snakeIndex, params, 'stretch');
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'targetPos' implicitly has an 'any' type... Remove this comment to see the full error message
        targetPosArray.forEach(targetPos => {
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(targetPos.x).not.toBeUndefined();
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(targetPos.y).not.toBeUndefined();
        });
    }
});
