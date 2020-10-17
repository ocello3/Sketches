import P5 from 'p5';
import { getParams } from './getParams.js';
import * as target from './calcUpdate_currentPosArray.js';

const params = getParams(300);
const pointNum = params.waveNum * 4 + 1;

test('calcCurrentPos', () => {
	const currentCurrentPos = new P5.Vector(0, 0);
	const targetPosArray = Array.from(Array(pointNum), () => new P5.Vector(10, 0));
	for (let pointIndex = 0; pointIndex < pointNum; pointIndex++) {
		const currentPosFunc = target.calcCurrentPos(currentCurrentPos, pointIndex);
		const currentPos = currentPosFunc(params, targetPosArray);
		expect(currentPos.x).toBeGreaterThan(0);
		expect(currentPos.y).toBe(0);
	}
});

test('calcCurrentPosArray', () => {
	const currentCurrentPosArray = Array.from(Array(pointNum), () => new P5.Vector(0, 0));
	const targetPosArray = Array.from(Array(pointNum), () => new P5.Vector(10, 0));
	const currentPosArray = target.calcCurrentPosArray(currentCurrentPosArray, params, targetPosArray);
	currentPosArray.forEach(currentPos => {
		expect(currentPos.x).toBeGreaterThan(0);
		expect(currentPos.y).toBe(0);
	});
});

