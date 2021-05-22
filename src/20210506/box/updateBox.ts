import { params } from '../params';
import { box } from './setBox';
import { setBox } from './setBox';
import { fallingBox } from './fallingBox';
import { rotatingBox } from './rotatingBox';
import { slidingBox } from './slidingBox';

export const updateBox = (box:box) => (params:params):box => {
	if (box.status == 'falling') return fallingBox(box);
	if (box.status == 'rotating') return rotatingBox(box, params);
	if (box.status == 'sliding') return slidingBox(box, params);
	if (box.status == 'reset') return setBox(params);
	throw 'status is unknown';
}

