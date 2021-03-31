import { p5_20200501 } from './20200501/p5_20200501';
import { p5_20200912 } from './20200912/p5_20200912';
import { p5_20201023 } from './20201023/p5_20201023';
import { p5_20201231 } from './20201231/p5_20201231';
import { p5_20210201 } from './20210201/p5_20210201';
import { p5map } from './types/p5map';

export const getP5maps = ():p5map[] => {
	const p5maps = [];
	p5maps.push(p5_20210201());
	p5maps.push(p5_20201231());
	p5maps.push(p5_20201023());
	p5maps.push(p5_20200912());
	p5maps.push(p5_20200501());
	return p5maps;
}
