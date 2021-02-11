'use strict';

import { initParams } from './initParams.js';

export const p5_20201130 = (s) => {
	
	const params = initParams(window.innerWidth, window.innerHeight);

	const drawFrame = (params) => {
		s.push();
		s.stroke('black');
		s.strokeWeight(1);
		s.noFill();
		s.rect(0, 0, params.canvasSize, params.canvasSize);
		s.pop();
	}

	s.setup = () => {
		s.createCanvas(params.canvasSize, params.canvasSize);
		s.noLoop();
	};

	s.draw = () => {
		s.background(255);
		drawFrame(params);
	};
};

