import P5 from 'p5';
import { createCoverPageMap } from './createCoverPageMap.js';

export const divs = {};

const sketch = (s) => {
	s.setup = () => {
		s.noCanvas();
		const coverPageMap = createCoverPageMap();
		const coverPage = coverPageMap.get('coverPage');
		divs.coverPage = new P5(coverPage);
	}
}

new P5(sketch, 'p5js');


