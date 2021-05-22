import P5 from 'p5';
import { status, box } from './setBox';
import { params } from '../params';

export const calcBoxRotateSpeed = (preBoxVelocity:P5.Vector, preBoxAngle:number, preBoxRotateSpeed:number, params:params):number => {
	if (preBoxAngle != 0) return preBoxRotateSpeed;
	return preBoxVelocity.y * 0.1 * params.boxRotateSpeedRate;
}

export const calcBoxAngle = (preBoxAngle:number, updatedBoxRotateSpeed:number, params:params):number => {
	const updatedBoxAngle = preBoxAngle + updatedBoxRotateSpeed;
	return (updatedBoxAngle > params.tiltAngle)? params.tiltAngle : updatedBoxAngle;
}

export const calcStatus = (updatedBoxAngle:number, params:params):status => {
	if (updatedBoxAngle >= params.tiltAngle) return 'sliding';
	return 'rotating';
}

export const resetFrameCount = (updatedFrameCount:number, status:string):number => {
	if (status == 'rotating') return updatedFrameCount;
	if (status == 'sliding') return 0;
	throw 'status is unkown'
}

export const rotatingBox = (preBox:box, params:params):box => {
	const updatedBox = { ...preBox };
	updatedBox.frameCount = preBox.frameCount + 1;
	updatedBox.boxRotateSpeed = calcBoxRotateSpeed(preBox.boxVelocity, preBox.boxAngle, preBox.boxRotateSpeed, params);
	updatedBox.boxAngle = calcBoxAngle(preBox.boxAngle, updatedBox.boxRotateSpeed, params);
	updatedBox.status = calcStatus(updatedBox.boxAngle, params);
	updatedBox.frameCount = resetFrameCount(updatedBox.frameCount, updatedBox.status);
	return updatedBox;
}

