import * as Tone from 'tone';

export const synths = () => {
	const synthMap = new Map();
	
	const main = new Tone.Limiter(-5).toDestination();
	synthMap.set('main', main);

	const channel_0 = new Tone.Channel(0).connect(main);
	const channel_1 = new Tone.Channel(0).connect(main);
	
	const pingPong_0 = new Tone.PingPongDelay("4n", 0.1).connect(channel_1);
	const panner_0 = new Tone.Panner(0).fan(channel_0, pingPong_0);
	const synth_0 = new Tone.MetalSynth().connect(panner_0);
	synthMap.set('panner_0', panner_0);
	synthMap.set('synth_0', synth_0);

	return synthMap;
}


