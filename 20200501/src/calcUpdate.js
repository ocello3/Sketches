import { calcCurrentPosArray } from './calcUpdate_currentPosArray.js';
import { calcTargetPosArray } from './calcUpdate_targetPosArray.js';

export const calcStatus = (params, frameCount) => {
	if (frameCount == 0) return 'keep';
	if (frameCount % (params.statusSwitchDuration * 2) == params.statusSwitchDuration) return 'stretch';
	if ((frameCount % (params.statusSwitchDuration * 2)) == 0) return 'shrink';
	return 'keep';
};

export const calcUpdate = (currentSnake) => (params, frameCount) => {
	const updateSnake = {};
	updateSnake.status = calcStatus(params, frameCount);
	updateSnake.targetPosArray = calcTargetPosArray(currentSnake.targetPosArray, params, updateSnake.status);
	updateSnake.currentPosArray = calcCurrentPosArray(currentSnake.currentPosArray, params, updateSnake.targetPosArray);
	return updateSnake;
};
