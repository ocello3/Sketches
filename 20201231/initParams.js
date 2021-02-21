'use strict';

export const initParams = (width) => {
	
	const params = {};
	params.windowSize = width;
	params.canvasSize = width;
	params.isStarted = false;
	params.ballNum = 3;
	// params.isStart = confirm("Turn sound on?");
	
	return params;
};

