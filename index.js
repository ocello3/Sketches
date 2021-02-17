import P5 from 'p5';
import { createCoverPageMap } from './createCoverPageMap.js';

export const props = {};

const sketch = (s) => {
	s.setup = () => {
		s.noCanvas();
		const coverPageMap = createCoverPageMap(props);
		const coverPage = coverPageMap.get('coverPage');
		props.coverPage = new P5(coverPage);
	}
}

new P5(sketch, 'p5js');


