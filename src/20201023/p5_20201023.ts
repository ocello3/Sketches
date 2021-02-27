'use strict';

import { sketch } from './index';

export const p5_20201023 = () => {
	const p5_map = new Map();
	p5_map.set('date', '20201023');
	p5_map.set('title', 'hello shader');
	p5_map.set('note', 'This is a test sketch to develop coverpage.')
	p5_map.set('sketch', sketch);
	return p5_map;
}
