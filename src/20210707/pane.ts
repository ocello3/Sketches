// import * as Tone from 'tone';  // for tonejs
import * as TweakpaneIntervalPlugin from '@tweakpane/plugin-interval';
import { props } from '../types/props';
import { eP5 } from '../types/eP5';
import { params } from './params';

export const setPane = (props: props, s: eP5, params: params): void => {
	props.pane.registerPlugin(TweakpaneIntervalPlugin);
	const tab = props.pane.addTab({
		pages: [{ title: 'Canvas' }, { title: 'Synth' }],
	});
	const activate = (): void => {
		// for (const value of props.synths.values()) value.start();
		// Tone.start(); // remove after add synths
		// Tone.Transport.start();
		params.isStarted = true;
	}
	const inactivate = (): void => {
		// Tone.Destination.mute = true;
		// Tone.Transport.stop();
	}
	const reactivate = (): void => {
		// Tone.Destination.mute = false;
		// Tone.Transport.start();
	}
	// control button
	const stopButton = tab.pages[0].addButton({ title: 'start/stop' });
	stopButton.on('click', () => {
		if (!s.isLooping() && !params.isStarted) activate(); // when loaded
		if (s.isLooping()) inactivate(); // when stoped
		if (!s.isLooping() && params.isStarted)	reactivate(); // when restarted
		s.isLooping() ? s.noLoop() : s.loop();
	});
	// frameRate monitor
	const tab_1 = tab.pages[0];
	tab_1.addMonitor(params, 'frameRate', { interval: 500 });
	// parameter
	// synth parameter
	tab_1.addInput(params, 'angle', { step: 0.1, min: Math.PI * (-2), max: Math.PI * 2 });
	const tab_2 = tab.pages[1];
};

