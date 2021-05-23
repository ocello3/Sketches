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
		boxSizeRate: { min: 0.05, max: 0.15 },
		boxPosXRate: { min: 0.3, max: 0.8 },
		boxVelocityY: { min: 2, max: 7 },
		gravity: { min: 0.1, max:0.6 },
		// add range
		boxShrinkSpeedRate: { min: 0.7, max: 1.1 },
		boxRotateSpeedRate: { min: 0.4, max: 0.8 },
		boxSlideSpeedRate: { min: 0.1, max: 0.3 },
		boxControlPosVelocityRate: { min: 15, max: 20 },
		boxControlPosAccelerateRate: { min: 1, max: 5 },
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

