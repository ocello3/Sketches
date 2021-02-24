import * as target from './frameCount.js';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcFrameCount when restart', () => {
	const currentFrameCount = 10;
	const updateFrameCount = target.calcFrameCount(currentFrameCount, 'restart');
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
	expect(updateFrameCount).toBe(1);
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('calcFrameCount without restart', () => {
	const currentFrameCount = 10;
	const updateFrameCount = target.calcFrameCount(currentFrameCount, 'keep');
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
	expect(updateFrameCount).toBe(currentFrameCount + 1);
});

