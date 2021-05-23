import P5 from 'p5';
import { params } from '../params';
import { status, box } from './setBox';

export const calcBoxCollidedVelocity = (preFrameCount:number, preBoxVelocity:P5.Vector, preBoxCollidedVelocity:P5.Vector):P5.Vector => {
	if (preFrameCount == 0) return preBoxVelocity;
	return preBoxCollidedVelocity;
}

export const calcBoxHeight = (updatedFrameCount:number, updatedBoxCollidedVelocity:P5.Vector,preBoxGravity:number, preBoxWidth:number, params:params):number => {
	const initVelocity:number = updatedBoxCollidedVelocity.y * params.boxShrinkSpeedRate;
	const acceleration:number = preBoxGravity * params.boxShrinkSpeedRate;
	const updatedBoxHeight = preBoxWidth - initVelocity * updatedFrameCount - 0.5 * acceleration * Math.pow(updatedFrameCount, 2);
	if (updatedBoxHeight < 0) return 0;
	return updatedBoxHeight;
}

export const calcBoxVelocity = (preFrameCount:number, preBoxVelocity:P5.Vector, preBoxAngle:number, params:params):P5.Vector => {
	if (preFrameCount == 0) {
		const boxVelocityMag:number = P5.Vector.mag(preBoxVelocity);
		const boxVelocity:P5.Vector = P5.Vector.fromAngle(Math.PI - preBoxAngle, boxVelocityMag);
		return P5.Vector.mult(boxVelocity, params.boxSlideSpeedRate);
	};
	return preBoxVelocity;
}

export const calcBoxPos = (preBoxPos:P5.Vector, updatedBoxVelocity:P5.Vector):P5.Vector => {
	return P5.Vector.add(preBoxPos, updatedBoxVelocity);
}

export const calcBoxControlVector = (preFrameCount:number, updatedFrameCount:number, preBoxGravity:number, updatedBoxCollidedVelocity:P5.Vector, params:params):P5.Vector => {
	const acceleration = P5.Vector.mult(updatedBoxCollidedVelocity.normalize(), preBoxGravity * params.boxControlPosAccelerateRate);
	const velocity = P5.Vector.mult(updatedBoxCollidedVelocity, params.boxControlPosVelocityRate);
	const v0t = P5.Vector.mult(velocity, updatedFrameCount);
	const at2 = P5.Vector.mult(acceleration, Math.pow(updatedFrameCount, 2) * 0.5);
	const updatedBoxControlVector = P5.Vector.sub(v0t, at2);
	if (updatedBoxControlVector.y <= 0 && preFrameCount != 0) return new P5.Vector().set(0, 0);
	return updatedBoxControlVector;
}

export const calcStatus = (updatedBoxPos:P5.Vector):status => {
	if (updatedBoxPos.x < 0) return 'waiting';
	return 'sliding';
}

export const slidingBox = (preBox:box, params:params):box => {
	const updatedBox = { ...preBox };
	updatedBox.frameCount = preBox.frameCount + 1;
	updatedBox.boxCollidedVelocity = calcBoxCollidedVelocity(preBox.frameCount, preBox.boxVelocity, preBox.boxCollidedVelocity);
	updatedBox.boxHeight = calcBoxHeight(updatedBox.frameCount, updatedBox.boxCollidedVelocity, preBox.gravity, preBox.boxWidth, params);
	updatedBox.boxVelocity = calcBoxVelocity(preBox.frameCount, preBox.boxVelocity, preBox.boxAngle, params);
	updatedBox.boxPos_rowRight = calcBoxPos(preBox.boxPos_rowRight, updatedBox.boxVelocity);
	updatedBox.boxControlVector = calcBoxControlVector(preBox.frameCount, updatedBox.frameCount, preBox.gravity, updatedBox.boxCollidedVelocity, params);
	updatedBox.status = calcStatus(updatedBox.boxPos_rowRight);
	return updatedBox;
}

