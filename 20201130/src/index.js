import P5 from 'p5';
import Tweakpane from 'tweakpane';
import * as calc from './calc.js';
import gui from './gui.js';

const sketch = (s) => {
	const paneId = document.getElementById('pane');
	const pane = new Tweakpane({ container:paneId });
	const windowSize = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
	const params = calc.getParams(windowSize);
	const colorPalette = [s.color(108, 160, 220), s.color(249, 228, 236), s.color(119, 221, 119)];
	let flags = Array.from(Array(3), (flag, index) => calc.initFlag(index));
	flags = flags.map(func => func(params));

	s.setup = () => {
		s.createCanvas(params.canvasSize, params.canvasSize);
		// s.noLoop();
		// gui(pane, paneId, params);
	};

	s.draw = () => {
		// calc
		flags = flags.map((flag, index) => calc.updateFlag(flag, index));
		flags = flags.map(func => func(params));
		// draw background
		s.background(255);
		// draw bar
		s.push();
		s.stroke(0);
		s.strokeWeight(1);
		s.line(0, flags[0].startPos.y, params.canvasSize, flags[0].startPos.y);
		s.pop();
		// draw flags
		flags.forEach((flag, index) => {
			s.push();
			s.fill(colorPalette[index]);
			s.translate(flag.startPos.x, flag.startPos.y);
			s.beginShape();
			s.vertex(0, 0);
			s.quadraticVertex(flag.leftCtrl.x, flag.leftCtrl.y, flag.leftAnchor.x, flag.leftAnchor.y);
			s.quadraticVertex(flag.rightCtrl.x, flag.rightCtrl.y, flag.rightAnchor.x, flag.rightAnchor.y);
			s.vertex(flag.endPos.x, flag.endPos.y);
			s.endShape(s.CLOSE);
			s.pop();
		});
	};
};

new P5(sketch, 'p5js');

