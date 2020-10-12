'use strict';

export const getParams = (windowSize) => {
	const params = {};
	params.canvasSize = (windowSize < 500) ? windowSize : windowSize * 0.6;
	params.statusSwitchDuration = 50;
	params.snakeNum = 5;
	params.waveNum = 3;
	params.waveLength = 1/8 * params.canvasSize;
	params.headWaveAmp = params.canvasSize / (params.snakeNum + 1) * 0.8;
	params.waveAmpReducRate = 0.7;
	params.easingFactor = 0.4;
	params.easingFactorReducRate = 0.65;
	return params;
};

