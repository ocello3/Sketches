import { sketch } from './index';
import { synths } from './synths';
import { p5map } from '../types/p5map';

export const p5_20210418 = ():p5map => { // change name
	const p5map: p5map = {
		date: '20210418',
		title: 'Pattern',
		note: 'Developing',
		content: 'template content',
		sketch: sketch,
		synths: synths,
	}
	return p5map;
}

