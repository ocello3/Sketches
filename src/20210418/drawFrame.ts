import { eP5 } from '../types/eP5';
import { params } from './setParams';
import { dataObj } from './dataObj';

export const drawFrame = (s: eP5, params: params):void => {
	s.push();
	s.stroke('black');
	s.strokeWeight(1);
	s.noFill();
	s.rect(0, 0, params.canvasSize, params.canvasSize);
	s.pop();
};

export const drawBall = (s: eP5, dataObjs: dataObj[]):void => {
	dataObjs.forEach(dataObj => {
		s.push();
		s.stroke('black');
		s.point(dataObj.currentPos.x, dataObj.currentPos.y);
		s.stroke('red');
		s.point(dataObj.targetPos.x, dataObj.targetPos.y);
		s.pop();
	});
}
