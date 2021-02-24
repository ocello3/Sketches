import P5 from 'p5';
import { getParams } from '../getParams.js';
import * as target from './status.js';
const params = getParams(300);
const pointNum = (params as any).waveNum * 4 + 1;
const currentStatusSwitchDuration = 50;
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcStatus for restart status', () => {
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcStatus for stretch status', () => {
    const frameCount = currentStatusSwitchDuration;
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
    const status = target.calcStatus(params, frameCount, currentStatusSwitchDuration, currentPosArray);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(status).toBe('stretch');
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcStatus for shrink status', () => {
    const frameCount = currentStatusSwitchDuration * 2;
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
    const status = target.calcStatus(params, frameCount, currentStatusSwitchDuration, currentPosArray);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(status).toBe('shrink');
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcStatus for keep status', () => {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    const currentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
    for (let frameCount = 1; frameCount < currentStatusSwitchDuration; frameCount++) {
        const status = target.calcStatus(params, frameCount, currentStatusSwitchDuration, currentPosArray);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(status).toBe('keep');
    }
    for (let frameCount = (params as any).statusSwitchDuration + 1; frameCount < (params as any).statusSwitchDuration * 2; frameCount++) {
        const status = target.calcStatus(params, frameCount, currentStatusSwitchDuration, currentPosArray);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(status).toBe('keep');
    }
});
