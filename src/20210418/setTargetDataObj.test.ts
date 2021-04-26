import P5 from 'p5';
import { setTargetDataObj } from './setTargetDataObj';
import { params, setParams } from './setParams';
import { dataObj } from './dataObj';

const params: params = setParams(100);
const dataObjs: dataObj[] = Array.from(Array(params.dataObjCount), () => setTargetDataObj(params));

test('duration', () => {
	dataObjs.forEach(dataObj => {
		expect(dataObj.duration).toBeGreaterThanOrEqual(params.duration_min);
		expect(dataObj.duration).toBeLessThan(params.duration_max);
	});
});

test('a and v0', () => {
	dataObjs.forEach(dataObj => {
		const v = P5.Vector.add(dataObj.v0, P5.Vector.mult(dataObj.a, dataObj.duration + 1));
		expect(v.x).toBeLessThan(50);
		expect(v.y).toBeGreaterThan(-50);
	});
});

test('startPos', () => {
	dataObjs.forEach(dataObj => {
		expect(dataObj.startPos.x).toBeGreaterThan(0);
		expect(dataObj.startPos.x).toBeLessThanOrEqual(params.canvasSize);
		expect(dataObj.startPos.y).toBeGreaterThan(0);
		expect(dataObj.startPos.y).toBeLessThanOrEqual(params.canvasSize);
	});
});

test('targetPos', () => {
	dataObjs.forEach(dataObj => {
		expect(dataObj.targetPos.x).toBeGreaterThan(0);
		expect(dataObj.targetPos.x).toBeLessThanOrEqual(params.canvasSize);
		expect(dataObj.targetPos.y).toBeGreaterThan(0);
		expect(dataObj.targetPos.y).toBeLessThanOrEqual(params.canvasSize);
	});
});

