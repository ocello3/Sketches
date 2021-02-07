'use strict';

import P5 from 'p5';

export const updateBall = (ball) => (params, frameCount) => {
	const updatedBall = {};
	updatedBall.cycleLength = ball.cycleLength;
	updatedBall.frameVal = frameCount % ball.cycleLength;
	updatedBall.angle = ball.frameVal * 2 * Math.PI / ball.cycleLength;
	updatedBall.marginRate = ball.marginRate;
	updatedBall.amp = ball.amp;
	
	const calcYPos = (ball) => {
		const x = ball.pos.x;
		const canvasSize = params.canvasSize;
		const marginRate_y = updatedBall.marginRate.y;
		const amp = updatedBall.amp;
		const angle = updatedBall.angle;
		const y = canvasSize * marginRate_y + amp * Math.sin(angle);
		return P5.Vector(x, y);
	}
	updatedBall.pos = calcYPos(ball);

	return updatedBall;
}

