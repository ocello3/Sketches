import P5 from 'p5';
// import Tweakpane from 'tweakpane';
import { getParams } from './getParams.js';
import { calcInit } from './calcInit.js';
import { calcUpdate } from './calcUpdate.js';
// import gui from './gui.js';

const sketch = (s) => {
	// const paneId = document.getElementById('pane');
	// const pane = new Tweakpane({ container:paneId });
	const windowSize = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
	const params = getParams(windowSize);
	const colorPalette = {
		green: s.color('green'),
		pink: s.color('pink'),
	};
	let snakes = Array.from(Array(params.snakeNum), (snake, snakeIndex) => calcInit(snakeIndex));
	snakes = snakes.map(func => func(params));

	s.setup = () => {
		s.createCanvas(params.canvasSize, params.canvasSize);
		// s.noLoop();
		// gui(pane, paneId, params);
	};

	s.draw = () => {
		// update snakes
		snakes = snakes.map((currentSnake, snakeIndex) => calcUpdate(currentSnake, snakeIndex));
		snakes = snakes.map(func => func(params));

		// draw background
		s.background(255, 140);
		
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
			s.push();
			s.noFill();
			s.stroke(snakeColor);
			s.beginShape();
			s.curveVertex(initPos.x, initPos.y);
			posArray.forEach((pos) => {
				s.curveVertex(pos.x, pos.y);
			});
			s.curveVertex(lastPos.x, lastPos.y);
			s.endShape();
			s.pop();
		});
	};
};

new P5(sketch, 'p5js');

