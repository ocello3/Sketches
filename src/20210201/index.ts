import { eP5 } from '../types/eP5';
import { params, initParams } from './initParams';
import { props } from '../types/props';

export const sketch = (props: props) => {
	return (s: eP5): void => {
		const canvasDiv = document.getElementById('canvas');
		const params: params = initParams(canvasDiv.clientWidth);
		const drawFrame = () => {
			s.push();
			s.stroke('black');
			s.strokeWeight(1);
			s.noFill();
			s.rect(0, 0, params.canvasSize, params.canvasSize);
			s.pop();
		};
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
			s.background(255);
			drawFrame();
			s.frameRate(2);
			s.textSize(50);
			s.text(s.frameCount, params.canvasSize / 2, params.canvasSize / 2);
		};
	};
};
