'use strict';

import P5 from 'p5';

export const initBall = (index) => (params) => {
	const ball = new Map();

	ball.set('cycleLength', 60 + 10 * index);
	ball.set('frameVal', 0);
	ball.set('angle', 0);
	ball.set('marginRate', new P5.Vector(0.2, 0.2));

	const calcLeftEdge = () => {
		const x = params.canvasSize * ball.get('marginRate').x;
		const y = params.canvasSize / 2;
		return new P5.Vector(x, y);
	}
	ball.set('leftEdge', calcLeftEdge());

	const calcRightEdge = () => {
		const margin = params.canvasSize * ball.get('marginRate').x;
		const x = params.canvasSize - margin;
		const y = params.canvasSize / 2;
		return new P5.Vector(x, y);
	}
	ball.set('rightEdge', calcRightEdge());

	const calcAmp = () => {
		const margin = params.canvasSize * ball.get('marginRate').y;
		const effectiveHeight = params.canvasSize - margin * 2;
		return effectiveHeight;
	}
	ball.set('amp', calcAmp());

	const calcPos = () => {
		const margin = params.canvasSize * ball.get('marginRate').x;
		const effectiveWidth = params.canvasSize - margin * 2;
		const eachWidth = effectiveWidth / (params.ballNum + 1);
		const x = margin + eachWidth * (index + 1);
		const y = 0;
		return new P5.Vector(x, y);
	}
	ball.set('pos', calcPos());
	
	return ball;
}

