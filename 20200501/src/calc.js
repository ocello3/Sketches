import P5 from 'p5';

export const getParams = (windowSize) => {
	
	const params = {};
	params.canvasSize = (windowSize < 500) ? windowSize : windowSize * 0.6;
	params.margin = new P5.Vector((window.innerWidth - params.canvasSize) / 2, (window.innerHeight - params.canvasSize) / 2);
	return params;
};

