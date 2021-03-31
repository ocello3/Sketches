import { sketch } from './index';
import { p5map } from '../types/p5map';

export const p5_20200501 = ():p5map => {
	const p5map: p5map = {
		date: '20200501',
		title: 'snake',
		note: 'This is a test sketch to develop coverpage.',
		content: 'This is a test content for div test sketch.<br>This conten should be shown below the canvas.<br>Last row.',
		sketch: sketch,
	}
	return p5map;
}

