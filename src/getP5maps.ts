import { p5map } from './types/p5map';
import { p5_20200501 } from './20200501/p5_20200501';
import { p5_20200912 } from './20200912/p5_20200912';
import { p5_20201023 } from './20201023/p5_20201023';
import { p5_20201231 } from './20201231/p5_20201231';
import { p5_20210201 } from './20210201/p5_20210201';
import { p5_20210418 } from './20210418/p5_20210418';
import { p5_20210506 } from './20210506/p5_20210506';
import { p5_20210606 } from './20210606/p5_20210606';
import { p5_20210707 } from './20210707/p5_20210707';
// import { p5_YYYYMMDD } from './template/p5_YYYYMMDD'; // comment out

export const getP5maps = ():p5map[] => {
	const p5maps = [];
	// p5maps.push(p5_YYYYMMDD()); // comment out
	p5maps.push(p5_20210707());
	p5maps.push(p5_20210606());
	p5maps.push(p5_20210506());
	p5maps.push(p5_20210418());
	p5maps.push(p5_20210201());
	p5maps.push(p5_20201231());
	p5maps.push(p5_20201023());
	p5maps.push(p5_20200912());
	p5maps.push(p5_20200501());
	return p5maps;
}

