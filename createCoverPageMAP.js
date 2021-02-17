import P5 from 'p5';
import Tweakpane from 'tweakpane';
import { getP5maps } from './getP5maps.js';

export const createCoverPageMap = (props) => {

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
			// get p5maps
			const p5maps = getP5maps();
			const getCreateP5 = (p5map) => {
				return function createP5 () {
					props.get('coverPage').remove();

					const container = s.createDiv().class('container');
					const row = s.createDiv().class('row').parent(container);
					s.createDiv().style('margin-top: 12%').class('one-half column').id('canvas').parent(row);
					s.createDiv().style('margin-top: 12%').class('one-half column').id('pane').parent(row);

					props.set('pane', new Tweakpane({
						container: document.getElementById('pane'),
					}));
					props.set('p5_20210201', new P5(p5map.get('sketch')(props), 'canvas'));

					s.createDiv('back to top').parent(container).style('color', '#1EAEDB').style('text-decoration', 'underline').style('cursor', 'pointer').mousePressed(backToTop);

					function backToTop () {
						props.get('pane').dispose();
						props.get('p5_20210201').remove();
						props.get('coverPage').remove();
						location.reload(false);
					}
				}
			}
			// contents
			for (const p5map of p5maps) {
				const createP5 = getCreateP5(p5map);
				const tbody = s.createElement('tbody').parent(table);
				const tbodyTr = s.createElement('tr').parent(tbody);
				s.createElement('td', p5map.get('date')).parent(tbodyTr);
				s.createElement('td', p5map.get('title')).parent(tbodyTr).style('color', '#1EAEDB').style('text-decoration', 'underline').style('cursor', 'pointer').mousePressed(createP5);

			}
		}
	}
}
