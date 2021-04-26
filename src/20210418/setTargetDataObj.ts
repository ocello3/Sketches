import P5 from 'p5';
import { params } from './setParams';
import { dataObj } from './dataObj';

export const setTargetDataObj =  (params: params): dataObj => {
	const calcDuration = ():number => {
		const diff = params.duration_max - params.duration_min;
		return Math.random() * diff + params.duration_min;
	}
	const duration = calcDuration();

	const startPos = new P5.Vector().set(Math.random() * params.canvasSize, Math.random() * params.canvasSize);
	
	const targetPos = new P5.Vector().set(Math.random() * params.canvasSize, Math.random() * params.canvasSize);

	const calcV0 = ():P5.Vector => {
		const x_fromParams = Math.random() * (params.v0_max - params.v0_min) + params.v0_min;
		const y_fromParams = Math.random() * (params.v0_max - params.v0_min) + params.v0_min;
		const v0_fromParams = new P5.Vector().set(x_fromParams, y_fromParams);
		const length_fromParams = P5.Vector.mag(v0_fromParams);
		const length_startFromTarget = P5.Vector.dist(targetPos, startPos);
		if (length_fromParams > length_startFromTarget/2) return v0_fromParams;
		return P5.Vector.div(P5.Vector.sub(targetPos, startPos), 2); 
	}
	const v0 = calcV0();
	
	const calcA = ():P5.Vector => {
		const x = (targetPos.x - startPos.x - v0.x * duration) * 2 / Math.pow(duration, 2);
		const y = (targetPos.y - startPos.y - v0.y * duration) * 2 / Math.pow(duration, 2);
		return new P5.Vector().set(x, y);
	}
	const a = calcA();
	
	return {
		v0: v0,
		a: a,
		frameCount: 0,
		duration: duration,
		startPos: startPos,
		targetPos: targetPos,
		currentPos: startPos,
		progressRate: 0,
		// for tonejs
		volume: params.volume_min,
		pane: 0,
		freq: 0,
	}
}


