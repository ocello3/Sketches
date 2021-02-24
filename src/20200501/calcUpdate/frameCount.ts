export const calcFrameCount = (frameCount: any, status: any) => {
	if (status == 'restart') return 1;
	return frameCount + 1;
};

