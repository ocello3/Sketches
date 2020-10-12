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

export const calcInitStretchedSnakePoint = (pointIndex) => (snakeIndex, params) => {
	const xPos_head = params.snakeLength;
	const pointInterval = params.snakeLength / params.drawPointNum;
	const xPos = xPos_head - pointInterval * pointIndex;
	const yPos_head = params.canvasSize / (params.snakeNum + 1) * (snakeIndex + 1);
	const currentSnakeHeight = params.snakeLeadHeight * Math.pow(params.snakeHeightReducRate, pointIndex);
	const snakeCurveAngleInterval = Math.PI * 2 * params.jointNum / params.drawPointNum;
	const currentSnakeCurveAngle = snakeCurveAngleInterval * pointIndex;
	const yPos = yPos_head + Math.sin(currentSnakeCurveAngle) * currentSnakeHeight;
	return new P5.Vector(xPos, yPos);
};

export const calcInitStretchVecArray = (snakeIndex, params) => {
	const curryArray = Array.from(Array(params.drawPointNum), (point, pointIndex) => calcInitStretchedSnakePoint(pointIndex));
	return curryArray.map(func => func(snakeIndex, params));
};

export const calcInit = (snakeIndex) => (params) => {
	const initSnake = {};
	initSnake.status = 'keep';
	initSnake.targetVecArray = calcInitStretchVecArray(snakeIndex, params);
	initSnake.currentVecArray = initSnake.targetVecArray;
	return initSnake;
};

