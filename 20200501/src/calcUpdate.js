import P5 from 'p5';

export const calcStatus = (params, frameCount) => {
	if (frameCount == 0) return 'keep';
	if (frameCount % (params.statusSwitchDuration * 2) == params.statusSwitchDuration) return 'stretch';
	if ((frameCount % (params.statusSwitchDuration * 2)) == 0) return 'shrink';
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

export const calcTargetPosArray = (currentTargetPosArray, params, status) => {
	if (status == 'keep') {
		return currentTargetPosArray;
	}
	if (status == 'shrink') {
		const curryArray_shrinked = currentTargetPosArray.map((currentTargetPos, pointIndex) => {
			return calcShrinkedSnakePos(currentTargetPos, pointIndex);
		});
		return curryArray_shrinked.map(func => func(params));
	}
	if (status == 'stretch') {
		const curryArray_stretched = currentTargetPosArray.map((targetPos, pointIndex, self) => {
			return calcStretchedSnakePos(targetPos, pointIndex, self);
		});
		return curryArray_stretched.map(func => func(params));
	}
};

export const calcCurrentPos = (currentCurrentPos, pointIndex) => (params, targetPosArray) => {
	const easingFactor = params.initEasingFactor * Math.pow(params.easingFactorReducRate, (pointIndex + 1));
	const diff = P5.Vector.sub(targetPosArray[pointIndex]);
	const displacementVec = P5.Vector.mult(diff, easingFactor);
	return P5.Vector.add(currentCurrentPos, displacementVec);
};

export const calcCurrentPosArray = (currentCurrentPosArray, params, targetPosArray) => {
	const curryArray = currentCurrentPosArray.map((point, pointIndex) => calcCurrentPos(point, pointIndex));
	return curryArray.map(func => func(params, targetPosArray));
};

export const calcUpdate = (currentSnake) => (params, frameCount) => {
	const updateSnake = {};
	updateSnake.status = calcStatus(params, frameCount);
	updateSnake.targetPosArray = calcTargetPosArray(currentSnake.targetPosArray, params, updateSnake.status);
	updateSnake.currentPosArray = calcCurrentPosArray(currentSnake.currentPosArray, params, updateSnake.targetPosArray);
	return updateSnake;
};
