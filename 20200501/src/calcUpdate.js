import P5 from 'p5';

export const calcStatus = (frameCount) => {
	if (frameCount == 0) return 'keep';
	if ((frameCount + 50) % 100 == 0) return 'stretch';
	if ((frameCount % 100)== 0) return 'shrink';
	return 'keep';
};

export const calcShrinkedSnakePos = (currentTargetPos, pointIndex) => (params) => {
	const xIncrement = params.waveLength / 4 * pointIndex;
	return P5.Vector.add(currentTargetPos, new P5.Vector(xIncrement, 0));
};

export const calcStretchedSnakePos = (currentTargetPos, pointIndex, currentTargetPosArray) => (params) => {
	const xIncrement =  params.waveLength / 4 * (currentTargetPosArray.length - pointIndex - 1);
	return P5.Vector.add(currentTargetPos, new P5.Vector(xIncrement, 0));
};

export const calcTargetPosArray = (targetPosArray, params, status) => {
	const curryArray_stretched = targetPosArray.map((targetPos, pointIndex) => calcStretchedSnakePos(targetPos, pointIndex));
	const stretchedSnakePosArray = curryArray_stretched.map(func => func(params));
	const curryArray_shrinked = targetPosArray.map((targetPos, pointIndex) => calcShrinkedSnakePos(targetPos, pointIndex));
	const shrinkedSnakePosArray = curryArray_shrinked.map(func => func(params));
	if (status == 'stretch') return stretchedSnakePosArray;
	if (status == 'shrink') return shrinkedSnakePosArray;
};

export const calcCurrentPos = (currentPos, pointIndex) => (params, targetPosArray) => {
	const easingFactor = params.easingFactorMax * Math.pow(params.easingFactorReducRate, (pointIndex + 1));
	const diffVec = P5.Vector.sub(targetPosArray[pointIndex]);
	const displacementVec = P5.Vector.mult(diffVec, easingFactor);
	return P5.Vector.add(currentPos, displacementVec);
};

export const calcCurrentPosArray = (currentPosArray, params, targetPosArray) => {
	const curryArray = currentPosArray.map((point, pointIndex) => calcCurrentPos(point, pointIndex));
	return curryArray.map(func => func(params, targetPosArray));
};

export const calcUpdate = (snake) => (params, frameCount) => {
	const updateSnake = {};
	updateSnake.status = calcStatus(frameCount);
	updateSnake.targetPosArray = calcTargetPosArray(snake.targetPosArray, params, updateSnake.status);
	updateSnake.currentPosArray = calcCurrentPosArray(snake.currentPosArray, params, updateSnake.targetPosArray);
	return updateSnake;
};
