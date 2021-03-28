import { eP5 } from '../eP5';
import { params, initParams } from './initParams';

export const sketch = (props: any) => {
	return (s: eP5): void => {
		const canvasDiv = document.getElementById('canvas');
		const params: params = initParams(canvasDiv.clientWidth);
		const drawFrame = () => {
			s.push();
			s.stroke('black');
			s.strokeWeight(1);
			s.noFill();
			s.rect(0, 0, (params as any).canvasSize, (params as any).canvasSize);
			s.pop();
		};
		const setPane = (props) => {
			const f1 = props.get('pane').addFolder({
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
			s.createCanvas((params as any).canvasSize, (params as any).canvasSize);
			setPane(props);
			s.noLoop();
		};
		s.draw = () => {
			s.background(255);
			drawFrame();
			s.frameRate(2);
			s.textSize(50);
			s.text(s.frameCount, (params as any).canvasSize / 2, (params as any).canvasSize / 2);
		};
	};
};
