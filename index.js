import P5 from 'p5';
import { createCoverPageMap } from './createCoverPageMap.js';

export const props = {};

const sketch = (s) => {
	s.setup = () => {
		s.noCanvas();
		const coverPageMap = createCoverPageMap(props);
		props.coverPage = new P5(coverPageMap.get('coverPage'));
	}
}

new P5(sketch, 'p5js');


