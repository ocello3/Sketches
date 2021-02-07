'use strict';

import P5 from 'p5';

export const initBall = (index) => (params) => {
	const ball = {};
	ball.cycleLength = 60;
	ball.frameVal = 0;
	ball.angle = 0;
	ball.marginRate = new P5.Vector(0.2, 0.2);
	ball.amp = params.canvasSize * (1 - ball.marginRate.y * 2);

	const calcPos = () => {
		const width = (params.canvasSize * (1 - ball.marginRate.x * 2)) / params.ballNum;
		const x = params.canvasSize + width * index;
		const y = 0;
		return new P5.Vector(x, y);
	}
	ball.pos = calcPos();
	
	return ball;
}

