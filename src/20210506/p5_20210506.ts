import { sketch } from './index';
// import { synths } from './synths';
import { p5map } from '../types/p5map';

export const p5_20210506 = ():p5map => { // change name
	const p5map: p5map = {
		date: '20210506',
		title: 'Sink into Slope',
		note: 'Boxes collide and sink into slope.',
		content: 'Boxes falls to slope. When boxes clash to slope, the height start to shrink and start to sink. Refer <a href="https://scrapbox.io/ocello3blog/FallingBox_20210506" target="_blank" rel="noopener noreferrer">this link</a> to see development log.',
		sketch: sketch,
		// synths: synths,
	}
	return p5map;
}

