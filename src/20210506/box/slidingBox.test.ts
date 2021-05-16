import P5 from 'p5';
import { calcBoxVelocity, calcBoxPos } from './slidingBox';
import { setParams } from '../params';

const params = setParams(100);

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

