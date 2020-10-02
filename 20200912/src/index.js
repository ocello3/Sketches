import P5 from 'p5';
import * as calc from './calc.js';

const sketch = (s) => {
	const baseSize = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
	const size = (baseSize < 500) ? baseSize : baseSize * 0.6;
	const circleSize = calc.circleSize(size);

	s.setup = () => {
		s.createCanvas(size, size);
		s.noLoop();
		s.frameRate(2);
	};

	s.draw = () => {
		s.background(255);
		s.strokeWeight(10);
		s.noFill();
		s.rect(0, 0, s.width, s.height);
		s.circle(circleSize.x, circleSize.y, 100);
	};
};

new P5(sketch, 'p5js');

