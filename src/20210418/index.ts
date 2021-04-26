import { eP5 } from '../types/eP5';
import { props } from '../types/props';
import { params, setParams } from './setParams';
import { setSeqs } from './setSeqs';
import { setPane } from './setPane';
import { drawFrame, drawBall } from './drawFrame';
import { dataObj } from './dataObj';
import { setTargetDataObj } from './setTargetDataObj';
import { updateDataObj } from './updateDataObj';

export const sketch = (props: props) => {
	return (s: eP5): void => {
		const canvasDiv = document.getElementById('canvas');
		const params: params = setParams(canvasDiv.clientWidth);
		let dataObjs: dataObj[] = Array.from(Array(params.dataObjCount), () => setTargetDataObj(params));
		s.setup = () => {
			s.createCanvas(params.canvasSize, params.canvasSize);
			setSeqs(s, props, params);
			setPane(props, s, params);
			s.frameRate(30);
			s.noLoop();
		};
		s.draw = () => {
			// s.background(255);
			s.strokeWeight(3);
			params.frameRate = s.frameRate();
			if (params.isSet) {
				dataObjs = Array.from(Array(params.dataObjCount), () => setTargetDataObj(params));
				params.isSet = false;
			}
			dataObjs = dataObjs.map(dataObj => updateDataObj(dataObj)(params));
			drawFrame(s, params);
			drawBall(s, dataObjs);
			// s.textSize(50);
			// s.text(s.frameCount, params.canvasSize / 2, params.canvasSize / 2);
			// s.textAlign(s.CENTER);
		};
	};
};
