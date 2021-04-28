import P5 from 'p5';
import { params } from './setParams';
import { dataObj } from './dataObj';

export const updateDataObj = (dataObj: dataObj, index:number) => (params: params): dataObj => {
	const frameCount = dataObj.frameCount + 1;
	// if frameCount is over duration, stop to update
	if (frameCount >= dataObj.duration) return dataObj;
	// if still waiting for Tone.Sequence torriger
	const noteSeqLength:number = params.noteSeq.length;
	if (index > noteSeqLength) return dataObj;
	
	const calcCurrentPos = ():P5.Vector => {
		const x = dataObj.startPos.x + dataObj.v0.x * dataObj.frameCount + dataObj.a.x * Math.pow(frameCount, 2) / 2;
		const y = dataObj.startPos.y + dataObj.v0.y * dataObj.frameCount + dataObj.a.y * Math.pow(frameCount, 2) / 2;
		return new P5.Vector().set(x, y);
	}
	const currentPos = calcCurrentPos();
	
	const calcProgressRate = ():number => {
		const distStartCurrent = P5.Vector.dist(dataObj.startPos, currentPos);
		const distStartTarget = P5.Vector.dist(dataObj.targetPos, dataObj.startPos);
		return distStartCurrent / distStartTarget;
	}
	const progressRate = calcProgressRate();
	const volume = (0.5 - Math.abs(0.5 - progressRate)) * 2 * (params.volume_max - params.volume_min) + params.volume_min;
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
