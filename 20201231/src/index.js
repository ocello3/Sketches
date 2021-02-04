'use strict';

import P5 from 'p5';
import * as Tone from 'tone';
import { initParams } from './initParams.js';

const sketch = (s) => {
	
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
		const isStart = confirm("Turn sound on?"); // after selected, return boolean value
		s.noLoop();
		if (isStart) {
			Tone.start();
			s.loop();
		} else {
			s.loop();
			Tone.Master.mute = true;
		}
	};

	s.draw = () => {
		s.background(255);
		drawFrame(params);
		s.text(s.frameCount, s.width/2, s.height/2)
	};
};

new P5(sketch, 'p5js');

