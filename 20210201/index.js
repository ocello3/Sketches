'use strict';

import { initParams } from './initParams.js';

export const sketch = (props) => {

	return (s) => {

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

		const setPane = (props) => {
			const f1 = props.pane.addFolder({
				title: 'Control',
			});
			const stopButton = f1.addButton({
				title: 'stop',
			});
			stopButton.on('click', () => {
				console.log('clicked stop button');
			});
		}

		s.setup = () => {
			s.createCanvas(params.canvasSize, params.canvasSize);
			setPane(props);
			console.log('read setup()');
		}

		s.draw = () => {
			s.background(255);
			drawFrame();
			s.noLoop();
		}
	}
}
