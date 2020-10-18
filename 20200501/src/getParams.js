'use strict';

export const getParams = (windowSize) => {
	const params = {};
	params.canvasSize = (windowSize < 500) ? windowSize : windowSize * 0.6;
	params.statusSwitchDuration = {
		min: 5,
		max: 200
	};
	params.snakeNum = 5;
	params.waveNum = 3;
	params.waveLength = 1/30 * params.canvasSize;
	params.headWaveAmp = params.canvasSize / (params.snakeNum + 1) * 0.8;
	params.waveAmpReducRate = 0.7;
	params.initEasingFactor = 0.4; // 0.1 - 0.5
	params.easingFactorReducRate = 1.0; // 0.7 - 1.0
	params.lineNum = 8;
	return params;
};

