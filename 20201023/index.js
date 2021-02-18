'use strict';

import { getParams } from './getParams.js';
import vert from './shader/shader.vert';
import frag from './shader/shader.frag';

export const sketch = (props) => {

	return (s) => {
		const canvasDiv = document.getElementById('canvas');
		const params = getParams(canvasDiv.clientWidth);
		let theShader;

		const setPane = (props) => {
			const f1 = props.get('pane').addFolder({
				title: 'Control',
			});
			const stopButton = f1.addButton({
				title: 'start/stop',
			});
			stopButton.on('click', () => {
				s.isLooping() ? s.noLoop() : s.loop();
			});
		}

		s.setup = () => {
			s.createCanvas(params.canvasSize, params.canvasSize, s.WEBGL);
			s.noStroke();
			s.noLoop();
			theShader = s.createShader(vert, frag);
			setPane(props);
		}

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
		}
	}
}
