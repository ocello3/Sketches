import { eP5 } from '../types/eP5';

export const setParams = (width: number) => {
	
	const params = {
		// default
		canvasSize: width,
		dataObjCount: 4,
		frameRate: 0,
		isStarted: false,
		// for box
		colorPalette: [
			[0, 65, 109],
			[45,125,188],
			[82, 189, 242],
			[117, 212, 242]
		],
		statusNoteSeq: ['C3', 'D3', 'E3', 'F3'],
		statusNoteNum: -1, // use without 0 - 4
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

