import P5 from 'p5';
import Tweakpane from 'tweakpane';
import { p5_20210201 } from './20210201/p5_20210201.js';
// import { props } from './index.js';

export const createCoverPageMap = (props) => {

	const coverPageMap = new Map();

	const coverPage = (s) => {
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
				props.coverPage.remove();

				props.canvasHeader = s.createDiv();
				props.canvasHeader.class('container');

				props.canvasDiv = s.createDiv();
				props.canvasDiv.class('row');
				props.canvasDiv.parent(props.canvasHeader);

				props.canvasDiv_p5 = s.createDiv();
				props.canvasDiv_p5.style('margin-top: 12%');
				props.canvasDiv_p5.class('one-half column');
				props.canvasDiv_p5.id('canvas');
				props.canvasDiv_p5.parent(props.canvasDiv);

				props.canvasDiv_pane = s.createDiv();
				props.canvasDiv_pane.style('margin-top: 12%');
				props.canvasDiv_pane.class('one-half column');
				props.canvasDiv_pane.id('pane');
				props.canvasDiv_pane.parent(props.canvasDiv);

				props.pane = new Tweakpane({
					container: document.getElementById('pane'),
				});
				const sketchFunc = p5_map.get('sketch');
				props.p5_20210201 = new P5(sketchFunc(props), 'canvas');

				props.removeDiv_p5 = s.createA('javascript: void(0);', 'back to top');
				props.removeDiv_p5.parent(props.canvasHeader);
			}
		}
	}
	coverPageMap.set('coverPage', coverPage);
	return coverPageMap;
}
