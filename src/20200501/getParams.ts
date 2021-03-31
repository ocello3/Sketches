export interface params {
	canvasSize: number;
	statusSwitchDuration: { min: number; max: number; };
	snakeNum: number;
	waveNum: number;
	waveLength: number;
	headWaveAmp: number;
	waveAmpReducRate: number;
	initEasingFactor: { min: number; max: number; };
	easingFactorReducRate: { min: number; max: number; };
	lineNum: number;
}

export const getParams = (width: number):params => {
	const canvasSize = width;
	const snakeNum: number = 5;
	const params:params = {
		canvasSize: width,
		statusSwitchDuration: { min: 5, max: 200 },
		snakeNum: 5,
		waveNum: 3,
		waveLength: 1 / 30 * canvasSize,
		headWaveAmp: canvasSize / (snakeNum + 1) * 0.8,
		waveAmpReducRate: 0.7,
		initEasingFactor: { min: 0.1, max: 0.5 },
		easingFactorReducRate: { min: 0.7, max: 1.0 },
		lineNum: 8,
	}
	return params;
};
