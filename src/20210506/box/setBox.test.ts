// import P5 from 'p5';
import { setBox } from './setBox';
import { params, setParams } from '../params';

const thisParams:params = setParams(100);
const setBoxes = Array.from(Array(1), () => setBox(thisParams));

test('boxInitVelocity', () => {
	setBoxes.forEach(box => {
		expect(box.boxInitVelocity.x).toBe(0);
		expect(box.boxInitVelocity.y).toBeGreaterThanOrEqual(0);
	});
});

test('boxCollisionPos', () => {
	setBoxes.forEach(box => {
		expect(box.boxCollisionPos.x).toBeGreaterThanOrEqual(0);
		expect(box.boxCollisionPos.y).toBeGreaterThan(0);
		expect(box.boxCollisionPos.y).toBeLessThan(thisParams.canvasSize);
	});
});

test('boxPos', () => {
	setBoxes.forEach(box => {
		expect(box.boxPos_rowRight.x).toBeGreaterThan(0);
		expect(box.boxPos_rowRight.x).toBeLessThan(thisParams.canvasSize);
		expect(box.boxPos_rowRight.y).toBe(0);
	});
});

