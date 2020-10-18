import { calcCurrentPosArray } from './calcUpdate_currentPosArray.js';
import { calcTargetPosArray } from './calcUpdate_targetPosArray.js';

export const calcStatus = (params, frameCount, currentPosArray) => {
	if (currentPosArray[currentPosArray.length - 1].x > params.canvasSize) return 'restart';
	if (frameCount % (params.statusSwitchDuration * 2) == params.statusSwitchDuration) return 'stretch';
	if ((frameCount % (params.statusSwitchDuration * 2)) == 0) return 'shrink';
	return 'keep';
};

export const calcFrameCount = (frameCount, status) => {
	if (status == 'restart') return 1;
	return frameCount + 1;
};

export const calcUpdate = (currentSnake, snakeIndex) => (params) => {
	const updateSnake = {};
	updateSnake.status = calcStatus(params, currentSnake.frameCount, currentSnake.currentPosArray);
	updateSnake.frameCount = calcFrameCount(currentSnake.frameCount);
	updateSnake.targetPosArray = calcTargetPosArray(currentSnake.targetPosArray, snakeIndex, params, updateSnake.status);
	updateSnake.currentPosArray = calcCurrentPosArray(currentSnake.currentPosArray, updateSnake.status, snakeIndex, params, updateSnake.targetPosArray);
	return updateSnake;
};

