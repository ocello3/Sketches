import P5 from 'p5';
import { box } from './setBox';
import { eP5 } from '../../types/eP5';

export const drawBox = (s:eP5, boxes:box[]):void => {
	boxes.forEach(box => {
		const rightLower = box.boxPos_rowRight;
		const leftLower = P5.Vector.add(box.boxPos_rowRight, P5.Vector.fromAngle(Math.PI - box.boxAngle, box.boxWidth));;
		const leftUpper = P5.Vector.add(box.boxPos_rowRight, P5.Vector.fromAngle(Math.PI + Math.atan(box.boxHeight/box.boxWidth) - box.boxAngle, Math.pow(Math.pow(box.boxWidth, 2) + Math.pow(box.boxHeight, 2), 0.5)));
		const rightUpper = P5.Vector.add(box.boxPos_rowRight, P5.Vector.fromAngle(Math.PI * 3 / 2 - box.boxAngle, box.boxHeight));
		s.push();
		s.fill(0);
		s.beginShape();
		s.vertex(rightUpper.x, rightUpper.y);
		s.vertex(rightLower.x, rightLower.y);
		s.vertex(leftLower.x, leftLower.y);
		s.vertex(leftUpper.x, leftUpper.y);
		s.endShape(s.CLOSE);
		s.pop();
	});
}
