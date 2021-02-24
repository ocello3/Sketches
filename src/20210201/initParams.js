'use strict';

export const initParams = (width) => {
	
	// const divSize = (width, height) => {
	// 	return (width < height) ? width : height;
	// };

	// const canvasSize = (windowSize) => {
	// 	return (windowSize < 500) ? windowSize : Math.round(windowSize * 0.6);
	// };

	const params = {};
	params.windowSize = width;
	// params.canvasSize = canvasSize(params.windowSize);
	params.canvasSize = width;
	
	return params;
};

