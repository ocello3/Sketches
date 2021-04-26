import * as Tone from 'tone';
import { eP5 } from '../types/eP5';
import { props } from '../types/props';
import { params } from './setParams';

export const setSeqs = (s: eP5, props: props, params: params):void => {
	const amSeq = new Tone.Sequence((time, note) => {
		// props.synths.get('amSynth').triggerAttackRelease(note, time);
		Tone.Draw.schedule(() => {
			s.fill(255);
			s.rect(0, 0, params.canvasSize, params.canvasSize);
			params.isSet = true;
		}, time);
	}, ["C3", "E3", "G3"], "4n").start(0);
	props.synths.set('amSeq', amSeq);
	
	// const fmSeq = new Tone.Sequence((time, note) => {
	// 	props.synths.get('fmSynth').triggerAttackRelease(note, time);
	// 	Tone.Draw.schedule(() => {
	// 		// do something
	// 	}, time);
	// }, ["G4", ["C5", "C4", ["E4", null]], [null, "G5"]], "4n").start(0);
	// props.synths.set('fmSeq', fmSeq);
}

