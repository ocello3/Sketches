import P5 from 'p5';
import { params } from './initParams';
import { ball } from './ball';

export const initBall = (index: number) => (params: params) => {
	const cycleLength = 60 + 10 * index;
	const frameVal = 0;
	const angle = 0;
	const marginRate = new P5.Vector().set(0.2, 0.2);
	const volume = 0;

	const calcLeftEdge = (): P5.Vector => {
		const x = params.canvasSize * marginRate.x;
		const y = params.canvasSize / 2;
		return new P5.Vector().set(x, y);
	}

	const calcRightEdge = (): P5.Vector => {
		const margin = params.canvasSize * marginRate.x;
		const x = params.canvasSize - margin;
		const y = params.canvasSize / 2;
		return new P5.Vector().set(x, y);
	}

	const calcAmp = (): number => {
		const margin = params.canvasSize * marginRate.y;
		const effectiveHeight = params.canvasSize - margin * 2;
		return effectiveHeight;
	}

	const calcPos = (): P5.Vector => {
		const margin = params.canvasSize * marginRate.x;
		const effectiveWidth = params.canvasSize - margin * 2;
		const eachWidth = effectiveWidth / (params.ballNum + 1);
		const x = margin + eachWidth * (index + 1);
		const y = 0;
		return new P5.Vector().set(x, y);
	}
	
	const initBall: ball = {
		cycleLength: cycleLength,
		frameVal: frameVal,
		angle: angle,
		marginRate: marginRate,
		volume: volume,
		leftEdge: calcLeftEdge(),
		rightEdge: calcRightEdge(),
		amp: calcAmp(),
		pos: calcPos(),
	}
	
	return initBall;
}

