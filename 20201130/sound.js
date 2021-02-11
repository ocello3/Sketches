"use strict";

import Tone from "tone";

export const simpleOsc = new Tone.Oscillator({
	type:'sine',
	frequency: 880,
	volume: -16,
}).toDestination();

