import P5 from 'p5';
import { params, setParams } from '../params';

export type status = 'waiting' | 'falling' | 'rotating' | 'sliding' | 'reset';

export const setBox = (params:params) => {
	// randamize later
	const boxSize:number = params.canvasSize / 10;
	const boxPosX:number = params.canvasSize * 2 / 3;
	const boxVelocityY = 5;
	const boxInitVelocity:P5.Vector = new P5.Vector().set(0, boxVelocityY);
	const boxCollisionPosY:number = params.canvasSize - boxPosX * Math.sin(Math.PI/6);
	const boxCollisionPos:P5.Vector = new P5.Vector().set(boxPosX, boxCollisionPosY);
	
	return {
		frameCount: 0,
		status: 'falling',
		gravity: 0.3,
		boxWidth: boxSize,
		boxHeight: boxSize,
		boxAngle: 0,
		boxRotateSpeed: 0,
		boxInitVelocity: boxInitVelocity,
		boxVelocity: boxInitVelocity,
		boxCollidedVelocity: new P5.Vector().set(0, 0),
		boxCollisionPos: boxCollisionPos,
		boxPos_rowRight: new P5.Vector().set(boxPosX, 0),
		boxControlVector: new P5.Vector().set(0, 0),
	}
}

const params = setParams(100);
const thisBox = setBox(params);
export type box = typeof thisBox;

