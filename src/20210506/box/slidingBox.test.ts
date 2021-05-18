import P5 from 'p5';
import { calcBoxShrinkSpeed, calcBoxHeight, calcBoxVelocity, calcBoxPos } from './slidingBox';
import { setParams } from '../params';

const params = setParams(100);

test('calcBoxSshrinkSpeed: init', () => {
	const updatedFrameCount = 0;
	const preBoxGravity = 0.3;
	const preBoxVelocity = new P5.Vector().set(0, 100);
	const updatedBoxShrinkSpeed = calcBoxShrinkSpeed(updatedFrameCount, preBoxGravity, preBoxVelocity);
	expect(updatedBoxShrinkSpeed).toBe(100);
});

test('calcBoxSshrinkSpeed: update', () => {
	const updatedFrameCount = 50;
	const preBoxGravity = 0.3;
	const preBoxVelocity = new P5.Vector().set(10, 50);
	const updatedBoxShrinkSpeed = calcBoxShrinkSpeed(updatedFrameCount, preBoxGravity, preBoxVelocity);
	expect(updatedBoxShrinkSpeed).toBeLessThan(preBoxVelocity.y);
});

test('calcBoxSshrinkSpeed: overed', () => {
	const updatedFrameCount = 10000;
	const preBoxGravity = 0.3;
	const preBoxVelocity = new P5.Vector().set(10, 50);
	const updatedBoxShrinkSpeed = calcBoxShrinkSpeed(updatedFrameCount, preBoxGravity, preBoxVelocity);
	expect(updatedBoxShrinkSpeed).toBe(0);
});

test('calcBoxHeight: shrinking', () => {
	const preBoxHeight = 100;
	const updatedBoxShrinkSpeed = 10;
	const updatedBoxHeight = calcBoxHeight(preBoxHeight, updatedBoxShrinkSpeed, params);
	expect(updatedBoxHeight).toBeLessThan(preBoxHeight);
});

test('calcBoxHeight: stoped', () => {
	const preBoxHeight = 5;
	const updatedBoxShrinkSpeed = 1000;
	const updatedBoxHeight = calcBoxHeight(preBoxHeight, updatedBoxShrinkSpeed, params);
	expect(updatedBoxHeight).toBe(0);
});

test('calcBoxVelocity: velocity-x == 0', () => {
	const preBoxVelocity = new P5.Vector().set(0, 100);
	const preBoxAngle = Math.PI / 10;
	const updatedBoxVelocity = calcBoxVelocity(preBoxVelocity, preBoxAngle, params);
	expect(updatedBoxVelocity.x).toBeLessThan(0);
	expect(updatedBoxVelocity.y).toBeLessThan(preBoxVelocity.y);
});

test('calcBoxVelocity: velocity-x != 0', () => {
	const preBoxVelocity = new P5.Vector().set(-10, 100);
	const preBoxAngle = Math.PI / 10;
	const updatedBoxVelocity = calcBoxVelocity(preBoxVelocity, preBoxAngle, params);
	expect(updatedBoxVelocity.x).toBe(preBoxVelocity.x);
	expect(updatedBoxVelocity.y).toBe(preBoxVelocity.y);
});

test('calcBoxPos', () => {
	const preBoxPos = new P5.Vector().set(100, 50);
	const updatedBoxVelocity = new P5.Vector().set(-10, 10);
	const updatedBoxPos = calcBoxPos(preBoxPos, updatedBoxVelocity);
	expect(updatedBoxPos.x).toBeLessThan(preBoxPos.x);
	expect(updatedBoxPos.y).toBeGreaterThan(preBoxPos.y);
})

