"use strict";

import Tone from "tone";

export const amSynth = new Tone.AMOscillator({
	frequency: 880,
	volume: -4,
}).toDestination();

