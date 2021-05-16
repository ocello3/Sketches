import P5 from 'p5';
import { box } from './setBox';
import { params } from '../params';

export const calcBoxRotateSpeed = (preBoxVelocity:P5.Vector, preBoxAngle:number, preBoxRotateSpeed:number, params:params):number => {
	const updatedRotateSpeed = preBoxVelocity.y * params.boxRotateSpeedRate;
	return (preBoxAngle == 0) ? updatedRotateSpeed : preBoxRotateSpeed;
}

export const calcBoxAngle = (preBoxAngle:number, updatedBoxRotateSpeed:number, params:params):number => {
	const updatedBoxAngle = preBoxAngle + updatedBoxRotateSpeed;
	return (updatedBoxAngle > params.tiltAngle)? params.tiltAngle : updatedBoxAngle;
}

export const rotatingBox = (preBox:box, params:params):box => {
	const updatedBox = { ...preBox };
	updatedBox.frameCount = preBox.frameCount + 1;
	updatedBox.boxRotateSpeed = calcBoxRotateSpeed(preBox.boxVelocity, preBox.boxAngle, preBox.boxRotateSpeed, params);
	updatedBox.boxAngle = calcBoxAngle(preBox.boxAngle, updatedBox.boxRotateSpeed, params);
	return updatedBox;
}

