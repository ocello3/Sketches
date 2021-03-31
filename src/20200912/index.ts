import * as calc from './calc';
import { eP5 } from '../types/eP5';
import { props } from '../types/props';
import { flag } from './flag';

export const sketch = (props: props) => {
	return (s: eP5) => {
		const canvasDiv = document.getElementById('canvas');
		const params = calc.getParams(canvasDiv.clientWidth);
		const colorPalette = [s.color(108, 160, 220), s.color(249, 228, 236), s.color(119, 221, 119)];
		let flags = Array.from(Array(3), (_, index) => calc.initFlag(index)).map(func => func(params));
		const setPane = (props: props) => {
			const f1 = props.pane.addFolder({
				title: 'Control',
			});
			const stopButton = f1.addButton({
				title: 'start/stop',
			});
			stopButton.on('click', () => {
				s.isLooping() ? s.noLoop() : s.loop();
			});
		};
		s.setup = () => {
			s.createCanvas(params.canvasSize, params.canvasSize);
			setPane(props);
			s.noLoop();
		};
		s.draw = () => {
			// calc
			flags = flags.map((flag, index) => calc.updateFlag(flag, index)).map(func => func(params));
			// draw background
			s.background(255);
			// draw bar
			s.push();
			s.stroke(0);
			s.strokeWeight(1);
			s.line(0, flags[0].startPos.y, params.canvasSize, flags[0].startPos.y);
			s.pop();
			// draw flags
			flags.forEach((flag: flag, index: number) => {
				s.push();
				s.fill(colorPalette[index]);
				s.translate(flag.startPos.x,flag.startPos.y);
				s.beginShape();
				s.vertex(0, 0);
				s.quadraticVertex(flag.leftCtrl.x, flag.leftCtrl.y, flag.leftAnchor.x, flag.leftAnchor.y);
				s.quadraticVertex(flag.rightCtrl.x, flag.rightCtrl.y, flag.rightAnchor.x, flag.rightAnchor.y);
				s.vertex(flag.endPos.x, flag.endPos.y);
				s.endShape(s.CLOSE);
				s.pop();
			});
		};
	};
};
