export const calcStatus = (params, frameCount, currentPosArray) => {
	if (currentPosArray[currentPosArray.length - 1].x > params.canvasSize) return 'restart';
	if (frameCount % (params.statusSwitchDuration * 2) == params.statusSwitchDuration) return 'stretch';
	if ((frameCount % (params.statusSwitchDuration * 2)) == 0) return 'shrink';
	return 'keep';
};

