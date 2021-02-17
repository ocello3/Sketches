import P5 from 'p5';
import { createCoverPageMap } from './createCoverPageMap.js';


const sketch = (s) => {
	s.setup = () => {
		s.noCanvas();
		const props = new Map();
		const coverPage = createCoverPageMap(props);
		props.set('coverPage', new P5(coverPage));
	}
}

new P5(sketch, 'p5js');


