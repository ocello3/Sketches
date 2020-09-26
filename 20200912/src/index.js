import P5 from 'p5';

const sketch = s => {
	const baseSize = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
	const size = (baseSize < 500) ? baseSize : baseSize * 0.6;

	s.setup = () => {
		s.createCanvas(size, size);
		s.noLoop();
		s.frameRate(2);
	};

	s.draw = () => {
		s.background(255);
		s.strokeWeight(10);
		s.noFill();
		s.circle(s.width/2, s.height/2, 50, 50);
		s.rect(0, 0, s.width, s.height);
	};
};

export const s = new P5(sketch, 'p5js');

