import P5 from 'p5';
import { params } from './setParams';
import { dataObj } from './dataObj';

export const updateDataObj = (dataObj: dataObj) => (params: params): dataObj => {
	const frameCount = dataObj.frameCount + 1;
	// if frameCount is over duration, stop to update
	if (frameCount >= dataObj.duration) return dataObj;
	
	const calcCurrentPos = ():P5.Vector => {
		const v0t = P5.Vector.mult(dataObj.v0, frameCount);
		const at2 = P5.Vector.mult(dataObj.a, Math.pow(frameCount, 2)/2);
		const v0tAndAt2 = P5.Vector.add(v0t, at2);
		return P5.Vector.add(dataObj.startPos, v0tAndAt2);
	}
	const currentPos = calcCurrentPos();
	
	const calcProgressRate = ():number => {
		const distStartCurrent = P5.Vector.dist(dataObj.startPos, currentPos);
		const distStartTarget = P5.Vector.dist(dataObj.targetPos, dataObj.startPos);
		return distStartCurrent / distStartTarget;
	}
	const progressRate = calcProgressRate();
	// console.log(distStartTarget);
	const volume = progressRate * (params.volume_max - params.volume_min) + params.volume_min;
	const pane = currentPos.x / params.canvasSize * 2 - 1;
	const freq = currentPos.y / params.canvasSize * (params.freq_max - params.freq_min) + params.freq_min;


	return {
		v0: dataObj.v0,
		a: dataObj.a,
		frameCount: frameCount,
		duration: dataObj.duration,
		startPos: dataObj.startPos,
		targetPos: dataObj.targetPos,
		currentPos: currentPos,
		progressRate: progressRate,
		// for tonejs
		volume: volume,
		pane: pane,
		freq: freq,
	}
}
