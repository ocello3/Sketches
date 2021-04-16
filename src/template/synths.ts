import * as Tone from 'tone';

export const synths = () => {
	const synthMap = new Map();

	synthMap.set('test', new Tone.AMSynth().toDestination());

	return synthMap;
}

