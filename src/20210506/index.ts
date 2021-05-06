import { eP5 } from '../types/eP5';
import { props } from '../types/props';
import { params, setParams } from './setParams';
import { setPane } from './setPane';
import { drawFrame } from './draw';
import { dataObj } from './dataObj';

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
			params.frameRate = s.frameRate();
			drawFrame(s, params);
		};
	};
};
