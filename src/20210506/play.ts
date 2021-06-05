import { box } from './box/setBox';
import { params } from './params';
import { eP5 } from '../types/eP5';
import { props } from '../types/props';

export const play = (s:eP5, props:props, boxes:box[], params:params):void => {
	const playSynth = (box:box, index:number):void => {
		const boxSize = {
			min: params.canvasSize * params.boxSizeRate.min,
			max: params.canvasSize * params.boxSizeRate.max,
		}
		const volume = s.map(box.boxWidth, boxSize.min, boxSize.max, params.volume.min, params.volume.max);
		const pan = s.map(box.boxPos_rowRight.x, 0, params.canvasSize, -1, 1);
		const notes = ['C4', 'D4', 'E4', 'G4', 'A4'];
		props.synths.get('panner_0').pan.value = pan;
		props.synths.get('synth_0').set({
			harmonicity: params.harmonicity,
			resonance: params.resonance,
			modulationIndex: params.modulationIndex,
			envelope: {
				decay: params.decay,
			},
			volume: volume,
		});
		props.synths.get('synth_0').triggerAttackRelease(notes[index], '8n');
	}
	
	for (let index = 0; index < params.dataObjCount; index++) {
		if (boxes[index].frameCount == 0 && boxes[index].status == 'sliding') {
			playSynth(boxes[index], index);
			break;
		} 
	}
}

