import P5 from 'p5';
import { status, box } from './setBox';

export const calcBoxVelocity = (preBoxVelocity:P5.Vector, preBoxInitVelocity:P5.Vector, preBoxGravity:number, updatedFrameCount:number):P5.Vector => {
	const x = preBoxVelocity.x;
	const y = preBoxInitVelocity.y + preBoxGravity * updatedFrameCount; 
	return new P5.Vector().set(x, y);
}

export const calcBoxPos = (preBoxPos:P5.Vector, preBoxGravity:number, updatedFrameCount:number, preBoxCollisionPos:P5.Vector):P5.Vector => {
	const x = preBoxPos.x;
	const updatedY = 0.5 * preBoxGravity * Math.pow(updatedFrameCount, 2);
	const y = (updatedY > preBoxCollisionPos.y) ? preBoxCollisionPos.y : updatedY;
	return new P5.Vector().set(x, y);
}

export const calcStatus = (updatedBoxPos:P5.Vector, updatedBoxCollisionPos:P5.Vector):status => {
	if (updatedBoxPos.y >= updatedBoxCollisionPos.y) return 'rotating';
	return 'falling';
}

export const resetFrameCount = (updatedFrameCount:number, status:string):number => {
	if (status == 'falling') return updatedFrameCount;
	if (status == 'rotating') return 0;
	throw 'status is unkown'
}

export const fallingBox = (preBox:box):box => {
	const updatedBox:box = { ...preBox };
	updatedBox.frameCount = preBox.frameCount + 1;
	updatedBox.boxVelocity = calcBoxVelocity(preBox.boxVelocity, preBox.boxInitVelocity, preBox.gravity, updatedBox.frameCount);
	updatedBox.boxPos_rowRight = calcBoxPos(preBox.boxPos_rowRight, preBox.gravity, updatedBox.frameCount, preBox.boxCollisionPos);
	updatedBox.status = calcStatus(updatedBox.boxPos_rowRight, updatedBox.boxCollisionPos);
	updatedBox.frameCount = resetFrameCount(updatedBox.frameCount, updatedBox.status);
	return updatedBox;
}

