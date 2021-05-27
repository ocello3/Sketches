import * as Tone from 'tone';

export const synths = () => {
	const synthMap = new Map();
	
	const panner_1 = new Tone.Panner(0).toDestination();
	const synth_1 = new Tone.MetalSynth().connect(panner_1);
	synthMap.set('panner_1', panner_1);
	synthMap.set('synth_1', synth_1);

	const panner_2 = new Tone.Panner(0).toDestination();
	const synth_2 = new Tone.MetalSynth().connect(panner_1);
	synthMap.set('panner_2', panner_2);
	synthMap.set('synth_2', synth_2);

	const panner_3 = new Tone.Panner(0).toDestination();
	const synth_3 = new Tone.MetalSynth().connect(panner_1);
	synthMap.set('panner_3', panner_3);
	synthMap.set('synth_3', synth_3);

	const panner_4 = new Tone.Panner(0).toDestination();
	const synth_4 = new Tone.MetalSynth().connect(panner_1);
	synthMap.set('panner_4', panner_4);
	synthMap.set('synth_4', synth_4);

	return synthMap;
}

