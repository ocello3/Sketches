import P5 from 'p5';
import { eP5 } from '../types/eP5';
import { params } from './params';

export interface box {
	frameCount: number;
	gravity: number;
	boxSize: number;
	boxAngle: number;
	boxRotateSpeed: number;
	boxInitVelocity: P5.Vector;
	boxVelocity: P5.Vector;
	boxCollisionPos: P5.Vector;
	boxPos_rowRight: P5.Vector;
}

export const setBox = (params:params):box => {
	// randamize later
	const boxSize = params.canvasSize / 20;
	const boxPosX = params.canvasSize * 2 / 3;
	const boxVelocityY = 5;
	const boxInitVelocity = new P5.Vector().set(0, boxVelocityY);
	const boxCollisionPosY = params.canvasSize - boxPosX * Math.sin(Math.PI/6);
	const boxCollisionPos = new P5.Vector().set(boxPosX, boxCollisionPosY);
	
	return {
		frameCount: 0,
		gravity: 9.8,
		boxSize: boxSize,
		boxAngle: 0,
		boxRotateSpeed: 0,
		boxInitVelocity: boxInitVelocity,
		boxVelocity: boxInitVelocity,
		boxCollisionPos: boxCollisionPos,
		boxPos_rowRight: new P5.Vector().set(boxPosX, 0),
	}
}

const fallingBox = (box:box):box => {
	
	const frameCount = box.frameCount + 1;

	const calcBoxVelocity = ():P5.Vector => {
		const x = box.boxVelocity.x;
		const y = box.boxInitVelocity.x + box.gravity * frameCount; 
		return new P5.Vector().set(x, y);
	}
	const boxVelocity = calcBoxVelocity();

	const calcBoxPos = ():P5.Vector => {
		const x = box.boxPos_rowRight.x;
		const updatedY = 0.5 * box.gravity * Math.pow(frameCount, 2);
		const y = (updatedY > box.boxCollisionPos.y)? box.boxCollisionPos.y : updatedY;
		return new P5.Vector().set(x, y);
	}
	const boxPos = calcBoxPos();

	const fallingBox:box = {
		frameCount: frameCount,
		gravity: box.gravity,
		boxSize: box.boxSize,
		boxAngle: box.boxAngle,
		boxRotateSpeed: box.boxRotateSpeed,
		boxInitVelocity: box.boxInitVelocity,
		boxVelocity: boxVelocity,
		boxCollisionPos: box.boxCollisionPos,
		boxPos_rowRight: boxPos,
	}
	return fallingBox;
}

const rotatingBox = (box:box, params:params):box => {
	const frameCount = box.frameCount + 1;
	
	const calcBoxRotateSpeed = ():number => {
		const rotateSpeed = box.boxVelocity.y * params.boxRotateSpeedRate;
		return (box.boxAngle = 0)? rotateSpeed : box.boxRotateSpeed;
	}
	const boxRotateSpeed = calcBoxRotateSpeed();

	const calcBoxAngle = ():number => {
		const updatedBoxAngle = box.boxAngle + boxRotateSpeed;
		return (updatedBoxAngle > params.tiltAngle)? params.tiltAngle : updatedBoxAngle;
	}
	const boxAngle = calcBoxAngle();

	const rotatingBox:box = {
		frameCount: frameCount,
		gravity: box.gravity,
		boxSize: box.boxSize,
		boxAngle: boxAngle,
		boxRotateSpeed: boxRotateSpeed,
		boxInitVelocity: box.boxInitVelocity,
		boxVelocity: box.boxVelocity,
		boxCollisionPos: box.boxCollisionPos,
		boxPos_rowRight: box.boxPos_rowRight,
	}
	return rotatingBox;
}

const slidingBox = (box:box):box => {
	const frameCount = box.frameCount + 1;

	const calcBoxVelocity = ():P5.Vector => {
		const boxVelocityMag = P5.Vector.mag(box.boxVelocity);
		const updatedBoxVelocity = P5.Vector.fromAngle(- box.boxAngle, boxVelocityMag);
		return (box.boxVelocity.x == 0)? updatedBoxVelocity : box.boxVelocity;
	}
	const boxVelocity = calcBoxVelocity();

	const boxPos_rowRight = P5.Vector.add(box.boxPos_rowRight, boxVelocity);
	
	const slidingBox:box = {
		frameCount: frameCount,
		gravity: box.gravity,
		boxSize: box.boxSize,
		boxAngle: box.boxAngle,
		boxRotateSpeed: box.boxRotateSpeed,
		boxInitVelocity: box.boxInitVelocity,
		boxVelocity: boxVelocity,
		boxCollisionPos: box.boxCollisionPos,
		boxPos_rowRight: boxPos_rowRight,
	}
	return slidingBox;
}

export const updateBox = (box:box) => (params:params):box => {
	type status = 'falling' | 'rotating' | 'sliding' | 'reset';
	const getStatus = ():status => {
		const isCollided = box.boxPos_rowRight.y >= box.boxCollisionPos.y;
		const isRotated = box.boxAngle = params.tiltAngle;
		const isOvered = box.boxPos_rowRight.x < 0;
		if (!isCollided) return 'falling';
		if (isCollided && !isRotated) return 'rotating';
		if (isCollided && !isRotated && !isOvered) return 'sliding';
		if (isCollided && !isRotated && isOvered) return 'reset';
	}
	const status = getStatus();

	if (status == 'falling') return fallingBox(box);
	if (status == 'rotating') return rotatingBox(box, params);
	if (status == 'sliding') return slidingBox(box);
	if (status == 'reset') return setBox(params);
}

export const drawBox = (s:eP5, boxes:box[]):void => {
	boxes.forEach(box => {

	})
}

