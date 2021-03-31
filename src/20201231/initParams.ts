export interface params {
	canvasSize: number;
	frameRate: number;
	isStarted: boolean;
	ballNum: number;
}

export const initParams = (width: number): params => {
	const params: params = {
	canvasSize: width,
	frameRate: 0,
	isStarted: false,
	ballNum: 3,
	};
	return params;
};
