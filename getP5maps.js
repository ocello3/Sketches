import { p5_20200501 } from './20200501/p5_20200501.js';
import { p5_20210201 } from './20210201/p5_20210201.js';

export const getP5maps = () => {
	const p5maps = [];
	p5maps.push(p5_20210201());
	p5maps.push(p5_20200501());
	return p5maps;
}

