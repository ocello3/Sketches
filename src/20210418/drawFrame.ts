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

export const drawBall = (s: eP5, preDataObjs: dataObj[], dataObjs: dataObj[], params: params):void => {
	dataObjs.forEach((dataObj, index) => {
		const preDataObj:dataObj = preDataObjs[index];
		s.push();
		s.strokeWeight(((0.5 - Math.abs(0.5 - dataObj.progressRate)) * 30));
		s.stroke(params.colorPallete[index]);
		s.curve(preDataObj.currentPos.x, preDataObj.currentPos.y, preDataObj.currentPos.x, preDataObj.currentPos.y, dataObj.currentPos.x, dataObj.currentPos.y, dataObj.currentPos.x, dataObj.currentPos.y);
		s.pop();
	});
}
