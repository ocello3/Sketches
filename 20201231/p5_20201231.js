'use strict';

import { sketch } from './index.js';
import { synths } from './synths.js';

export const p5_20201231 = () => {
	const p5map = new Map();
	p5map.set('date', '20201231');
	p5map.set('title', 'hello tone');
	p5map.set('note', 'This is a test sketch to develop coverpage.')
	p5map.set('sketch', sketch);
	p5map.set('synths', synths);
	return p5map;
}

