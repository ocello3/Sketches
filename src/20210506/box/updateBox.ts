import { params } from '../params';
import { box } from './setBox';
import { setBox } from './setBox';
import { fallingBox } from './fallingBox';
import { rotatingBox } from './rotatingBox';
import { slidingBox } from './slidingBox';

type status = 'falling' | 'rotating' | 'sliding' | 'reset';

export const getStatus = (box:box, params:params):status => {
	const isCollided = (box.boxPos_rowRight.y >= box.boxCollisionPos.y);
	const isRotated = (box.boxAngle == params.tiltAngle);
	const isOvered = (box.boxPos_rowRight.x < 0);
	if (!isCollided) return 'falling';
	if (isCollided && !isRotated) return 'rotating';
	if (isCollided && isRotated && !isOvered) return 'sliding';
	if (isCollided && isRotated && isOvered) return 'reset';
}

export const updateBox = (box:box) => (params:params):box => {
	const status = getStatus(box, params);
	params.status = status;
	if (status == 'falling') return fallingBox(box);
	if (status == 'rotating') return rotatingBox(box, params);
	if (status == 'sliding') return slidingBox(box, params);
	if (status == 'reset') return setBox(params);
	throw 'status is unknown';
}

