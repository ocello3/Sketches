import P5 from 'p5';

export const calcUpdateStatus = (frameCount) => {
	if ((frameCount + 50) % 100 == 0) return 'stretch';
	if ((frameCount % 100)== 0) return 'shrink';
	return 'keep';
};

export const calcStretchedVec = (vec, vecIndex) => (params) => {
	const shrinkedIntervalLength = params.pointIntervalLength * params.waveLengthShrinkRate;
	const xIncrement =  shrinkedIntervalLength * (params.pointCount - vecIndex - 1);
	return P5.Vector.add(vec, new P5.Vector(xIncrement, 0));
};

export const calcShrinkedVec = (vec, vecIndex) => (params) => {
	const xIncrement = params.pointIntervalLength * params.waveLengthShrinkRate * vecIndex;
	return P5.Vector.add(vec, new P5.Vector(xIncrement, 0));
};

export const calcTargetVecArray = (targetVecArray, params, status) => {
	const curryArray_stretched = targetVecArray.map((vec, vecIndex) => calcStretchedVec(vec, vecIndex));
	const stretchedVecArray = curryArray_stretched.map(func => func(params));
	const curryArray_shrinked = targetVecArray.map((vec, vecIndex) => calcShrinkedVec(vec, vecIndex));
	const shrinkedArray = curryArray_shrinked.map(func => func(params));
	if (status == 'stretch') return stretchedVecArray;
	if (status == 'shrink') return shrinkedArray;
};

export const calcCurrentVec = (currentVec, vecIndex) => (params, targetVecArray) => {
	const easingFactor = params.easingFactorMax * Math.pow(params.easingFactorReducRate, (vecIndex + 1));
	const diffVec = P5.Vector.sub(targetVecArray[vecIndex]);
	const displacementVec = P5.Vector.mult(diffVec, easingFactor);
	return P5.Vector.add(currentVec, displacementVec);
};

export const calcCurrentVecArray = (currentVecArray, params, targetVecArray) => {
	const curryArray = currentVecArray.map((currentVec, vecIndex) => calcCurrentVec(currentVec, vecIndex));
	return curryArray.map(func => func(params, targetVecArray));
};

export const calcUpdate = (snake) => (params, frameCount) => {
	const updateSnake = {};
	updateSnake.status = calcUpdateStatus(frameCount);
	updateSnake.targetVecArray = calcTargetVecArray(snake.targetVecArray, params, updateSnake.status);
	updateSnake.currentVecArray = calcCurrentVecArray(snake.currentVecArray, params, updateSnake.targetVecArray);
	return updateSnake;
};
