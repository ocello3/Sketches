import { getParams } from './getParams.js';
import vert from './shader/shader.vert';
import frag from './shader/shader.frag';

export const p5_20201023 = (s) => {
	const windowSize = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
	const params = getParams(windowSize);
	let theShader;
	
	s.setup = () => {
		s.createCanvas(params.canvasSize, params.canvasSize, s.WEBGL);
		s.noStroke();
		// s.noLoop();
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
		s.shader(theShader);
		theShader.setUniform('u_resolution', [params.canvasSize, params.canvasSize]);
		theShader.setUniform("u_mouse", s.map(s.mouseX, 0, params.canvasSize, 0, 7));
		theShader.setUniform('u_time', s.frameCount * 0.01);
		s.rect(0, 0, params.windowSize, params.windowSize);
	};
};

