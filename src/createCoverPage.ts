import P5 from 'p5';
import { Pane } from 'tweakpane';
import { initSketch } from './index';
import { getP5maps } from './getP5maps';
import { p5map } from './types/p5map';
import { props } from './types/props';

export const createCoverPage = (props: props) => {

	return (s: P5) => {
		s.setup = () => {
			s.noCanvas();

			// title
			const titleContainer = s.createDiv().class('container');
			const titleRow = s.createDiv().class('row').parent(titleContainer);
			const titleColumn = s.createDiv().class('one-half column').parent(titleRow).style('margin-top: 25%');
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
			const p5maps:p5map[] = getP5maps();
			const getCreateP5 = (p5map: p5map) => {
				return function createP5 () {
					// remove coverPage
					props.coverPage.remove();
					// create divs
					const container = s.createDiv().class('container');
					const sketchRow = s.createDiv().class('row').parent(container).style('margin-top: 12%');
					s.createDiv().class('one-half column').id('canvas').parent(sketchRow);
					s.createDiv().class('one-half column').id('pane').parent(sketchRow);
					const buttonRow = s.createDiv().class('row').parent(container).style('margin-top: 2%');
					s.createDiv('back to top').parent(buttonRow).style('color', '#1EAEDB').style('text-decoration', 'underline').style('cursor', 'pointer').mousePressed(backToTop);
					const contentRow = s.createDiv().class('row').parent(container).style('margin-top: 6%');
					s.createElement('h5', p5map.title).parent(contentRow);
					(p5map.content != null)? s.createP(p5map.content).parent(contentRow) : s.createP(p5map.note).parent(contentRow);
					// add synths to props
					if (p5map.synths != null) {
						const synthMap = p5map.synths();
						props.synths = synthMap;
					}
					// add tweakpane to props
					props.pane = new Pane({ container: document.getElementById('pane') });
					// add p5js to props
					props.sketchPage = new P5(p5map.sketch(props), document.getElementById('canvas'));
					// prepare back to top function
					function backToTop () {
						if (props.synths != null) {
							const synths = props.synths;
							for (const value of synths.values()) value.dispose();
						}
						props.pane.dispose();
						props.sketchPage.remove();
						props.coverPage.remove();
						props = { init: true };
						props.coverPage = new P5(initSketch);
					}
				}
			}
			// contents
			for (const p5map of p5maps) {
				const createP5 = getCreateP5(p5map);
				const tbody = s.createElement('tbody').parent(table);
				const tbodyTr = s.createElement('tr').parent(tbody);
				s.createElement('td', p5map.date).parent(tbodyTr);
				s.createElement('td', p5map.title).parent(tbodyTr).style('color', '#1EAEDB').style('text-decoration', 'underline').style('cursor', 'pointer').mousePressed(createP5);
				s.createElement('td', p5map.note).parent(tbodyTr);
			}
		}
	}
}
