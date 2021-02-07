'use strict';

import P5 from 'p5';
import * as Tone from 'tone';
import { initParams } from './initParams.js';
import { initBall } from './initBall.js';
import { updateBall } from './updateBall.js';

const sketch = (s) => {
	
	const params = initParams(window.innerWidth, window.innerHeight);
	let balls = Array.from(Array(params.ballNum), (ball, index) => initBall(index)(params));

	const drawFrame = (params) => {
		s.push();
		s.stroke('black');
		s.strokeWeight(1);
		s.noFill();
		s.rect(0, 0, params.canvasSize, params.canvasSize);
		s.pop();
	}

	const drawBall = (ball) => {
		s.push();
		s.fill(0);
		s.noStroke();
		s.circle(ball.pos.x, ball.pos.y, 10);
		s.pop();
	}

	const confirmFunc = (params) => {
		if (params.isStart) {
			Tone.start();
			s.loop();
		} else {
			s.loop();
			Tone.Master.mute = true;
		}
	}

	s.setup = () => {
		s.createCanvas(params.canvasSize, params.canvasSize);
		s.noLoop();
		confirmFunc(params);
	};

	s.draw = () => {
		balls = balls.map((ball) => updateBall(ball)(params, s.frameCount));
		s.background(255);
		drawFrame(params);
		balls.forEach((ball) => drawBall(ball));
	};
};

new P5(sketch, 'p5js');

