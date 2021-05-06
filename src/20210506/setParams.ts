export interface params {
	canvasSize: number;
	dataObjCount: number;
	frameRate: number;
	isStarted: boolean;
}

export const setParams = (width: number):params => {
	
	const initParams: params = {
		canvasSize: width,
		dataObjCount: 4,
		frameRate: 0,
		isStarted: false,
	}
	return initParams;
};
