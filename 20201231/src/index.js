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

	const drawBalls = (balls) => {
		const edgeBall = balls[0];
		s.push();
		s.fill(0);
		s.noStroke();
		s.beginShape();
		s.curveVertex(edgeBall.leftEdge.x, edgeBall.leftEdge.y);
		s.curveVertex(edgeBall.leftEdge.x, edgeBall.leftEdge.y);
		balls.forEach((ball) => {
			s.curveVertex(ball.pos.x, ball.pos.y);
		});
		s.curveVertex(edgeBall.rightEdge.x, edgeBall.rightEdge.y);
		s.curveVertex(edgeBall.rightEdge.x, edgeBall.rightEdge.y);
		s.endShape();
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
		drawBalls(balls);
	};
};

new P5(sketch, 'p5js');

