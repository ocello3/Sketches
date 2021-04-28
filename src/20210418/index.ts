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
			s.noLoop();
		};
		s.draw = () => {
			params.frameRate = s.frameRate();
			if (params.isReSet) {
				dataObjs = Array.from(Array(params.dataObjCount), () => setTargetDataObj(params));
				params.isReSet = false;
				params.noteSeq = new Array();
			}
			const preDataObjs = dataObjs.slice();
			dataObjs = dataObjs.map((dataObj, index) => updateDataObj(dataObj, index)(params));
			drawFrame(s, params);
			drawBall(s, preDataObjs, dataObjs, params);
			props.synths.get('synth_1').set({frequency: dataObjs[0].freq, volume: dataObjs[0].volume});
			props.synths.get('synth_2').set({frequency: dataObjs[1].freq, volume: dataObjs[1].volume});
			props.synths.get('synth_3').set({frequency: dataObjs[2].freq, volume: dataObjs[2].volume});
			props.synths.get('synth_4').set({frequency: dataObjs[3].freq, volume: dataObjs[3].volume});
			props.synths.get('panner_1').set({pane: dataObjs[0].pane});
			props.synths.get('panner_2').set({pane: dataObjs[1].pane});
			props.synths.get('panner_3').set({pane: dataObjs[2].pane});
			props.synths.get('panner_4').set({pane: dataObjs[3].pane});
		};
	};
};
