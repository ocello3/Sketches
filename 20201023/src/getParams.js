'use strict';

export const getParams = (windowSize) => {
	const params = {};
	params.canvasSize = (windowSize < 500) ? windowSize : windowSize * 0.6;
	return params;
};

