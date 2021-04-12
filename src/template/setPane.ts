import { props } from '../types/props';
import { eP5 } from '../types/eP5';
import { params } from './initParams';

export const setPane = (props: props, s: eP5, params: params): void => {
	const f1 = props.pane.addFolder({
		title: 'Control',
	});
	const stopButton = f1.addButton({
		title: 'start/stop',
	});
	stopButton.on('click', () => {
		s.isLooping() ? s.noLoop() : s.loop();
	});
	f1.addMonitor(params, 'frameRate', { interval: 500 });
};

