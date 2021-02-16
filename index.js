import P5 from 'p5';
import { createCoverPageDOM } from './createCoverPageDOM.js';

export const divs = {};

const sketch = (s) => {
	s.setup = () => {
		s.noCanvas();
		const createCoverPage = createCoverPageDOM();
		divs.coverPage = new P5(createCoverPage);
	}
}

new P5(sketch, 'p5js');


