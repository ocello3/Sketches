import { sketch } from './index';
import { synths } from './synths';
import { p5map } from '../types/p5map';

export const p5_20201231 = ():p5map => {
	const p5map: p5map = {
		date: '20201231',
		title: 'hello tone',
		note: 'Control sound volume using coordinate in canvas',
		content: 'Three points are connected using curveVertex and are moving vertical. Three sound source have each difference interval and their volumes are controled by coordinates of three points. Refer <a href="https://scrapbox.io/ocello3blog/Tone.js_with_P5.js" target="_blank" rel="noopener noreferrer">this link</a> to see how to implement them.',
		sketch: sketch,
		synths: synths,
	}
	return p5map;
}

