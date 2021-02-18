import P5 from 'p5';
import Tweakpane from 'tweakpane';

export const getCreateP5 = (props, p5map) => {
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

		s.createDiv('back to top').parent(container).style('line-height: 2').style('color', '#1EAEDB').style('text-decoration', 'underline').style('cursor', 'pointer').mousePressed(backToTop);

		function backToTop () {
			props.get('pane').dispose();
			props.get('p5_20210201').remove();
			props.get('coverPage').remove();
			location.reload(false);
		}
	}
}
