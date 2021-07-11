import { eP5 } from '../types/eP5';

export const setParams = (width: number) => {
	
	const params = {
		// default
		canvasSize: width,
		dataObjCount: 5,
		frameRate: 0,
		isStarted: false,
		// for box
		colorPalette: [
			[0, 65, 109],
			[45,125,188],
			[82, 189, 242],
			[117, 212, 242],
			[38, 148,171],
		],
		// for font
		frameCount: 0,
	}
	return params;
};

const thisParams = setParams(0);
export type params = typeof thisParams;

export const updateParams = (s:eP5, params:params):void => {
	params.frameRate = s.frameRate();
	params.frameCount = s.frameCount;
}

