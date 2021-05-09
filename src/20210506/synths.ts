import * as Tone from 'tone';
import { props } from '../types/props';

export const synths = (props: props) => {
	const synthMap = new Map();
	props.synths = synthMap;
}

