'use strict';

import { getParams } from './getParams.js';
import { calcInit } from './calcInit.js';
import { calcUpdate } from './calcUpdate.js';

export const sketch = (props) => {

	return (s) => {
		const canvasDiv = document.getElementById('canvas');
		const params = getParams(canvasDiv.clientWidth);
		const colorPalette = {
			green: s.color('green'),
			pink: s.color('pink'),
		};
		let snakes = Array.from(Array(params.snakeNum), (snake, snakeIndex) => calcInit(snakeIndex));
		snakes = snakes.map(func => func(params));

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
			s.createCanvas(params.canvasSize, params.canvasSize);
			setPane(props);
			s.noLoop();
		}

		s.draw = () => {
			// update snakes
			snakes = snakes.map((currentSnake, snakeIndex) => calcUpdate(currentSnake, snakeIndex));
			snakes = snakes.map(func => func(params));

			// draw background
			s.background(255);

			// draw frame
			// s.noFill();
			// s.rect(0, 0, params.canvasSize, params.canvasSize);

			// draw snake
			s.push();
			s.stroke(0);
			s.noFill();
			snakes.forEach((snake, snakeIndex) => {
				const posArray = snake.currentPosArray;
				const length = posArray.length;

				// draw line
				const initPos = posArray[0];
				const lastPos = posArray[length - 1];
				const colorIndex = 1.0 / params.snakeNum * snakeIndex * 1.5;
				const snakeColor = s.lerpColor(colorPalette.green, colorPalette.pink, colorIndex);
				for (let lineIndex = 0; lineIndex < params.lineNum; lineIndex++) {
					const alpha = 255 / 5 * (lineIndex + 1);
					s.push();
					s.noFill();
					snakeColor.setAlpha(alpha);
					s.stroke(snakeColor);
					s.beginShape();
					s.curveVertex(initPos.x + lineIndex, initPos.y);
					posArray.forEach((pos) => {
						s.curveVertex(pos.x + lineIndex, pos.y);
					});
					s.curveVertex(lastPos.x + lineIndex, lastPos.y);
					s.endShape();
					s.pop();
				}
			});
		}
	}
}
