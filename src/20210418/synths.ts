import * as Tone from 'tone';

export const synths = () => {
	const synthMap = new Map();
	
	const amPanner = new Tone.Panner(-0.8).toDestination();
	const amSynth = new Tone.AMSynth().connect(amPanner);
	synthMap.set('amSynth', amSynth);
	
	const fmPanner = new Tone.Panner(0.8).toDestination();
	const fmSynth = new Tone.FMSynth().connect(fmPanner);
	fmSynth.volume.value = -10;
	synthMap.set('fmSynth', fmSynth);

	return synthMap;
}

