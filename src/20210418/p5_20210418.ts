import { sketch } from './index';
import { synths } from './synths';
import { p5map } from '../types/p5map';

export const p5_20210418 = ():p5map => { // change name
	const p5map: p5map = {
		date: '20210418',
		title: 'Pattern',
		note: 'Easing by constant acceleration motion and switched by Tone.Sequence',
		content: 'Easing motion is implemented using initial velocity and acceleration. These parameters are restricted by duration and targetPosition. Switching timing is controled by Tone.Sequence. Refer <a href="https://scrapbox.io/ocello3blog/Easing_20210418" target="_blank" rel="noopener noreferrer">this link</a> to see how to implement them.',
		sketch: sketch,
		synths: synths,
	}
	return p5map;
}

