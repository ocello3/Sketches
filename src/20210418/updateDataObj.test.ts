import { setTargetDataObj } from './setTargetDataObj';
import { updateDataObj } from './updateDataObj';
import { params, setParams } from './setParams';
import { dataObj } from './dataObj';

const params: params = setParams(100);
const initDataObjs: dataObj[] = Array.from(Array(params.dataObjCount), () => setTargetDataObj(params));
const dataObjs: dataObj[] = initDataObjs.map(dataObj => updateDataObj(dataObj)(params));

test('currentPos', () => {
	dataObjs.forEach(dataObj => {
		expect(dataObj.currentPos.x).toBeGreaterThan(0);
		expect(dataObj.targetPos.x).toBeLessThanOrEqual(params.canvasSize);
		expect(dataObj.currentPos.y).toBeGreaterThan(0);
		expect(dataObj.targetPos.y).toBeLessThanOrEqual(params.canvasSize);
	});
});

test('progressRate', () => {
	dataObjs.forEach(dataObj => {
		expect(dataObj.progressRate).toBeGreaterThan(0);
		expect(dataObj.progressRate).toBeLessThan(1);
	});
});

test('volume', () => {
	dataObjs.forEach(dataObj => {
		expect(dataObj.volume).toBeGreaterThan(params.volume_min);
		expect(dataObj.volume).toBeLessThan(params.volume_max);
	});
});

test('pane', () => {
	dataObjs.forEach(dataObj => {
		expect(dataObj.pane).toBeGreaterThanOrEqual(-1);
		expect(dataObj.pane).toBeLessThanOrEqual(1);
	});
});

test('freq', () => {
	dataObjs.forEach(dataObj => {
		expect(dataObj.freq).toBeGreaterThan(params.freq_min);
		expect(dataObj.freq).toBeLessThan(params.freq_max);
	});
});

