export interface params {
	canvasSize: number;
	frameRate: number;
	isStarted: boolean; //  for tonejs
}

export const initParams = (width: number):params => {
	
	const initParams: params = {
		canvasSize: width,
		frameRate: 0,
		isStarted: false,  // for tonejs
	}

	return initParams;
};
