import { getParams } from './getParams';
import * as target from './calcInit';
const params = getParams(300);
const pointNum = target.calcPointNum(params);
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcStatusSwitchDuration', () => {
    const statusSwitchDuration = target.calcStatusSwitchDuration(params);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(statusSwitchDuration).toBeGreaterThanOrEqual((params as any).statusSwitchDuration.min);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(statusSwitchDuration).toBeLessThanOrEqual((params as any).statusSwitchDuration.max);
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcInitEasingFactor', () => {
    const initEasingFactor = target.calcInitEasingFactor(params);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(initEasingFactor).toBeGreaterThanOrEqual((params as any).initEasingFactor.min);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(initEasingFactor).toBeLessThanOrEqual((params as any).initEasingFactor.max);
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcEasingFactorReducRate', () => {
    const easingFactorReducRate = target.calcEasingFactorReducRate(params);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(easingFactorReducRate).toBeGreaterThanOrEqual((params as any).easingFactorReducRate.min);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(easingFactorReducRate).toBeLessThanOrEqual((params as any).easingFactorReducRate.max);
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcPointNum', () => {
    const pointNum = target.calcPointNum(params);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(pointNum).toBeGreaterThan(1);
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcStretchedSnakeHeadPos', () => {
    for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
        const stretchedSnakeHeadPos = target.calcStretchedSnakeHeadPos(snakeIndex, params);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(stretchedSnakeHeadPos.x).toBe(0);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(stretchedSnakeHeadPos.y).toBeGreaterThan(0);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(stretchedSnakeHeadPos.y).toBeLessThan((params as any).canvasSize);
    }
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcStretchedSnakePosAngle', () => {
    // test when pointIndex is 0
    const stretchedSnakePosAngle = target.calcStretchedSnakePosAngle(0);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(stretchedSnakePosAngle).toBe(0);
    // test when pointIndex is greater than 0
    for (let pointIndex = 1; pointIndex < pointNum; pointIndex++) {
        const stretchedSnakePosAngle = target.calcStretchedSnakePosAngle(pointIndex);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(stretchedSnakePosAngle).toBeGreaterThan(0);
    }
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcWaveAmp', () => {
    // test when pointIndex is 0
    const waveAmp = target.calcWaveAmp(0, params);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(waveAmp).toBe((params as any).headWaveAmp);
    // test when pointIndex is greater than 0
    for (let pointIndex = 1; pointIndex < pointNum; pointIndex++) {
        const waveAmp = target.calcWaveAmp(pointIndex, params);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(waveAmp).toBeLessThanOrEqual((params as any).headWaveAmp);
    }
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcInitStretchedSnakePos', () => {
    for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
        // test when pointIndex is 0
        const stretchedSnakeHeadPos = target.calcStretchedSnakeHeadPos(snakeIndex, params);
        const initStretchedSnakePosFunc = target.calcInitStretchedSnakePos(0);
        const initStretchedSnakePos = initStretchedSnakePosFunc(snakeIndex, params);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(initStretchedSnakePos.x).toBe(stretchedSnakeHeadPos.x);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(initStretchedSnakePos.y).toBe(stretchedSnakeHeadPos.y);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(initStretchedSnakePos.y).toBeLessThan((params as any).canvasSize);
        // test whne pointIndex is greater than 0
        for (let pointIndex = 1; pointIndex < pointNum; pointIndex++) {
            const initStretchedSnakePosFunc = target.calcInitStretchedSnakePos(pointIndex);
            const initStretchedSnakePos = initStretchedSnakePosFunc(snakeIndex, params);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(initStretchedSnakePos.x).toBeLessThan(0);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(initStretchedSnakePos.y).toBeGreaterThan(0);
            if (pointIndex % 2 == 0) {
                // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
                expect(initStretchedSnakePos.y).toBeCloseTo(stretchedSnakeHeadPos.y);
            }
        }
    }
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcInitStretchedSnakePosArray', () => {
    for (let snakeIndex = 0; snakeIndex < (params as any).snakeNum; snakeIndex++) {
        const initStretchedSnakePosArray = target.calcInitStretchedSnakePosArray(snakeIndex, params);
        for (let pointIndex = 0; pointIndex < pointNum; pointIndex++) {
            const initStretchedSnakePos = initStretchedSnakePosArray[pointIndex];
            const testPosFunc = target.calcInitStretchedSnakePos(pointIndex);
            const testPos = testPosFunc(snakeIndex, params);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(initStretchedSnakePos.x).toBe(testPos.x);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(initStretchedSnakePos.y).toBe(testPos.y);
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            expect(initStretchedSnakePos.y).toBeLessThan((params as any).canvasSize);
        }
    }
});
