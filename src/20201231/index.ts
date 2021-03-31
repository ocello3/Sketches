import * as Tone from 'tone';
import { params, initParams } from './initParams';
import { initBall } from './initBall';
import { updateBall } from './updateBall';
import { eP5 } from '../types/eP5';
import { props } from '../types/props';
import { ball } from './ball';

export const sketch = (props: props) => {
	return (s: eP5) => {
		const synths = props.synths;
		const canvasDiv = document.getElementById('canvas');
		const params: params = initParams(canvasDiv.clientWidth);
		let balls = Array.from(Array((params as any).ballNum), (ball, index) => initBall(index)(params));
		const setPane = (props: props, params: params) => {
			const f1 = props.pane.addFolder({
				title: 'Control',
			});
			const ctrlButton = f1.addButton({
				title: 'start/stop',
			});
			ctrlButton.on('click', () => {
				if (!s.isLooping() && !params.isStarted) {
					for (const value of synths.values())
						value.start();
					params.isStarted = true;
				}
				if (!s.isLooping() && params.isStarted)
					Tone.Destination.mute = false;
				if (s.isLooping())
					Tone.Destination.mute = true;
				s.isLooping() ? s.noLoop() : s.loop();
			});
			f1.addMonitor(params, 'frameRate', {
				interval: 500,
			});
		};
		const drawFrame = (params: params): void => {
			s.push();
			s.stroke('black');
			s.strokeWeight(1);
			s.noFill();
			s.rect(0, 0, params.canvasSize, params.canvasSize);
			s.pop();
		};
		const drawBalls = (balls: ball[]) => {
			const edgeBall = balls[0];
			s.push();
			s.noFill();
			s.stroke(0);
			s.strokeWeight(1);
			s.beginShape();
			s.curveVertex(edgeBall.leftEdge.x, edgeBall.leftEdge.y);
			s.curveVertex(edgeBall.leftEdge.x, edgeBall.leftEdge.y);
			balls.forEach((ball: ball) => {
				s.curveVertex(ball.pos.x, ball.pos.y);
			});
			s.curveVertex(edgeBall.rightEdge.x, edgeBall.rightEdge.y);
			s.curveVertex(edgeBall.rightEdge.x, edgeBall.rightEdge.y);
			s.endShape();
			s.pop();
		};
		s.setup = () => {
			s.createCanvas((params as any).canvasSize, (params as any).canvasSize);
			s.noLoop();
			setPane(props, params);
		};
		s.draw = () => {
			balls = balls.map((ball) => updateBall(ball)(params, s.frameCount));
			s.background(255);
			drawFrame(params);
			drawBalls(balls);
			synths.get('amSynth_0').set({ volume: balls[0].volume });
			synths.get('amSynth_1').set({ volume: balls[1].volume });
			synths.get('amSynth_2').set({ volume: balls[2].volume });
			(params as any).frameRate = s.frameRate();
		};
	};
};

