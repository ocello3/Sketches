'use strict';

import * as Tone from 'tone';
import { initParams } from './initParams.js';
import { initBall } from './initBall.js';
import { updateBall } from './updateBall.js';

export const sketch = (props) => {
	return (s) => {

		const synths = props.get('synths');
		const canvasDiv = document.getElementById('canvas');
		const params = initParams(canvasDiv.clientWidth);
		let balls = Array.from(Array(params.ballNum), (ball, index) => initBall(index)(params));

		const setPane = (props, params) => {
			const f1 = props.get('pane').addFolder({
				title: 'Control',
			});
			const ctrlButton = f1.addButton({
				title: 'start/stop',
			});
			ctrlButton.on('click', () => {	
				// synths.get('amSynth').start()
				if (!s.isLooping() && !params.isStarted) {
					for (const value of synths.values()) {
						value.start();
					}
					params.isStarted = true;
				}
				if (!s.isLooping() && params.isStarted) Tone.Master.mute = false;
				if (s.isLooping()) Tone.Master.mute = true;
				s.isLooping() ? s.noLoop() : s.loop();
			});
		}

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
			s.noFill();
			s.stroke(0);
			s.strokeWeight(1);
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

		s.setup = () => {
			s.createCanvas(params.canvasSize, params.canvasSize);
			s.noLoop();
			setPane(props, params);
		};

		s.draw = () => {
			balls = balls.map((ball) => updateBall(ball)(params, s.frameCount));
			s.background(255);
			drawFrame(params);
			drawBalls(balls);
		}
	}
}
