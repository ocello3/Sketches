export interface params {
	canvasSize: number;
	dataObjCount: number;
	frameRate: number;
	isStarted: boolean;
	isReSet: boolean;
	noteSeq: String[];
	duration_min: number; duration_max: number;
	volume_min: number; volume_max: number;
	freq_min: number; freq_max: number;
	colorPallete: number[][];
}

export const setParams = (width: number):params => {
	
	const initParams: params = {
		canvasSize: width,
		dataObjCount: 4,
		frameRate: 0,
		isStarted: false,
		isReSet: false,
		noteSeq: new Array(),
		duration_min: 100, duration_max: 200,
		volume_min: -60, volume_max: -6,
		freq_min: 100, freq_max: 1000,
		colorPallete: [
			[81, 91, 212, 100],
			[129, 52, 175, 100],
			[221, 42, 123, 100],
			[254, 218, 119, 100]],
	}
	return initParams;
};
