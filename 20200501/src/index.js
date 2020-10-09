import P5 from 'p5';
// import Tweakpane from 'tweakpane';
import * as calc from './calc.js';
// import gui from './gui.js';

const sketch = (s) => {
	// const paneId = document.getElementById('pane');
	// const pane = new Tweakpane({ container:paneId });
	const windowSize = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
	const params = calc.getParams(windowSize);
	const colorPalette = {
		color_1: s.color('blue'),
		color_2: s.color('red'),
	};
	let snakes = Array.from(Array(params.snakeCount), (snake, index) => calc.initSnake(index));
	snakes = snakes.map(func => func(params));

	s.setup = () => {
		s.createCanvas(params.canvasSize, params.canvasSize);
		s.noLoop();
		// gui(pane, paneId, params);
	};

	s.draw = () => {
		snakes = snakes.map((snake) => calc.updateSnake(snake));
		snakes = snakes.map(func => func(params));
		// draw background
		s.background(255);
		// draw frame
		s.fill(0);
		s.rect(0, 0, params.canvasSize, params.canvasSize);
		// prepare draw snake function
		const drawSnake = (snake, index, self) => {
			const lerpVal = index / (self.length - 1);
			const snakeColor = s.lerpColor(params.colorPalette.color_1, params.colorPalette.color_2, lerpVal);
			s.push();
			s.fill(snakeColor);
			s.beginShape();
			snake.currentVecArray.forEach(vec => { s.curveVertex(vec.x, vec.y); });
			s.endShape(s.CLOSE);
			s.pop();
		};
		// draw snake
		s.push();
		s.noStroke();
		s.fill(0);
		snakes.forEach((snake, index, self) => drawSnake(snake, index, self));
	};
};

new P5(sketch, 'p5js');

