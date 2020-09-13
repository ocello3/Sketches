"use strict";

import { s } from './sketch.js';
import * as sound from './sound.js';

export const animationCtrlBtn = (pane, params) => {
	const newFolder = pane.addFolder({
		title: 'animation ctrl',
	});
	const startSoundBtn = newFolder.addButton({
		title: 'sound',
	});
	startSoundBtn.on('click', () => {
		Tone.start();
		console.log(`sound/on`);
	});
	const startAnimationBtn = newFolder.addButton({
		title: 'start',
	});
	startAnimationBtn.on('click', () => {
		s.loop();
		console.log(`started: ${params.frameCount}`);
	});
	const stopAnimationBtn = newFolder.addButton({
		title: 'stop',
	});
	stopAnimationBtn.on('click', () => {
		s.noLoop();
		console.log(`stopped: ${params.frameCount}`);
	});
};

export const monitorFrame = (pane, params) => {
	const newFolder = pane.addFolder({
		title: 'monitor frame',
	});
	newFolder.addMonitor(params, 'fc', {
		interval: 200,
	});
	newFolder.addMonitor(params, 'fps', {
		interval: 200,
	});
};

export const instrumentCtrlBtn = (pane) => {
	const newFolder = pane.addFolder({
		title: 'instrument ctrl',
	});
	const startSimpleOsc = newFolder.addButton({
		title: 'simpleOsc start',
	});
	startSimpleOsc.on('click', () => {
		sound.simpleOsc.start();
	});
	const stopSimpleOsc = newFolder.addButton({
		title: 'simpleOsc stop',
	});
	startSimpleOsc.on('click', () => {
		sound.simpleOsc.stop();
	});
};