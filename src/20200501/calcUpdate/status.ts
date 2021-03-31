import P5 from 'p5';
import { params } from '../getParams';

export const calcStatus = (params: params, frameCount: number, statusSwitchDuration: number, currentPosArray: P5.Vector[]): string => {
	if (currentPosArray[currentPosArray.length - 1].x > params.canvasSize) return 'restart';
	if (frameCount % (statusSwitchDuration * 2) == statusSwitchDuration) return 'stretch';
	if ((frameCount % (statusSwitchDuration * 2)) == 0) return 'shrink';
	return 'keep';
};

