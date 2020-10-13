import P5 from 'p5';

export const calcPointNum = (params) => {
	return params.waveNum * 4 + 1;
};

export const calcStretchedSnakeHeadPos = (snakeIndex, params) => {
	const x = 0;
	const y = params.canvasSize / (params.snakeNum + 1) * (snakeIndex + 1);
	return new P5.Vector(x, y);
};

export const calcStretchedSnakePosAngle = (pointIndex) => {
	return Math.PI / 2 * pointIndex;
};

export const calcWaveAmp = (pointIndex, params) => {
	return params.headWaveAmp * Math.pow(params.waveAmpReducRate, pointIndex);
};

export const calcInitStretchedSnakePos = (pointIndex) => (snakeIndex, params) => {
	const stretchedSnakeHeadPos = calcStretchedSnakeHeadPos(snakeIndex, params);
	const stretchedSnakePosAngle = calcStretchedSnakePosAngle(pointIndex);
	const waveAmp = calcWaveAmp(pointIndex, params);
	const x = stretchedSnakeHeadPos.x - params.waveLength / 2 * pointIndex;
	const y = stretchedSnakeHeadPos.y + waveAmp * Math.sin(stretchedSnakePosAngle);
	return new P5.Vector(x, y);
};

export const calcInitStretchedSnakePosArray = (snakeIndex, params) => {
	const pointNum = calcPointNum(params);
	const curryArray = Array.from(Array(pointNum), (point, pointIndex) => calcInitStretchedSnakePos(pointIndex));
	return curryArray.map(func => func(snakeIndex, params));
};

export const calcInit = (snakeIndex) => (params) => {
	const initSnake = {};
	initSnake.status = 'keep';
	initSnake.targetPosArray = calcInitStretchedSnakePosArray(snakeIndex, params);
	initSnake.currentPosArray = initSnake.targetVecArray;
	return initSnake;
};

