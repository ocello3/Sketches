"use strict";

import Tone from "tone";
// @ts-expect-error ts-migrate(2305) FIXME: Module '"./index.js"' has no exported member 's'.
import { s } from './index.js';

export const simpleOsc = new Tone.Oscillator({
	type:'sine',
	frequency: 880,
	volume: -16,
}).toDestination();
