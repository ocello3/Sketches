import P5 from 'p5';
import { params } from './initParams';
import { ball } from './ball';

export const updateBall = (ball: ball) => (params: params, frameCount: number) => {
	const cycleLength = ball.cycleLength;
	const frameVal = frameCount % ball.cycleLength;
	const angle = ball.frameVal * 2 * Math.PI / ball.cycleLength;
	const marginRate = ball.marginRate;
	const leftEdge = ball.leftEdge;
	const rightEdge = ball.rightEdge;
	const amp = ball.amp;
	
	const calcPos = (): P5.Vector => {
		const x = ball.pos.x;
		const margin = params.canvasSize * marginRate.y;
		const y = margin + amp * (Math.sin(angle) + 1)/2;
		return new P5.Vector().set(x, y);
	}
	const pos = calcPos();

	const normYPos = (): number => {
		const yPos = pos.y;
		const min = 0;
		const max = params.canvasSize;
		return (yPos - min) / (max - min);
	}
	const calcVolume = (): number => {
		const normedYPos = normYPos();
		const min = -50;
		const max = -10;
		return normedYPos * (max - min) + min;
	}
	const volume = calcVolume();

	const updatedBall: ball = {
		cycleLength: cycleLength,
		frameVal: frameVal,
		angle: angle,
		marginRate: marginRate,
		volume: volume,
		leftEdge: leftEdge,
		rightEdge: rightEdge,
		amp: amp,
		pos: pos,
	};
	return updatedBall;
}

