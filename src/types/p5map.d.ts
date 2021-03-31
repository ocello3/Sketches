import { eP5 } from './types/eP5';
import { props } from './types/props';
import Tone from 'tone';

type p5Func = (s: eP5) => void;

export interface p5map {
	date: string;
	title: string;
	note: string;
	content?: string;
	sketch: (props: props) => p5Func;
	synths?: () => Map<string, Tone>;
}

