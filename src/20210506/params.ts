import { eP5 } from '../types/eP5';

export const setParams = (width: number) => {
	
	const params = {
		// default
		canvasSize: width,
		dataObjCount: 4,
		frameRate: 0,
		isStarted: false,
		// for box
		boxShrinkSpeedRate: 0.9,
		boxRotateSpeedRate: 0.6,
		boxSlideSpeedRate: 0.2,
		boxControlPosVelocityRate: 17,
		boxControlPosAccelerateRate: 3,
		// for slope
		tiltAngle: Math.PI / 6,
	}
	return params;
};

const thisParams = setParams(0);
export type params = typeof thisParams;

export const updateParams = (s:eP5, params:params):void => {
	params.frameRate = s.frameRate();
}

