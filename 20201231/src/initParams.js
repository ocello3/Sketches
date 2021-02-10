'use strict';

export const initParams = (innerWidth, innerHeight) => {
	
	const windowSize = (innerWidth, innerHeight) => {
		return (innerWidth < innerHeight) ? innerWidth : innerHeight;
	};

	const canvasSize = (windowSize) => {
		return (windowSize < 500) ? windowSize : Math.round(windowSize * 0.6);
	};

	const params = {};
	params.windowSize = windowSize(innerWidth, innerHeight);
	params.canvasSize = canvasSize(params.windowSize);
	params.ballNum = 3;
	// params.isStart = confirm("Turn sound on?");
	
	return params;
};

