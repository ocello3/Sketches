import * as Tone from 'tone';  // for tonejs
import { props } from '../types/props';
import { eP5 } from '../types/eP5';
import { params } from './initParams';

export const setPane = (props: props, s: eP5, params: params): void => {
	const f1 = props.pane.addFolder({
		title: 'Control',
	});
	// control button
	const stopButton = f1.addButton({ title: 'start/stop' });
	stopButton.on('click', () => {
		// for tonejs start--
		if (!s.isLooping() && !params.isStarted) { // when loaded
			// for (const value of props.synths.values()) value.start();
			params.isStarted = true;
		}
		if (s.isLooping()) Tone.Destination.mute = true; // when stoped
		if (!s.isLooping() && params.isStarted)	Tone.Destination.mute = false; // when restarted
		// for tonejs --end
		s.isLooping() ? s.noLoop() : s.loop();
	});
	f1.addMonitor(params, 'frameRate', { interval: 500 });
	const synthTestButton = f1.addButton({ title: "synth test" });
	synthTestButton.on('click', () => {
		props.synths.get('test').triggerAttackRelease('C4', '4n');
	});
};

