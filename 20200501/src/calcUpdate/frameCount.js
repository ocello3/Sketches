export const calcFrameCount = (frameCount, status) => {
	if (status == 'restart') return 1;
	return frameCount + 1;
};

