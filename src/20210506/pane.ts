import * as Tone from 'tone';  // for tonejs
import { props } from '../types/props';
import { eP5 } from '../types/eP5';
import { params } from './params';

export const setPane = (props: props, s: eP5, params: params): void => {
	const f1 = props.pane.addFolder({
		title: 'Control',
	});
	const activate = (): void => {
		// for (const value of props.synths.values()) value.start();
		Tone.Transport.start();
		params.isStarted = true;
	}
	const inactivate = (): void => {
		Tone.Destination.mute = true;
		Tone.Transport.stop();
	}
	const reactivate = (): void => {
		Tone.Destination.mute = false;
		Tone.Transport.start();
	}
	// control button
	const stopButton = f1.addButton({ title: 'start/stop' });
	stopButton.on('click', () => {
		if (!s.isLooping() && !params.isStarted) activate(); // when loaded
		if (s.isLooping()) inactivate(); // when stoped
		if (!s.isLooping() && params.isStarted)	reactivate(); // when restarted
		s.isLooping() ? s.noLoop() : s.loop();
	});
	// frameRate monitor
	f1.addMonitor(params, 'frameRate', { interval: 500 });
	f1.addMonitor(params, 'status', { interval: 500 });
};

