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
		const container = s.createDiv();
		container.class('container');

		const row = s.createDiv();
		row.class('row');
		row.parent(container);

		const titleColumn = s.createDiv();
		titleColumn.class('one-half column');
		titleColumn.style('margin-top: 25%');
		titleColumn.parent(row);

		const title = s.createElement('h2', 'Sketch List');
		title.parent(titleColumn);

		// header

		const header = s.createDiv();
		header.class('row');
		header.parent(titleColumn);

		const date_header = s.createDiv('Date');
		date_header.class('four columns');
		date_header.parent(header);

		const title_header = s.createDiv('Title');
		title_header.class('four columns');
		title_header.parent(header);

		// line

		const lineDev = s.createDiv('<br>');
		lineDev.class('row');
		lineDev.parent(header);
		const line = s.createElement('hr');
		line.parent(lineDev);

		// sketch 1

		const sketch_20200501 = s.createDiv();
		sketch_20200501.class('row');
		sketch_20200501.parent(header);

		const date_20200501 = s.createDiv('20200501');
		date_20200501.class('four columns');
		date_20200501.parent(sketch_20200501);
		
		const title_20200501 = s.createA('javascript: void(0);', 'snake');
		title_20200501.class('four columns');
		title_20200501.mousePressed(createP5_20200501);
		title_20200501.parent(sketch_20200501);
		
		// sketch 2

		const sketch_20210201 = s.createDiv();
		sketch_20210201.class('row');
		sketch_20210201.parent(header);

		const date_20210201 = s.createDiv('20200501');
		date_20210201.class('four columns');
		date_20210201.parent(sketch_20210201);
		
		const title_20210201 = s.createA('javascript: void(0);', 'div test');
		title_20210201.class('four columns');
		title_20210201.mousePressed(createP5_20200501);
		title_20210201.parent(sketch_20210201);
	}
}

const createP5_20200501 = () => {
	divs.pane_20200501 = new Tweakpane();
	divs.p5_20200501 = new P5(p5_20200501);
	divs.coverPage.remove();
}

