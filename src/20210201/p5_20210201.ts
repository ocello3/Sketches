import { sketch } from './index';
import { p5map } from '../types/p5map';

export const p5_20210201 = ():p5map => {
	const p5map: p5map = {
		date: '20210201',
		title: 'hello P5.Element',
		note: 'Created this whole pages with P5.Element',
		content: 'Using P5.Element, all doms for whole pages are created. Refer <a href="https://scrapbox.io/ocello3blog/Simple_website_with_P5.Elements" target="_blank" rel="noopener noreferrer">this link</a> to see how to implement them.',
		sketch: sketch,
	}
	return p5map;
}

