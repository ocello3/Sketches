'use strict';

import P5 from 'p5';

export const calcPos = (index, params, marginRate, amp, angle) => {
	const width = (params.canvasSize * (1 - marginRate.x * 2)) / params.ballNum;
	const x = params.canvasSize + width * index;
	const y = params.canvasSize * marginRate.y + amp * Math.sin(angle);
	return new P5.Vector(x, y);
}

export const initBall = (index) => (params, frameCount) => {
	const ball = {};
	ball.cycleLength = 60;
	ball.frameVal = frameCount % ball.cycleLength;
	ball.angle = ball.frameVal * 2 * Math.PI / ball.cycleLength;
	ball.marginRate = new P5.Vector(0.5, 0.2);
	ball.amp = params.canvasSize * (1 - ball.marginRate.y * 2);
	ball.pos = calcPos(index, params, ball.marginRate, ball.amp, ball.angle);
	return ball;
}

