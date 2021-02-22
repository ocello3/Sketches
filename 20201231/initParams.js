'use strict';

export const initParams = (width) => {
	
	const params = {};
	params.canvasSize = width;
	params.frameRate = 0;
	params.isStarted = false;
	params.ballNum = 3;
	
	return params;
};

