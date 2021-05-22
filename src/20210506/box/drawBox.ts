import P5 from 'p5';
import { params } from '../params';
import { box } from './setBox';
import { eP5 } from '../../types/eP5';

export const drawBox = (s:eP5, boxes:box[]):void => {
	boxes.forEach(box => {
		const rightLower = box.boxPos_rowRight;
		const leftLower = P5.Vector.add(box.boxPos_rowRight, P5.Vector.fromAngle(Math.PI - box.boxAngle, box.boxWidth));;
		const leftUpper = P5.Vector.add(box.boxPos_rowRight, P5.Vector.fromAngle(Math.PI + Math.atan(box.boxHeight/box.boxWidth) - box.boxAngle, Math.pow(Math.pow(box.boxWidth, 2) + Math.pow(box.boxHeight, 2), 0.5)));
		const rightUpper = P5.Vector.add(box.boxPos_rowRight, P5.Vector.fromAngle(Math.PI * 3 / 2 - box.boxAngle, box.boxHeight));
		// draw box
		s.push();
		s.fill(0);
		s.noStroke();
		s.beginShape();
		s.vertex(rightUpper.x, rightUpper.y);
		s.vertex(rightLower.x, rightLower.y);
		s.vertex(leftLower.x, leftLower.y);
		s.vertex(leftUpper.x, leftUpper.y);
		s.endShape(s.CLOSE);
		s.pop();
		
		// draw quadraticVertex
		const centerLower = P5.Vector.div(P5.Vector.add(rightLower, leftLower), 2);
		const controlPoint = P5.Vector.add(centerLower, box.boxControlVector);
		s.push();
		s.fill(0, 50);
		s.noStroke();
		s.beginShape();
		s.vertex(leftLower.x, leftLower.y);
		s.quadraticVertex(controlPoint.x, controlPoint.y, rightLower.x, rightLower.y);
		s.endShape();
		s.pop();
	});
}

export const drawSlope = (s:eP5, params:params):void => {
	s.push();
	s.stroke(0, 100);
	const height = Math.atan(params.tiltAngle) * params.canvasSize;
	s.line(0, params.canvasSize, params.canvasSize, params.canvasSize - height);
	s.pop();
}
