import P5 from 'p5';
import { calcBoxHeight, calcBoxVelocity, calcBoxCollidedVelocity, calcBoxPos, calcBoxControlVector } from './slidingBox';
import { setParams } from '../params';

const params = setParams(100);

test('calcBoxHeight: shrinking', () => {
	const updatedFrameCount = 1;
	const updatedBoxCollidedVelocity = new P5.Vector().set(0, 100);
	const preBoxGravity = 10;
	const preBoxWidth = 100;
	const preBoxShrinkSpeedRate = 1;
	const updatedBoxHeight = calcBoxHeight(updatedFrameCount, updatedBoxCollidedVelocity,preBoxGravity, preBoxWidth, preBoxShrinkSpeedRate);
	expect(updatedBoxHeight).toBeLessThan(preBoxWidth);
});

test('calcBoxHeight: stoped', () => {
	const updatedFrameCount = 100000;
	const updatedBoxCollidedVelocity = new P5.Vector().set(0, 100);
	const preBoxGravity = 1;
	const preBoxWidth = 100;
	const preBoxShrinkSpeedRate = 1;
	const updatedBoxHeight = calcBoxHeight(updatedFrameCount, updatedBoxCollidedVelocity,preBoxGravity, preBoxWidth, preBoxShrinkSpeedRate);

	expect(updatedBoxHeight).toBe(0);
});

test('calcBoxVelocity', () => {
	const preFrameCount = 0;
	const preBoxVelocity = new P5.Vector().set(0, 100);
	const preBoxAngle = Math.PI / 10;
	const preBoxSlideSpeedRate = 0.1;
	const updatedBoxVelocity = calcBoxVelocity(preFrameCount, preBoxVelocity, preBoxAngle, preBoxSlideSpeedRate);
	expect(updatedBoxVelocity.x).toBeLessThan(0);
	expect(updatedBoxVelocity.y).toBeLessThan(preBoxVelocity.y);
});

test('calcBoxPos', () => {
	const preBoxPos = new P5.Vector().set(100, 50);
	const updatedBoxVelocity = new P5.Vector().set(-10, 10);
	const updatedBoxPos = calcBoxPos(preBoxPos, updatedBoxVelocity);
	expect(updatedBoxPos.x).toBeLessThan(preBoxPos.x);
	expect(updatedBoxPos.y).toBeGreaterThan(preBoxPos.y);
})

test('calcBoxControlVector', () => {
	const updatedFrameCount = 1;
	const preBoxGravity = 10;
	const updatedBoxCollidedVelocity = new P5.Vector().set(10, 10);
	const preBoxControlPosAccelerateRate = 1;
	const preBoxControlPosVelocityRate = 20;
	const updatedBoxControlVector = calcBoxControlVector(0, updatedFrameCount, preBoxGravity, updatedBoxCollidedVelocity, preBoxControlPosAccelerateRate, preBoxControlPosVelocityRate);
	expect(updatedBoxControlVector.x).toBeLessThan(updatedBoxCollidedVelocity.x);
	expect(updatedBoxControlVector.y).toBeLessThan(updatedBoxCollidedVelocity.y);
})
