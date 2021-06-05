import * as Tone from 'tone';  // for tonejs
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
		Tone.start(); // remove after add synths
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
	tab_1.addInput(params, 'boxSizeRate', { min: 0.01, max: 0.2, step: 0.01, label: 'size'});
	tab_1.addInput(params, 'boxPosXRate', { min: 0.1, max: 1, step: 0.1, label: 'init x-Pos'});
	tab_1.addInput(params, 'boxVelocityY', { min: 1, max: 10, step: 1, label: 'init y-Velocity'});
	tab_1.addInput(params, 'gravity', { min: 0.1, max: 1, step: 0.1 });
	tab_1.addInput(params, 'boxShrinkSpeedRate', { min: 0.5, max: 1.5, step: 0.05, label: 'shrink speed'});
	tab_1.addInput(params, 'boxRotateSpeedRate', { min: 0.1, max: 1.0, step: 0.05, label: 'rotate speed'});
	tab_1.addInput(params, 'boxSlideSpeedRate', { min: 0.05, max: 0.5, step: 0.05, label: 'slide speed'});
	tab_1.addInput(params, 'boxControlPosVelocityRate', { min: 10, max: 25, step: 1, label: 'bezier speed'});
	tab_1.addInput(params, 'boxControlPosAccelerateRate', { min: 0.5, max: 7, step: 0.5, label: 'bezier accelerate'});
	// synth parameter
	const tab_2 = tab.pages[1];
	tab_2.addInput(params, 'volume', { min: -60, max: -10, step: 1 });
	tab_2.addInput(params, 'harmonicity', { min: 5, max: 20, step: 1 });
	tab_2.addInput(params, 'resonance', { min: 100, max: 1000, step: 50 });
	tab_2.addInput(params, 'modulationIndex', { min: 5, max: 40, step: 1 });
};

