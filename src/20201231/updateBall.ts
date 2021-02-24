'use strict';

import P5 from 'p5';

export const updateBall = (ball) => (params, frameCount) => {
	const updatedBall = new Map();

	updatedBall.set('cycleLength', ball.get('cycleLength'));
	updatedBall.set('frameVal', frameCount % ball.get('cycleLength'));
	updatedBall.set('angle', ball.get('frameVal') * 2 * Math.PI / ball.get('cycleLength'));
	updatedBall.set('marginRate', ball.get('marginRate'));
	updatedBall.set('leftEdge', ball.get('leftEdge'));
	updatedBall.set('rightEdge', ball.get('rightEdge'));
	updatedBall.set('amp', ball.get('amp'));
	
	const calcPos = () => {
		const x = ball.get('pos').x;
		const margin = params.canvasSize * updatedBall.get('marginRate').y;
		const y = margin + updatedBall.get('amp') * (Math.sin(updatedBall.get('angle')) + 1)/2;
		return new P5.Vector(x, y);
	}
	updatedBall.set('pos', calcPos());

	const normYPos = () => {
		const yPos = updatedBall.get('pos').y;
		const min = 0;
		const max = params.canvasSize;
		return (yPos - min) / (max - min);
	}
	const calcVolume = () => {
		const normedYPos = normYPos();
		const min = -50;
		const max = -10;
		return normedYPos * (max - min) + min;
	}
	updatedBall.set('volume', calcVolume());

	return updatedBall;
}

