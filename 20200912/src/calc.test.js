// import P5 from 'p5';
import * as calc from './calc.js';

const size = 500;

test('calc circleSize func', () => {
	const circleSize = calc.circleSize(size);
	expect(circleSize.x).toBe(size/2);
	expect(circleSize.y).toBe(size/2);
});

