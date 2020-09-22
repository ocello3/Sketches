// "use strict";

import P5 from 'p5';

const sketch = s => {
	s.setup = () => {
		s.createCanvas(500, 500);
		s.noLoop();
		s.frameRate(2);
	};
	s.draw = () => {
		s.strokeWeight(5);
		s.noFill();
		s.circle(s.width/2, s.height/2, 50, 50);
		s.rect(0, 0, s.width, s.height);
	};
};

export const s = new P5(sketch, 'p5js');

