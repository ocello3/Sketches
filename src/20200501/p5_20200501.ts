import { sketch } from './index';
import { p5map } from '../types/p5map';

export const p5_20200501 = ():p5map => {
	const p5map: p5map = {
		date: '20200501',
		title: 'snakes',
		note: 'Shrinking/Expanding five snakes',
		content: 'Each snake is shaped with ten points connected by five lines. To shrink, points without the head move to the head. To expand, points without the tail move forward. Each seaquence duration and easing factor are randamized.',
		sketch: sketch,
	}
	return p5map;
}

