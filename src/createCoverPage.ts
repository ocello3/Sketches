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
					// remove coverPage
					props.get('coverPage').remove();
					// create divs
					const container = s.createDiv().class('container');
					const sketchRow = s.createDiv().class('row').parent(container).style('margin-top: 12%');
					s.createDiv().class('one-half column').id('canvas').parent(sketchRow);
					s.createDiv().class('one-half column').id('pane').parent(sketchRow);
					const buttonRow = s.createDiv().class('row').parent(container).style('margin-top: 2%');
					s.createDiv('back to top').parent(buttonRow).style('color', '#1EAEDB').style('text-decoration', 'underline').style('cursor', 'pointer').mousePressed(backToTop);
					const contentRow = s.createDiv().class('row').parent(container).style('margin-top: 6%');
					s.createElement('h5', p5map.get('title')).parent(contentRow);
					p5map.has('content')? s.createP(p5map.get('content')).parent(contentRow) : s.createP(p5map.get('note')).parent(contentRow);
					// add synths to props
					if (p5map.has('synths')) {
						const synthMap = p5map.get('synths')();
						props.set('synths', synthMap);
					}
					// add tweakpane to props
					props.set('pane', new Tweakpane({ container: document.getElementById('pane') }));
					// add p5js to props
					props.set('sketchPage', new P5(p5map.get('sketch')(props), 'canvas'));
					// prepare back to top function
					function backToTop () {
						if (props.has('synths')) {
							const synths = props.get('synths');
							for (const value of synths.values()) value.dispose();
						}
						props.get('pane').dispose();
						props.get('sketchPage').remove();
						props.get('coverPage').remove();
						props.clear();
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
