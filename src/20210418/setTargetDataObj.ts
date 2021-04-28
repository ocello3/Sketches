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
	
	const calcV0 = ():P5.Vector => {
		const x_min = startPos.x * (-2) / duration;
		const y_min = startPos.y * (-2) / duration;
		const x_max = (params.canvasSize - startPos.x) * 2 / duration;
		const y_max = (params.canvasSize - startPos.y) * 2 / duration;
		const x = Math.random() * (x_max - x_min) + x_min;
		const y = Math.random() * (y_max - y_min) + y_min;
		return new P5.Vector().set(x, y);
	}
	const v0 = calcV0();
	
	const a = P5.Vector.div(v0, -duration);

	const calcTargetPos = ():P5.Vector => {
		const x = startPos.x + v0.x * duration + Math.pow(duration, 2) * a.x / 2;
		const y = startPos.y + v0.y * duration + Math.pow(duration, 2) * a.y / 2;
		return new P5.Vector().set(x, y);
	}
	const targetPos = calcTargetPos();
	
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


