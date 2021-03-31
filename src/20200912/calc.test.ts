import * as calc from './calc';
import { flag } from './flag';

const params = calc.getParams(500);
const index = 0;
const initFlagFunc = calc.initFlag(index);
const initFlag: flag = initFlagFunc(params);
const updateFlagFunc = calc.updateFlag(initFlag, index);

const updateFlag = updateFlagFunc(params);
test('init ctrlAngle', () => {
	const ctrlAngle = params.ctrlInitAngles[index];
	expect(initFlag.ctrlAngle).toBe(ctrlAngle);
});
test('update ctrlAngle', () => {
	const initCtrlAngle = params.ctrlInitAngles[index];
	expect(updateFlag.ctrlAngle).toBeGreaterThan(initCtrlAngle);
});

