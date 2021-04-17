import { eP5 } from '../types/eP5';
import { props } from '../types/props';
import { params, initParams } from './initParams';
import { getSeqs } from './getSeqs';
import { setPane } from './setPane';
import { drawFrame } from './drawFrame';

export const sketch = (props: props) => {
	return (s: eP5): void => {
		const canvasDiv = document.getElementById('canvas');
		const params: params = initParams(canvasDiv.clientWidth);
		s.setup = () => {
			s.createCanvas(params.canvasSize, params.canvasSize);
			getSeqs(props, params);
			setPane(props, s, params);
			s.noLoop();
		};
		s.draw = () => {
			s.background(255);
			params.frameRate = s.frameRate();
			drawFrame(s, params);
			s.frameRate(30);
			s.textSize(50);
			// s.text(s.frameCount, params.canvasSize / 2, params.canvasSize / 2);
			s.textAlign(s.CENTER);
			s.text(params.note_1, params.canvasSize /3, params.canvasSize /2);
			s.text(params.note_2, params.canvasSize *2/3, params.canvasSize /2);
		};
	};
};
