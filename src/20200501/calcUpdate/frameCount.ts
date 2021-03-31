export const calcFrameCount = (frameCount: number, status: string): number => {
	if (status == 'restart') return 1;
	return frameCount + 1;
};

