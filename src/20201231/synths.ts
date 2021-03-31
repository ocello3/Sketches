import * as Tone from 'tone';

export const synths = () => {
	const synthMap = new Map();
	
	synthMap.set('amSynth_0', new Tone.AMOscillator({
		frequency: 220,
		volume: -60,
	}).toDestination());
	
	synthMap.set('amSynth_1', new Tone.AMOscillator({
		frequency: 440,
		volume: -60,
	}).toDestination());
	
	synthMap.set('amSynth_2', new Tone.AMOscillator({
		frequency: 880,
		volume: -60,
	}).toDestination());
	
	return synthMap;
}

