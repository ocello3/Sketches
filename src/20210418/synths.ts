import * as Tone from 'tone';

export const synths = () => {
	const synthMap = new Map();

	const testSynth = new Tone.AMSynth().toDestination();
	synthMap.set('test', testSynth);

	const testSeq = new Tone.Sequence((time, note) => {
		testSynth.triggerAttackRelease(note, time);
		// console.log(`time: ${time}, note: ${note}`);
	}, ["C3", "E3", "G3"], "8n");
	synthMap.set('testSeq', testSeq);

	return synthMap;
}

