'use strict';

import P5 from 'p5';

export const updateBall = (ball) => (params, frameCount) => {
	const updatedBall = {};
	updatedBall.cycleLength = ball.cycleLength;
	updatedBall.frameVal = frameCount % ball.cycleLength;
	updatedBall.angle = ball.frameVal * 2 * Math.PI / ball.cycleLength;
	updatedBall.marginRate = ball.marginRate;
	updatedBall.leftEdge = ball.leftEdge;
	updatedBall.rightEdge = ball.rightEdge;
	updatedBall.amp = ball.amp;
	
	const calcPos = () => {
		const x = ball.pos.x;
		const margin = params.canvasSize * updatedBall.marginRate.y;
		const y = margin + updatedBall.amp * (Math.sin(updatedBall.angle) + 1)/2;
		return new P5.Vector(x, y);
	}
	updatedBall.pos = calcPos();

	return updatedBall;
}

