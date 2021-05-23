import P5 from 'p5';
import { params, setParams } from '../params';

export type status = 'waiting' | 'falling' | 'rotating' | 'sliding' | 'reset';

const randamize = (min:number, max:number):number => {
	return (max - min) * Math.random() + min;
}

export const setBox = (params:params) => {
	const boxSizeRate:number = randamize(params.boxSizeRate.min ,params.boxSizeRate.max);
	const boxSize:number = params.canvasSize * boxSizeRate;
	const boxPosXRate:number = randamize(params.boxPosXRate.min, params.boxPosXRate.max);
	const boxPosX:number = params.canvasSize * boxPosXRate;
	const boxVelocityY = randamize(params.boxVelocityY.min, params.boxVelocityY.max);
	const boxInitVelocity:P5.Vector = new P5.Vector().set(0, boxVelocityY);
	const boxCollisionPosY:number = params.canvasSize - boxPosX * Math.sin(Math.PI/6);
	
	return {
		frameCount: 0,
		status: 'falling',
		gravity: randamize(params.gravity.min, params.gravity.max),
		boxWidth: boxSize,
		boxHeight: boxSize,
		boxAngle: 0,
		boxRotateSpeed: 0,
		boxInitVelocity: boxInitVelocity,
		boxVelocity: boxInitVelocity,
		boxCollidedVelocity: new P5.Vector().set(0, 0),
		boxCollisionPos: new P5.Vector().set(boxPosX, boxCollisionPosY),
		boxPos_rowRight: new P5.Vector().set(boxPosX, 0),
		boxControlVector: new P5.Vector().set(0, 0),
		// added
		boxShrinkSpeedRate:randamize(params.boxShrinkSpeedRate.min, params.boxShrinkSpeedRate.max),
		boxRotateSpeedRate:randamize(params.boxRotateSpeedRate.min, params.boxRotateSpeedRate.max),
		boxSlideSpeedRate:randamize(params.boxSlideSpeedRate.min, params.boxSlideSpeedRate.max),
		boxControlPosVelocityRate:randamize(params.boxControlPosVelocityRate.min, params.boxControlPosVelocityRate.max),
		boxControlPosAccelerateRate:randamize(params.boxControlPosAccelerateRate.min, params.boxControlPosAccelerateRate.max),
	}
}

const params = setParams(100);
const thisBox = setBox(params);
export type box = typeof thisBox;

