import { sketch } from './index';
import { p5map } from '../types/p5map';

export const p5_20201023 = ():p5map => {
	const p5map: p5map = {
		date: '20201023',
		title: 'hello shader',
		note: 'Using shader with typescript and parcel',
		content: 'Refer (<a href="https://scrapbox.io/ocello3blog/Shader_with_Typescript" target="_blank" rel="noopener noreferrer">)this link</a> to see tips for shader with Typescript and Parcel.',
		sketch: sketch,
	}
	return p5map;
}

