import P5 from 'p5';
import { params } from '../params';
import { box } from './setBox';

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
	updatedBox.frameCount = preBox.frameCount + 1;
	updatedBox.boxVelocity = calcBoxVelocity(preBox.boxVelocity, preBox.boxAngle, params);
	updatedBox.boxPos_rowRight = calcBoxPos(preBox.boxPos_rowRight, updatedBox.boxVelocity);
	return updatedBox;
}

