import P5 from 'p5';
import Tweakpane from 'tweakpane';
import { p5_20200501 } from './20200501/index.js';

export const divs = {};

const sketch = (s) => {

	s.setup = () => {
		s.noCanvas();
		divs.coverPage = new P5(createCoverPage);
	}
}

new P5(sketch, 'p5js');

export const createCoverPage = (s) => {
	s.setup = () => {
		s.noCanvas();
		const first = s.createDiv();
		first.class('container');
		const second = s.createDiv();
		second.class('row');
		second.parent(first);
		const third = s.createDiv();
		third.class('one-half column');
		third.style('margin-top: 25%');
		third.parent(second);
		const fourth = s.createElement('h2', 'Sketch List');
		fourth.parent(third);
		const date_20200501 = s.createP('20200501	');
		date_20200501.parent(fourth);
		const title_20200501 = s.createA('javascript: void(0);', 'snake');
		title_20200501.mousePressed(createP5_20200501);
		title_20200501.parent(fourth);
	}
}

const createP5_20200501 = () => {
	divs.pane_20200501 = new Tweakpane();
	divs.p5_20200501 = new P5(p5_20200501);
	divs.coverPage.remove();
}

