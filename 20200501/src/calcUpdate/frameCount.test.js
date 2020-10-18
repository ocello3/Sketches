import * as target from './frameCount.js';

test('calcFrameCount when restart', () => {
	const currentFrameCount = 10;
	const updateFrameCount = target.calcFrameCount(currentFrameCount, 'restart');
	expect(updateFrameCount).toBe(1);
});

test('calcFrameCount without restart', () => {
	const currentFrameCount = 10;
	const updateFrameCount = target.calcFrameCount(currentFrameCount, 'keep');
	expect(updateFrameCount).toBe(currentFrameCount + 1);
});

