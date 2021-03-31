export interface params {
	windowSize: number;
	canvasSize: number;
}

export const initParams = (width: number):params => {
	
	const initParams: params = {
		windowSize: width,
		canvasSize: width,
	}

	return initParams;
};
