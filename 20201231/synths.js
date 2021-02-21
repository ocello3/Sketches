'use strict';

import * as Tone from 'tone';

export const synths = () => {
	const synthMap = new Map();
	synthMap.set('amSynth', new Tone.AMOscillator({
		frequency: 880,
		volume: -16,
	}).toDestination());
	return synthMap;
}

