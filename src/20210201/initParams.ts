export interface params {
	windowSize: number;
	canvasSize: number;
}

export const initParams = (width: number) => {
	
	const initParams: params = {
		windowSize: width,
		canvasSize: width,
	}

	return initParams;
};
