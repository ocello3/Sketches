'use strict';

export const getParams = (windowSize) => {
	const params = {};
	params.canvasSize = (windowSize < 500) ? windowSize : windowSize * 0.6;
	params.snakeNum = 5;
	params.drawPointNum = 18;
	params.jointNum = 3;
	params.snakeLength = 6/8 * params.canvasSize;
	params.snakeLeadHeight = 6/8 * params.canvasSize;
	params.snakeHeightReducRate = 0.7;
	params.easingFactor = 0.4;
	params.easingFactorReducRate = 0.65;
	return params;
};

