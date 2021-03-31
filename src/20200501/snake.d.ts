import P5 from 'p5';

export interface snake {
	statusSwitchDuration: number;
	initEasingFactor: number;
	easingFactorReducRate: number;
	status: string;
	frameCount: number;
	targetPosArray: P5.Vector[];
	currentPosArray: P5.Vector[];
}

