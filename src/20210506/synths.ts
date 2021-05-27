import * as Tone from 'tone';
import { box } from './box/setBox';
import { params } from './params';
import { eP5 } from '../types/eP5';
import { props } from '../types/props';

export const synths = () => {
	const synthMap = new Map();
	
	const main = new Tone.Limiter(-15).toDestination();
	synthMap.set('main', main);

	const channel = new Tone.Channel(-10).connect(main);

	const panner_0 = new Tone.Panner(0).connect(channel);
	const synth_0 = new Tone.MetalSynth().connect(panner_0);
	synthMap.set('panner_0', panner_0);
	synthMap.set('synth_0', synth_0);

	const panner_1 = new Tone.Panner(0).connect(channel);
	const synth_1 = new Tone.MetalSynth().connect(panner_1);
	synthMap.set('panner_1', panner_1);
	synthMap.set('synth_1', synth_1);

	const panner_2 = new Tone.Panner(0).connect(channel);
	const synth_2 = new Tone.MetalSynth().connect(panner_2);
	synthMap.set('panner_2', panner_2);
	synthMap.set('synth_2', synth_2);

	const panner_3 = new Tone.Panner(0).connect(channel);
	const synth_3 = new Tone.MetalSynth().connect(panner_3);
	synthMap.set('panner_3', panner_3);
	synthMap.set('synth_3', synth_3);

	return synthMap;
}

export const playSynths = (s:eP5, props:props, boxes:box[], params:params):void => {
	const playSynth = (box:box, index:number):void => {
		const synthName = 'synth_' + index;
		const pannerName = 'panner_' + index;
		const boxSize = {
			min: params.canvasSize * params.boxSizeRate.min,
			max: params.canvasSize * params.boxSizeRate.max,
		}
		const volume = s.map(box.boxWidth, boxSize.min, boxSize.max, params.volume.min, params.volume.max);
		const pan = s.map(box.boxPos_rowRight.x, 0, params.canvasSize, -1, 1);
		props.synths.get(pannerName).pan.value = pan;
		props.synths.get(synthName).volume.value = volume;
		props.synths.get(synthName).triggerAttackRelease('C4', '8n');
	}

	boxes.forEach((box, index) => {
		if (box.frameCount == 0 && box.status == 'sliding') playSynth(box, index);
	});
}
