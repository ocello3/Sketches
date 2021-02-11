"use strict";

import Tone from "tone";
import { s } from './index.js';

export const simpleOsc = new Tone.Oscillator({
	type:'sine',
	frequency: 880,
	volume: -16,
}).toDestination();
