import P5 from 'p5';

export const calcShrinkedSnakePos = (currentTargetPos, pointIndex) => (params) => {
	const xIncrement = params.waveLength / 4 * pointIndex;
	return P5.Vector.add(currentTargetPos, new P5.Vector(xIncrement, 0));
};

export const calcShrinkedSnakePosArray = (currentTargetPosArray, params) => {
	const arrayFunc = currentTargetPosArray.map((currentTargetPos, pointIndex) => {
		return calcShrinkedSnakePos(currentTargetPos, pointIndex);
	});
	return arrayFunc.map(func => func(params));
};

export const calcStretchedSnakePos = (currentTargetPos, pointIndex, currentTargetPosArray) => (params) => {
	const xIncrement =  params.waveLength / 4 * (currentTargetPosArray.length - pointIndex - 1);
	return P5.Vector.add(currentTargetPos, new P5.Vector(xIncrement, 0));
};

export const calcStretchedSnakePosArray = (currentTargetPosArray, params) => {
	const arrayFunc = currentTargetPosArray.map((currentTargetPos, pointIndex, self) => {
		return calcStretchedSnakePos(currentTargetPos, pointIndex, self);
	});
	return arrayFunc.map(func => func(params));
};

export const calcTargetPosArray = (currentTargetPosArray, params, status) => {
	if (status == 'keep') return currentTargetPosArray;
	if (status == 'shrink') return calcShrinkedSnakePosArray(currentTargetPosArray, params);
	if (status == 'stretch') return calcStretchedSnakePosArray(currentTargetPosArray, params);
};

