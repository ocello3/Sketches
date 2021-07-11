import { params } from './params';
import { font } from './setFont';

export const calcCycleCount = (cycle:number, frameCount:number):number => {
	return frameCount % cycle;
}


export const calcRefVal = (preCycle:number, updatedCycleCount:number):number => {
	const progressRate = updatedCycleCount / preCycle;
	return (0.5 - Math.abs(0.5 - progressRate)) * 2;
}

export const calcEaseVal = (updatedRefVal:number):number => {
	const firstHalf = 8 * Math.pow(updatedRefVal, 4);
	const latterHalf = 1 - Math.pow(updatedRefVal * (-2) + 2, 4) / 2;
	return (updatedRefVal < 0.5)? firstHalf: latterHalf;
}

export const updateFont = (preFont:font) => (params:params):font => {
	const updatedFont:font = { ...preFont };
	updatedFont.cycleCount = calcCycleCount(preFont.cycle, params.frameCount);
	updatedFont.refVal = calcRefVal(preFont.cycle, updatedFont.cycleCount);
	updatedFont.easeVal = calcEaseVal(updatedFont.refVal);
	updatedFont.angle = updatedFont.easeVal * Math.PI * 2;
	return updatedFont;
}
