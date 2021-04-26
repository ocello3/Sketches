import P5 from 'p5';

export interface dataObj {
	v0: P5.Vector;
	a: P5.Vector;
	frameCount: number;
	duration: number;
	startPos: P5.Vector;
	targetPos: P5.Vector;
	currentPos: P5.Vector;
	progressRate: number;
	// for tonejs
	volume: number;
	pane: number;
	freq: number;
}
