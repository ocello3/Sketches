import Tweakpane from 'tweakpane';
import P5 from 'p5';
import Tone from 'tone';

export interface props {
	init: boolean;
	coverPage?: P5;
	pane?: Tweakpane;
	sketchPage?: P5;
	synths?: Map<string, Tone>;
}

