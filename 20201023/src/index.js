import P5 from 'p5';
import { getParams } from './getParams.js';
import vert from './shader/shader.vert';
import frag from './shader/shader.frag';

const sketch = (s) => {
	const windowSize = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
	const params = getParams(windowSize);
	let theShader;
	
	s.setup = () => {
		s.createCanvas(params.canvasSize, params.canvasSize, s.WEBGL);
		s.noStroke();
		s.noLoop();
		theShader = s.createShader(vert, frag);
	};

	s.draw = () => {
		// draw background
		// s.background(255);
		
		/*
		// draw frame
		s.push();
		s.noFill();
		s.rect(0, 0, params.canvasSize, params.canvasSize);
		s.pop();
		*/

		// shader
		theShader.setUniform("u_resolution", [params.windowSize, params.windowSize]);
		s.shader(theShader);
		s.rect(0, 0, params.windowSize, params.windowSize);
	};
};

new P5(sketch, 'p5js');

