import P5 from 'p5';

export interface ball {
	cycleLength: number;
	frameVal: number;
	angle: number;
	marginRate: P5.Vector;
	volume: number;
	leftEdge: P5.Vector;
	rightEdge: P5.Vector;
	amp: number;
	pos: P5.Vector;
}

