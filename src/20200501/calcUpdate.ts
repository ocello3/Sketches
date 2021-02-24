import { calcStatus } from './calcUpdate/status.js';
import { calcFrameCount } from './calcUpdate/frameCount.js';
import { calcStatusSwitchDuration } from './calcInit.js';
import { calcInitEasingFactor } from './calcInit.js';
import { calcEasingFactorReducRate } from './calcInit.js';
import { calcCurrentPosArray } from './calcUpdate/currentPosArray.js';
import { calcTargetPosArray } from './calcUpdate/targetPosArray.js';
export const calcUpdate = (currentSnake: any, snakeIndex: any) => (params: any) => {
    const updateSnake = {};
    (updateSnake as any).statusSwitchDuration = calcStatusSwitchDuration(params);
    (updateSnake as any).initEasingFactor = calcInitEasingFactor(params);
    (updateSnake as any).easingFactorReducRate = calcEasingFactorReducRate(params);
    (updateSnake as any).status = calcStatus(params, currentSnake.frameCount, (updateSnake as any).statusSwitchDuration, currentSnake.currentPosArray);
    (updateSnake as any).frameCount = calcFrameCount(currentSnake.frameCount, (updateSnake as any).status);
    (updateSnake as any).targetPosArray = calcTargetPosArray(currentSnake.targetPosArray, snakeIndex, params, (updateSnake as any).status);
    (updateSnake as any).currentPosArray = calcCurrentPosArray(currentSnake.currentPosArray, (updateSnake as any).status, snakeIndex, params, (updateSnake as any).targetPosArray, (updateSnake as any).initEasingFactor, (updateSnake as any).easingFactorReducRate);
    return updateSnake;
};
