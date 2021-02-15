import P5 from 'p5';
import Tweakpane from 'tweakpane';
import { p5_20200501 } from './20200501/index.js';
import { p5_20210201 } from './20210201/index.js';

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
		const div_container = s.createDiv();
		div_container.class('container');

		const div_row = s.createDiv();
		div_row.class('row');
		div_row.parent(div_container);

		const div_rowTitle = s.createDiv();
		div_rowTitle.class('one-half column');
		div_rowTitle.style('margin-top: 25%');
		div_rowTitle.parent(div_row);

		const h2_title = s.createElement('h2', 'Sketch List');
		h2_title.parent(div_rowTitle);

		// header
		const div_rowHeader = s.createDiv();
		div_rowHeader.class('row');
		div_rowHeader.parent(div_rowTitle);

		const div_dateHeader = s.createDiv('Date');
		div_dateHeader.class('four columns');
		div_dateHeader.parent(div_rowHeader);

		const div_titleHeader = s.createDiv('Title');
		div_titleHeader.class('four columns');
		div_titleHeader.parent(div_rowHeader);

		// line
		const div_line = s.createDiv('<br>');
		div_line.class('row');
		div_line.parent(div_rowHeader);
		const line = s.createElement('hr');
		line.parent(div_line);

		// sketch 1
		const div_row20200501 = s.createDiv();
		div_row20200501.class('row');
		div_row20200501.parent(div_rowHeader);

		const div_date20200501 = s.createDiv('20200501');
		div_date20200501.class('four columns');
		div_date20200501.parent(div_row20200501);
		
		const div_title20200501 = s.createA('javascript: void(0);', 'snake');
		div_title20200501.class('four columns');
		div_title20200501.mousePressed(createP5_20200501);
		div_title20200501.parent(div_row20200501);
		
		// sketch 2
		const div_row20210201 = s.createDiv();
		div_row20210201.class('row');
		div_row20210201.parent(div_rowHeader);

		const div_date20210201 = s.createDiv('20210201');
		div_date20210201.class('four columns');
		div_date20210201.parent(div_row20210201);
		
		const div_title20210201 = s.createA('javascript: void(0);', 'div');
		div_title20210201.class('four columns');
		div_title20210201.mousePressed(createP5_20210201);
		div_title20210201.parent(div_row20210201);

		function createP5_20210201 () {
			divs.coverPage.remove();
			
			divs.canvasHeader = s.createDiv();
			divs.canvasHeader.class('container');
			
			divs.canvasDiv = s.createDiv();
			divs.canvasDiv.class('row');
			divs.canvasDiv.parent(divs.canvasHeader);
			
			divs.canvasDiv_p5 = s.createDiv();
			divs.canvasDiv_p5.style('margin-top: 15%');
			divs.canvasDiv_p5.class('one-half column');
			divs.canvasDiv_p5.id('canvas');
			divs.canvasDiv_p5.parent(divs.canvasDiv);
			divs.p5_20210201 = new P5(p5_20210201, 'canvas');

			divs.canvasDiv_tone = s.createDiv();
			divs.canvasDiv_tone.style('margin-top: 15%');
			divs.canvasDiv_tone.class('one-half column');
			divs.canvasDiv_tone.id('tone');
			divs.canvasDiv_tone.parent(divs.canvasDiv);
			divs.tone_20210201 = new P5(p5_20210201, 'tone');

			divs.removeDiv_p5 = s.createA('javascript: void(0);', 'back to top');
			divs.removeDiv_p5.parent(divs.canvasHeader);
		}
	}
}

const createP5_20200501 = () => {
	divs.pane_20200501 = new Tweakpane();
	divs.p5_20200501 = new P5(p5_20200501);
	divs.coverPage.remove();
}


