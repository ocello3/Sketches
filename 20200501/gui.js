import { createCoverPage } from '../index.js';
import P5 from 'p5';

const gui = (divs) => {
	const stop = divs.pane_20200501.addButton({
		title: 'stop',
	});
	stop.on('click', () => {
		divs.p5_20200501.remove();
		divs.pane_20200501.dispose();
		divs.coverPage = new P5(createCoverPage);
	});
}

export default gui;

