import P5 from 'p5';

export const calcStatusSwitchDuration = (params) => {
	const diff = params.statusSwitchDuration.max - params.statusSwitchDuration.min;
	const floatDuration = (Math.random() * diff) + params.statusSwitchDuration.min;
	return Math.floor(floatDuration);
};

export const calcInitEasingFactor = (params) => {
	const diff = params.initEasingFactor.max - params.initEasingFactor.min;
	return (Math.random() * diff) + params.initEasingFactor.min;
};

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
	const x = stretchedSnakeHeadPos.x - (params.waveLength / 2 * pointIndex);
	const y = stretchedSnakeHeadPos.y + (waveAmp * Math.sin(stretchedSnakePosAngle));
	return new P5.Vector(x, y);
};

export const calcInitStretchedSnakePosArray = (snakeIndex, params) => {
	const pointNum = calcPointNum(params);
	const curryArray = Array.from(Array(pointNum), (point, pointIndex) => calcInitStretchedSnakePos(pointIndex));
	return curryArray.map(func => func(snakeIndex, params));
};

export const calcInit = (snakeIndex) => (params) => {
	const initSnake = {};
	initSnake.statusSwitchDuration = calcStatusSwitchDuration(params);
	initSnake.initEasingFactor = calcInitEasingFactor(params);
	initSnake.status = 'keep';
	initSnake.frameCount = 1;
	initSnake.targetPosArray = calcInitStretchedSnakePosArray(snakeIndex, params);
	initSnake.currentPosArray = initSnake.targetPosArray;
	return initSnake;
};

