import P5 from 'p5';
import Tweakpane from 'tweakpane';
import { p5_20210201 } from './20210201/p5_20210201.js';
import { divs } from './index.js';

export const createCoverPageDOM = () => {

	return (s) => {
		s.setup = () => {
			s.noCanvas();

			// title
			const titleContainer = s.createDiv().class('container');
			const titleRow = s.createDiv().class('row').parent(titleContainer);
			const titleColumn = s.createDiv().class('one-half column').style('margin-top: 25%').parent(titleRow);
			s.createElement('h2', 'Sketch List').parent(titleColumn);

			// table template
			const table = s.createElement('table').class('u-full-width').parent(titleContainer); // needToEdit
			// header
			const thead = s.createElement('thead').parent(table);
			const theadTr = s.createElement('tr').parent(thead);
			s.createElement('th', 'Date').parent(theadTr);
			s.createElement('th', 'Name').parent(theadTr);
			// get p5 element
			const p5_map = p5_20210201();
			// contents
			const tbody = s.createElement('tbody').parent(table);
			const tbodyTr = s.createElement('tr').parent(tbody);
			s.createElement('td', p5_map.get('date')).parent(tbodyTr);
			s.createElement('td', p5_map.get('title')).parent(tbodyTr).style('color', '#1EAEDB').style('text-decoration', 'underline').style('cursor', 'pointer').mousePressed(createP5_20210201);

			function createP5_20210201 () {
				divs.coverPage.remove();

				divs.canvasHeader = s.createDiv();
				divs.canvasHeader.class('container');

				divs.canvasDiv = s.createDiv();
				divs.canvasDiv.class('row');
				divs.canvasDiv.parent(divs.canvasHeader);

				divs.canvasDiv_p5 = s.createDiv();
				divs.canvasDiv_p5.style('margin-top: 12%');
				divs.canvasDiv_p5.class('one-half column');
				divs.canvasDiv_p5.id('canvas');
				divs.canvasDiv_p5.parent(divs.canvasDiv);

				divs.canvasDiv_pane = s.createDiv();
				divs.canvasDiv_pane.style('margin-top: 12%');
				divs.canvasDiv_pane.class('one-half column');
				divs.canvasDiv_pane.id('pane');
				divs.canvasDiv_pane.parent(divs.canvasDiv);

				divs.pane = new Tweakpane({
					container: document.getElementById('pane'),
				});
				divs.p5_20210201 = new P5(p5_map.get('sketch'), 'canvas');

				divs.removeDiv_p5 = s.createA('javascript: void(0);', 'back to top');
				divs.removeDiv_p5.parent(divs.canvasHeader);
			}
		}
	}
}
