import * as Tone from 'tone';
import { eP5 } from '../types/eP5';
import { props } from '../types/props';
import { params } from './setParams';

export const setSeqs = (s: eP5, props: props, params: params):void => {
	const noteSeq = new Tone.Sequence((time, note) => {
		Tone.Draw.schedule(() => {
			params.noteSeq.push(note);
			if (note == 'C3') {
				s.fill(255, 150);
				s.rect(0, 0, params.canvasSize, params.canvasSize);
				params.isReSet = true;
			}
		}, time);
	}, [['C3', 'D3', 'E3', 'F3'], null], '2n').start(0);
	props.synths.set('noteSeq', noteSeq);
}

