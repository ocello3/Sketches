import { sketch } from './index';
import { p5map } from '../types/p5map';

export const p5_20200912 = ():p5map => {
	const p5map: p5map = {
		date: '20200912',
		title: 'flags',
		note: 'Three flags using quadraticVertex',
		content: 'Three flags are created using quadraticVertex. Each quadraticVertex points are moving vertical. The cycle for the right flag is shifting little by little.',
		sketch: sketch,
	}
	return p5map;
}

