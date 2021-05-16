import P5 from 'p5';
import { params, setParams } from '../params';
import { calcBoxRotateSpeed, calcBoxAngle } from './rotatingBox';

const params:params = setParams(100);

test('calcBoxRotateSpeed: preBoxAngle == 0', () => {
	const preBoxVelocity = new P5.Vector().set(0, 10);
	const preBoxAngle = 0;
	const preBoxRotateSpeed = 0;
	const updatedBoxRotateSpeed = calcBoxRotateSpeed(preBoxVelocity, preBoxAngle, preBoxRotateSpeed, params);
	expect(updatedBoxRotateSpeed).toBeGreaterThan(0);
});


test('calcBoxRotateSpeed: preBox != 0', () => {
	const preBoxVelocity = new P5.Vector().set(0, 10);
	const preBoxAngle = 5;
	const preBoxRotateSpeed = 10;
	const updatedBoxRotateSpeed = calcBoxRotateSpeed(preBoxVelocity, preBoxAngle, preBoxRotateSpeed, params);
	expect(updatedBoxRotateSpeed).toBe(preBoxRotateSpeed);
});

test('calcBoxAngle: boxAngle < tileAngle', () => {
	const preBoxAngle = 0;
	const updatedBoxRotateSpeed = params.tiltAngle / 10;
	const updatedBoxAngle = calcBoxAngle(preBoxAngle, updatedBoxRotateSpeed, params);
	expect(updatedBoxAngle).toBeLessThan(params.tiltAngle);
});

test('calcBoxAngle: boxAngle > tileAngle', () => {
	const preBoxAngle = params.tiltAngle;
	const updatedBoxRotateSpeed = params.tiltAngle / 10;
	const updatedBoxAngle = calcBoxAngle(preBoxAngle, updatedBoxRotateSpeed, params);
	expect(updatedBoxAngle).toBe(params.tiltAngle);
});


