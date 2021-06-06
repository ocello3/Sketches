import { sketch } from './index';
import { synths } from './synths';
import { p5map } from '../types/p5map';

export const p5_20210606 = ():p5map => { // change name
	const p5map: p5map = {
		date: '20210506',
		title: 'Cassette Tape',
		note: 'Cassette Tape Simulation.',
		content: 'Cassette Tape Simulation.',
		sketch: sketch,
		synths: synths,
	}
	return p5map;
}

