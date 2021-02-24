export const calcStatus = (params, frameCount, statusSwitchDuration, currentPosArray) => {
	if (currentPosArray[currentPosArray.length - 1].x > params.canvasSize) return 'restart';
	if (frameCount % (statusSwitchDuration * 2) == statusSwitchDuration) return 'stretch';
	if ((frameCount % (statusSwitchDuration * 2)) == 0) return 'shrink';
	return 'keep';
};

