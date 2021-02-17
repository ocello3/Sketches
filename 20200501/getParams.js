'use strict';

export const getParams = (width) => {
	const params = {};
	params.canvasSize = width;
	params.statusSwitchDuration = {
		min: 5,
		max: 200
	};
	params.snakeNum = 5;
	params.waveNum = 3;
	params.waveLength = 1/30 * params.canvasSize;
	params.headWaveAmp = params.canvasSize / (params.snakeNum + 1) * 0.8;
	params.waveAmpReducRate = 0.7;
	params.initEasingFactor = {
		min: 0.1,
		max: 0.5
	};
	params.easingFactorReducRate = {
		min: 0.7,
		max: 1.0
	};
	params.lineNum = 8;
	return params;
};

