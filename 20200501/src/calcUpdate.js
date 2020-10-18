import { calcStatus } from './calcUpdate/status.js';
import { calcFrameCount } from './calcUpdate/frameCount.js';
import { calcStatusSwitchDuration } from './calcInit.js';
import { calcInitEasingFactor } from './calcInit.js';
import { calcCurrentPosArray } from './calcUpdate/currentPosArray.js';
import { calcTargetPosArray } from './calcUpdate/targetPosArray.js';

export const calcUpdate = (currentSnake, snakeIndex) => (params) => {
	const updateSnake = {};
	updateSnake.statusSwitchDuration = calcStatusSwitchDuration(params);
	updateSnake.initEasingFactor = calcInitEasingFactor(params);
	updateSnake.status = calcStatus(params, currentSnake.frameCount, updateSnake.statusSwitchDuration, currentSnake.currentPosArray);
	updateSnake.frameCount = calcFrameCount(currentSnake.frameCount, updateSnake.status);
	updateSnake.targetPosArray = calcTargetPosArray(currentSnake.targetPosArray, snakeIndex, params, updateSnake.status);
	updateSnake.currentPosArray = calcCurrentPosArray(currentSnake.currentPosArray, updateSnake.status, snakeIndex, params, updateSnake.targetPosArray, updateSnake.initEasingFactor);
	return updateSnake;
};

