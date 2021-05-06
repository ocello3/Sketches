import { eP5 } from '../types/eP5';
import { params } from './setParams';

export const drawFrame = (s: eP5, params: params):void => {
	s.push();
	s.stroke('black');
	s.strokeWeight(1);
	s.noFill();
	s.rect(0, 0, params.canvasSize, params.canvasSize);
	s.pop();
};

