import * as Tone from 'tone';
import { props } from '../types/props';
import { params } from './params';

export const setSeqs = (props: props, params:params) => {
	const seq = params.statusNoteSeq;
	const statusSeq = new Tone.Sequence((time, note) => {
		Tone.Draw.schedule(() => {
			params.statusNoteNum = seq.indexOf(note);
		}, time);
	}, [seq[0], null, [seq[1], seq[2], null],[null, seq[3]]], '4n').start(0);
	props.synths.set('statusSeq', statusSeq);
}

