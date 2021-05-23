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
		Tone.Transport.start();
		Tone.start(); // remove after add synths
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
	const f1 = tab.pages[0].addFolder({ title: 'Control' });
	const stopButton = f1.addButton({ title: 'start/stop' });
	stopButton.on('click', () => {
		if (!s.isLooping() && !params.isStarted) activate(); // when loaded
		if (s.isLooping()) inactivate(); // when stoped
		if (!s.isLooping() && params.isStarted)	reactivate(); // when restarted
		s.isLooping() ? s.noLoop() : s.loop();
	});
	// frameRate monitor
	f1.addMonitor(params, 'frameRate', { interval: 500 });
	// parameter
	const f2 = tab.pages[0].addFolder({ title: 'Box Params' });
	f2.addInput(params, 'boxSizeRate', { min: 0.01, max: 0.2, step: 0.01, label: 'size'});
	f2.addInput(params, 'boxPosXRate', { min: 0.1, max: 1, step: 0.1, label: 'init x-Pos'});
	f2.addInput(params, 'boxVelocityY', { min: 1, max: 10, step: 1, label: 'init y-Velocity'});
	f2.addInput(params, 'gravity', { min: 0.1, max: 1, step: 0.1 });
	f2.addInput(params, 'boxShrinkSpeedRate', { min: 0.5, max: 1.5, step: 0.05, label: 'shrink speed'});
	f2.addInput(params, 'boxRotateSpeedRate', { min: 0.1, max: 1.0, step: 0.05, label: 'rotate speed'});
	f2.addInput(params, 'boxSlideSpeedRate', { min: 0.05, max: 0.5, step: 0.05, label: 'slide speed'});
	f2.addInput(params, 'boxControlPosVelocityRate', { min: 10, max: 25, step: 1, label: 'bezier speed'});
	f2.addInput(params, 'boxControlPosAccelerateRate', { min: 0.5, max: 7, step: 0.5, label: 'bezier accelerate'});
};

