import * as calc from './calc';
const params = calc.getParams(500);
const index = 0;
const initFlagFunc = calc.initFlag(index);
const initFlag = initFlagFunc(params);
const updateFlagFunc = calc.updateFlag(initFlag, index);
const updateFlag = updateFlagFunc(params);
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('init ctrlAngle', () => {
    const ctrlAngle = params.ctrlInitAngles[index];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect((initFlag as any).ctrlAngle).toBe(ctrlAngle);
});
// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('update ctrlAngle', () => {
    const initCtrlAngle = params.ctrlInitAngles[index];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect((updateFlag as any).ctrlAngle).toBeGreaterThan(initCtrlAngle);
});
