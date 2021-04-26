export interface params {
	canvasSize: number;
	dataObjCount: number;
	frameRate: number;
	isStarted: boolean;
	isSet: boolean;
	v0_min: number; v0_max: number;
	duration_min: number; duration_max: number;
	volume_min: number; volume_max: number;
	freq_min: number; freq_max: number;
}

export const setParams = (width: number):params => {
	
	const initParams: params = {
		canvasSize: width,
		dataObjCount: 4,
		frameRate: 0,
		isStarted: false,
		isSet: false,
		v0_min: 5, v0_max: 20,
		duration_min: 10, duration_max: 120,
		volume_min: -60, volume_max: -6,
		freq_min: 100, freq_max: 1000,
	}
	return initParams;
};
