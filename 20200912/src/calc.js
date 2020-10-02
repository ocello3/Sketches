import P5 from 'p5';

export const getParams = () => {
	const windowSize = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
	const canvasSize = (windowSize < 500) ? windowSize : windowSize * 0.6;
	return {
		canvasSize: canvasSize,
		margin: {
			x: (window.innerWidth - canvasSize)/2,
			y: (window.innerHeight - canvasSize)/2,
		},
		circleRadius: 50
	};
};

export const circlePos = (params) => {
	return new P5.Vector(params.canvasSize/2, params.canvasSize/2);
};

