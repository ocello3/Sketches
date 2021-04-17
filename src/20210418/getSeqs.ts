import * as Tone from 'tone';
import { props } from '../types/props';
import { params } from './initParams';

export const getSeqs = (props: props, params: params):void => {
	const amSeq = new Tone.Sequence((time, note) => {
		props.synths.get('amSynth').triggerAttackRelease(note, time);
		Tone.Draw.schedule(() => {
			params.note_1 = note;
		}, time);
	}, ["C3", "E3", "G3"], "4n").start(0);
	props.synths.set('amSeq', amSeq);
	
	const fmSeq = new Tone.Sequence((time, note) => {
		props.synths.get('fmSynth').triggerAttackRelease(note, time);
		Tone.Draw.schedule(() => {
			params.note_2 = note;
		}, time);
	}, ["G4", ["C5", "C4", ["E4", null]], [null, "G5"]], "4n").start(0);
	props.synths.set('fmSeq', fmSeq);
}

