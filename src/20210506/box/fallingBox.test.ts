import P5 from 'p5';
import { calcBoxVelocity, calcBoxPos } from './fallingBox';

test('calcBoxVelocity', () => {
	const preBoxVelocity = new P5.Vector().set(0, 5);
	const preBoxInitVelocity = new P5.Vector().set(0, 5);
	const preBoxGravity = 9.8;
	const updatedFrameCount = 5;
	const updatedBoxVelocity = calcBoxVelocity(preBoxVelocity, preBoxInitVelocity, preBoxGravity, updatedFrameCount);
	expect(updatedBoxVelocity.x).toBe(preBoxInitVelocity.x);
	expect(updatedBoxVelocity.y).toBeGreaterThan(preBoxInitVelocity.y);
});

test ('calcBoxPos: before collision', () => {
	const preBoxPos = new P5.Vector().set(50, 10);
	const preBoxGravity = 9.8;
	const updatedFrameCount = 5;
	const preBoxCollisionPos = new P5.Vector().set(50, 100);
	const updatedBoxPos = calcBoxPos(preBoxPos, preBoxGravity, updatedFrameCount, preBoxCollisionPos);
	expect(updatedBoxPos.x).toBe(preBoxPos.x);
	expect(updatedBoxPos.y).toBeGreaterThan(0);
});

test ('calcBoxPos: after collision', () => {
	const preBoxPos = new P5.Vector().set(50, 10);
	const preBoxGravity = 9.8;
	const updatedFrameCount = 10;
	const preBoxCollisionPos = new P5.Vector().set(50, 100);
	const updatedBoxPos = calcBoxPos(preBoxPos, preBoxGravity, updatedFrameCount, preBoxCollisionPos);
	expect(updatedBoxPos.x).toBe(preBoxPos.x);
	expect(updatedBoxPos.y).toBe(preBoxCollisionPos.y);
});

