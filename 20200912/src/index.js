import P5 from 'p5';
import * as calc from './calc.js';

const sketch = s => {
	const baseSize = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
	const size = (baseSize < 500) ? baseSize : baseSize * 0.6;
	const circleSize = calc.circleSize();

	s.setup = () => {
		s.createCanvas(size, size);
		s.noLoop();
		s.frameRate(2);
		console.log(circleSize.x);
	};

	s.draw = () => {
		s.background(255);
		s.strokeWeight(10);
		s.noFill();
		s.circle(circleSize.x, circleSize.y, 50, 50);
		s.rect(0, 0, s.width, s.height);
	};
};

export const s = new P5(sketch, 'p5js');

