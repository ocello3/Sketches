import { params } from '../params';
import { box } from './setBox';
import { setBox } from './setBox';
import { fallingBox } from './fallingBox';
import { rotatingBox } from './rotatingBox';
import { slidingBox } from './slidingBox';

export const updateBox = (box:box, index:number) => (params:params):box => {
	if (params.statusNoteNum == index && box.status == 'waiting') {
		box.status = 'reset';
	};
	if (box.status == 'waiting') return box;
	if (box.status == 'falling') return fallingBox(box);
	if (box.status == 'rotating') return rotatingBox(box, params);
	if (box.status == 'sliding') return slidingBox(box);
	if (box.status == 'reset') return setBox(params);
	throw 'status is unknown';
}

