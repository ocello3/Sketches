'use strict';

import { sketch } from './index.js';

export const p5_20210201 = () => {
	const p5_map = new Map();
	p5_map.set('date', '20210201');
	p5_map.set('title', 'div test');
	p5_map.set('note', 'This is a test sketch to develop coverpage.');
	p5_map.set('content', 'This is a test content for div test sketch.<br>This conten should be shown below the canvas.<br>Last row.');
	p5_map.set('sketch', sketch);
	return p5_map;
}

