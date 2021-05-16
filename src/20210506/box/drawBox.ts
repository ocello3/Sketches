import P5 from 'p5';
import { box } from './setBox';
import { eP5 } from '../../types/eP5';

export const drawBox = (s:eP5, boxes:box[]):void => {
	boxes.forEach(box => {
		const rightUpper = P5.Vector.add(box.boxPos_rowRight, P5.Vector.fromAngle(Math.PI - box.boxAngle, box.boxSize));;
		const rightLower = box.boxPos_rowRight;
		const leftUpper = P5.Vector.add(box.boxPos_rowRight, P5.Vector.fromAngle(Math.PI * 5 / 4 - box.boxAngle, box.boxSize * Math.pow(2, 0.5)));
		const leftLower = P5.Vector.add(box.boxPos_rowRight, P5.Vector.fromAngle(Math.PI * 3 / 2 - box.boxAngle, box.boxSize));
		s.push();
		s.noFill();
		s.beginShape();
		s.vertex(rightUpper.x, rightUpper.y);
		s.vertex(rightLower.x, rightLower.y);
		s.vertex(leftLower.x, leftLower.y);
		s.vertex(leftUpper.x, leftUpper.y);
		s.endShape(s.CLOSE);
		s.pop();
	});
}
