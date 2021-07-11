import { calcCycleCount, calcRefVal, calcEaseVal } from './updateFont';

test('calcCycleCount return between 0 and cycle', () => {
	const cycle = 100;
	const frameCount_small = 50;
	const frameCount_large = 150;
	const cycleCount_small = calcCycleCount(cycle, frameCount_small);
	const cycleCount_large = calcCycleCount(cycle, frameCount_large);
	expect (cycleCount_small).toBe(50);
	expect (cycleCount_large).toBe(50);
});

test('calcRefVal return between 0 and 1', () => {
	const preCycle = 100;
	for (let updatedCycleCount = 0; updatedCycleCount < preCycle; updatedCycleCount++) {
		const refVal = calcRefVal(preCycle, updatedCycleCount);
		expect(refVal).toBeGreaterThanOrEqual(0);
		expect(refVal).toBeLessThanOrEqual(1);
	}
	const refVal_half = calcRefVal(preCycle, preCycle/2);
	expect(refVal_half).toBe(1);
});

test('calcEaseVal return between 0 and 1', () => {
	for (let updatedRefVal = 0; updatedRefVal < 1; updatedRefVal+=0.1) {
		const easeVal = calcEaseVal(updatedRefVal);
		expect(easeVal).toBeGreaterThanOrEqual(0);
		expect(easeVal).toBeLessThanOrEqual(1);
	}
});

