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
			updateParams(s, params);
			drawFrame(s, params);
		};
	};
};
