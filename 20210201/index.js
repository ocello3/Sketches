'use strict';

import { initParams } from './initParams.js';
// import { divs } from '../index.js';

export const p5_20210201 = (s) => {
	
	const canvasDiv = document.getElementById('canvas');
	const params = initParams(canvasDiv.clientWidth);

	const drawFrame = () => {
		s.push();
		s.stroke('black');
		s.strokeWeight(1);
		s.noFill();
		s.rect(0, 0, params.canvasSize, params.canvasSize);
		s.line(0, 0, params.canvasSize, params.canvasSize);
		s.line(params.canvasSize, 0, 0, params.canvasSize);
		s.pop();
	}

	s.setup = () => {
		s.createCanvas(params.canvasSize, params.canvasSize);
		console.log('read setup()');
		console.log(`width: ${canvasDiv.clientWidth}`);
		console.log(`height: ${canvasDiv.clientHeight}`);
	};

	s.draw = () => {
		s.background(255);
		drawFrame();
		s.noLoop();
	};
};

