import P5 from 'p5';
import { getParams } from './getParams.js';

const sketch = (s) => {
	const windowSize = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
	const params = getParams(windowSize);

	s.setup = () => {
		s.createCanvas(params.canvasSize, params.canvasSize);
		s.noLoop();
	};

	s.draw = () => {
		// draw background
		s.background(255);
		
		// draw frame
		s.noFill();
		s.rect(0, 0, params.canvasSize, params.canvasSize);
	};
};

new P5(sketch, 'p5js');

