import P5 from 'p5';
import Tweakpane from 'tweakpane';
import { initSketch } from './index.js';
import { getP5maps } from './getP5maps.js';

export const createCoverPage = (props) => {

	return (s) => {
		s.setup = () => {
			s.noCanvas();

			// title
			const titleContainer = s.createDiv().class('container');
			const titleRow = s.createDiv().class('row').parent(titleContainer);
			const titleColumn = s.createDiv().class('one-half column').style('margin-top: 25%').parent(titleRow);
			s.createElement('h2', 'Sketch List').parent(titleColumn);
			
			// table template
			const table = s.createElement('table').class('u-full-width').parent(titleContainer);
			
			// header
			const thead = s.createElement('thead').parent(table);
			const theadTr = s.createElement('tr').parent(thead);
			s.createElement('th', 'Date').parent(theadTr);
			s.createElement('th', 'Name').parent(theadTr);
			s.createElement('th', 'Note').parent(theadTr);
			
			// prepare p5 sketch page
			const p5maps = getP5maps();
			const getCreateP5 = (p5map) => {
				return function createP5 () {
					props.get('coverPage').remove();

					const container = s.createDiv().class('container');
					const sketchRow = s.createDiv().class('row').parent(container).style('margin-top: 12%');
					s.createDiv().class('one-half column').id('canvas').parent(sketchRow);
					s.createDiv().class('one-half column').id('pane').parent(sketchRow);
					props.set('pane', new Tweakpane({
						container: document.getElementById('pane'),
					}));
					props.set('sketchPage', new P5(p5map.get('sketch')(props), 'canvas'));
					
					const buttonRow = s.createDiv().class('row').parent(container).style('margin-top: 2%');
					s.createDiv('back to top').parent(buttonRow).style('color', '#1EAEDB').style('text-decoration', 'underline').style('cursor', 'pointer').mousePressed(backToTop);

					function backToTop () {
						props.get('pane').dispose();
						props.get('sketchPage').remove();
						props.get('coverPage').remove();
						props.set('coverPage', new P5(initSketch));
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
				s.createElement('td', p5map.get('note')).parent(tbodyTr);
			}
		}
	}
}
