import { calcStatus } from './calcUpdate/status.js';
import { calcFrameCount } from './calcUpdate/frameCount.js';
import { calcCurrentPosArray } from './calcUpdate/currentPosArray.js';
import { calcTargetPosArray } from './calcUpdate/targetPosArray.js';

export const calcUpdate = (currentSnake, snakeIndex) => (params) => {
	const updateSnake = {};
	updateSnake.status = calcStatus(params, currentSnake.frameCount, currentSnake.currentPosArray);
	updateSnake.frameCount = calcFrameCount(currentSnake.frameCount, updateSnake.status);
	updateSnake.targetPosArray = calcTargetPosArray(currentSnake.targetPosArray, snakeIndex, params, updateSnake.status);
	updateSnake.currentPosArray = calcCurrentPosArray(currentSnake.currentPosArray, updateSnake.status, snakeIndex, params, updateSnake.targetPosArray);
	return updateSnake;
};

