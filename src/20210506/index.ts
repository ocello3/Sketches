import { eP5 } from '../types/eP5';
import { props } from '../types/props';
import { params, setParams, updateParams} from './params';
import { setPane } from './pane';
import { setSeqs } from './seqs';
import { setBox } from './box/setBox';
import { updateBox } from './box/updateBox';
import { drawBox, drawSlope } from './box/drawBox';
import { drawFrame } from './frame';

export const sketch = (props: props) => {
	return (s: eP5): void => {
		const canvasDiv = document.getElementById('canvas');
		const params: params = setParams(canvasDiv.clientWidth);
		let boxes = Array.from(Array(params.dataObjCount), () => setBox(params));

		s.setup = () => {
			s.createCanvas(params.canvasSize, params.canvasSize);
			setPane(props, s, params);
			setSeqs(props, params);
			s.noLoop();
		};

		s.draw = () => {
			s.background(255);
			updateParams(s, params);
			boxes = boxes.map((box, index) => updateBox(box, index)(params));
			boxes.forEach((box, index) => {
				const isStatus = (box.status == 'rotating' || box.status == 'sliding');
				if(box.frameCount == 0 && isStatus) {
					if (index == 0) {
						props.synths.get('synth_1').volume.value = -10;
						props.synths.get('synth_1').triggerAttackRelease('C4', '8n');
					}
					if (index == 1) {
						props.synths.get('synth_2').volume.value = -10;
						props.synths.get('synth_2').triggerAttackRelease('C4', '8n');
					}
					if (index == 2) {
						props.synths.get('synth_3').volume.value = -10;
						props.synths.get('synth_3').triggerAttackRelease('C4', '8n');
					}
					if (index == 3) {
						props.synths.get('synth_4').volume.value = -10;
						props.synths.get('synth_4').triggerAttackRelease('C4', '8n');
					}
				}
			});
			drawBox(s, boxes, params);
			drawSlope(s, params);
			drawFrame(s, params);
			params.statusNoteNum = -1; // reset
		};
	};
};
