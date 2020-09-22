"use strict";

import P5 from "p5";
import Tone from "tone";
import Tweakpane from "tweakpane";
import * as gui from './gui.js';
import * as calc from './calc.js';
import * as draw from './draw.js';
import * as sound from './sound.js';

const sketch = s => {
	let drawVars;
	const synth = new Tone.Synth().toDestination();
	const count = 1;
	const pane = new Tweakpane();
	const params = {
		fc: 0,
		fps: 0,
	};
	
	s.setup = () => {
		s.createCanvas(500, 500);
		s.noLoop();
		s.frameRate(2);
		gui.animationCtrlBtn(pane, params);
		gui.monitorFrame(pane, params); 
		gui.instrumentCtrlBtn(pane);
		// drawVars = Array.from(Array(count), drawVar => undefined);
	};
	
	const calcDrawVars = () => (params) => {
		return {
		};
	};
	
	s.draw = () => {
		calc.updateParams(params);
		// drawVars = drawVars.map(drawVar => calcDrawVars());
		// drawVars = drawVars.map(func => func(params));
		draw.frame();
		s.textAlign(s.CENTER);
		s.textSize(50);
		s.text(s.frameCount, s.width/2 + 95, s.height/2 + 10);
	};
	
	s.touchStarted = () => {
		sound.simpleOsc.start();
	};
	
	s.touchEnded = () => {
		sound.simpleOsc.stop();
	};
};

export const s = new P5(sketch, 'p5js');

