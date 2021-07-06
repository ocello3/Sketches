import { sketch } from './index';
import { p5map } from '../types/p5map';

export const p5_20210707 = ():p5map => { // change name
	const p5map: p5map = {
		date: '20210707',
		title: 'Sheard Font',
		note: 'Sheard Font',
		content: 'Sheard Font',
		sketch: sketch,
		synths: undefined,
	}
	return p5map;
}

