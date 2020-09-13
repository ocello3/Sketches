"use strict";

import { s } from './sketch.js';

export const simpleOsc = new Tone.Oscillator({
	type:'sine',
	frequency: 880,
	volume: -16,
}).toDestination();
