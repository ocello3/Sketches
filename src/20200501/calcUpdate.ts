import { calcStatus } from './calcUpdate/status';
import { calcFrameCount } from './calcUpdate/frameCount';
import { calcStatusSwitchDuration } from './calcInit';
import { calcInitEasingFactor } from './calcInit';
import { calcEasingFactorReducRate } from './calcInit';
import { calcCurrentPosArray } from './calcUpdate/currentPosArray';
import { calcTargetPosArray } from './calcUpdate/targetPosArray';
import { params } from './getParams';
import { snake } from './snake';

export const calcUpdate = (currentSnake: snake, snakeIndex: number) => (params: params) => {
	const statusSwitchDuration = calcStatusSwitchDuration(params);
	const initEasingFactor = calcInitEasingFactor(params);
	const easingFactorReducRate = calcEasingFactorReducRate(params);
	const status = calcStatus(params, currentSnake.frameCount, statusSwitchDuration, currentSnake.currentPosArray);
	const frameCount = calcFrameCount(currentSnake.frameCount, status);
	const targetPosArray = calcTargetPosArray(currentSnake.targetPosArray, snakeIndex, params, status);
	const currentPosArray = calcCurrentPosArray(currentSnake.currentPosArray, status, snakeIndex, params, targetPosArray, initEasingFactor, easingFactorReducRate);
	const updateSnake:snake = {
		statusSwitchDuration: statusSwitchDuration,
		initEasingFactor: initEasingFactor,
		easingFactorReducRate: easingFactorReducRate,
		status: status,
		frameCount: frameCount,
		targetPosArray: targetPosArray,
		currentPosArray: currentPosArray,
	}
	return updateSnake;
}
