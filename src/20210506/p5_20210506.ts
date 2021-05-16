import { sketch } from './index';
import { p5map } from '../types/p5map';

export const p5_20210506 = ():p5map => { // change name
	const p5map: p5map = {
		date: '20210506',
		title: 'Fall Box',
		note: 'Box fall to slope.',
		content: 'Experiment to create two difference sound at moment of the second hand advances.',
		sketch: sketch,
	}
	return p5map;
}

