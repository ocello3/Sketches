import { eP5 } from '../types/eP5';
import { props } from '../types/props';
import { params, setParams, updateParams} from './params';
import { setPane } from './pane';
import { drawFrame } from './frame';

export const sketch = (props: props) => {
	return (s: eP5): void => {
		const canvasDiv = document.getElementById('canvas');
		const params: params = setParams(canvasDiv.clientWidth);

		s.setup = () => {
			s.createCanvas(params.canvasSize, params.canvasSize);
			setPane(props, s, params);
			s.noLoop();
		};

		s.draw = () => {
			s.background(255);
			updateParams(s, params);
			drawFrame(s, params);
			params.angle += 0.1;
			
			s.push();
			s.translate(params.canvasSize * 0.5, params.canvasSize * 0.5);
			s.shearX(params.angle);
			s.textAlign(s.CENTER, s.CENTER);
			s.textSize(params.canvasSize * 0.3);
			s.text('A', 0, 0);
			s.pop();
		};
	};
};
