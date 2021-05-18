import P5 from 'p5';
import { params } from '../params';
import { box } from './setBox';

export const calcFrameCount = (preFrameCount:number, preBoxShrinkSpeed:number):number => {
	if (preBoxShrinkSpeed == 0) return 0;  // when status is changed to "sliding"
	return preFrameCount + 1;
}

export const calcBoxShrinkSpeed = (updatedFrameCount:number, preBoxGravity:number, preBoxVelocity:P5.Vector):number => {
	const updatedBoxShrinkSpeed = preBoxVelocity.y - preBoxGravity * updatedFrameCount;
	if (updatedBoxShrinkSpeed < 0) return 0;
	return updatedBoxShrinkSpeed;
}

export const calcBoxHeight = (preBoxHeight:number, updatedBoxShrinkSpeed:number, params:params):number => {
	const updatedBoxHeight = preBoxHeight - updatedBoxShrinkSpeed * params.boxShrinkSpeedRate;
	if (updatedBoxHeight < 0) return 0;
	return updatedBoxHeight;
}

export const calcBoxVelocity = (preBoxVelocity:P5.Vector, preBoxAngle:number, params:params):P5.Vector => {
	const boxVelocityMag = P5.Vector.mag(preBoxVelocity);
	const updatedBoxVelocity = P5.Vector.mult(P5.Vector.fromAngle(Math.PI - preBoxAngle, boxVelocityMag), params.boxSlidSpeedRate);
	return (preBoxVelocity.x == 0) ? updatedBoxVelocity : preBoxVelocity;
}

export const calcBoxPos = (preBoxPos:P5.Vector, updatedBoxVelocity:P5.Vector):P5.Vector => {
	return P5.Vector.add(preBoxPos, updatedBoxVelocity);
}

export const slidingBox = (preBox:box, params:params):box => {
	const updatedBox = { ...preBox };
	updatedBox.frameCount = calcFrameCount(preBox.frameCount, preBox.boxShrinkSpeed);
	updatedBox.boxShrinkSpeed = calcBoxShrinkSpeed(updatedBox.frameCount, preBox.gravity, preBox.boxVelocity);
	updatedBox.boxHeight = calcBoxHeight(preBox.boxHeight, updatedBox.boxShrinkSpeed, params);
	updatedBox.boxVelocity = calcBoxVelocity(preBox.boxVelocity, preBox.boxAngle, params);
	updatedBox.boxPos_rowRight = calcBoxPos(preBox.boxPos_rowRight, updatedBox.boxVelocity);
	return updatedBox;
}

