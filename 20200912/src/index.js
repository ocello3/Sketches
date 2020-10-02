import P5 from 'p5';
import Tweakpane from 'tweakpane';
import * as calc from './calc.js';
import gui from './gui.js';

const sketch = (s) => {
	const paneId = document.getElementById('pane');
	const pane = new Tweakpane({ container:paneId });
	const params = calc.getParams();
	const circlePos = calc.circlePos(params);

	s.setup = () => {
		s.createCanvas(params.canvasSize, params.canvasSize);
		s.noLoop();
		s.frameRate(2);
		gui(pane, paneId, params);
	};

	s.draw = () => {
		s.background(255);
		s.strokeWeight(10);
		s.noFill();
		s.rect(0, 0, s.width, s.height);
		s.circle(circlePos.x, circlePos.y, params.circleRadius);
	};
};

new P5(sketch, 'p5js');

