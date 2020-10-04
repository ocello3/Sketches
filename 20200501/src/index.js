import P5 from 'p5';
// import Tweakpane from 'tweakpane';
import * as calc from './calc.js';
// import gui from './gui.js';

const sketch = (s) => {
	// const paneId = document.getElementById('pane');
	// const pane = new Tweakpane({ container:paneId });
	const windowSize = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
	const params = calc.getParams(windowSize);

	s.setup = () => {
		s.createCanvas(params.canvasSize, params.canvasSize);
		s.noLoop();
		// gui(pane, paneId, params);
	};

	s.draw = () => {
		// draw background
		s.background(255);
		// draw frame
		s.fill(0);
		s.rect(0, 0, params.canvasSize, params.canvasSize);
	};
};

new P5(sketch, 'p5js');

