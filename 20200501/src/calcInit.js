import P5 from 'p5';

export const calcInitStretchedSnakePoint = (pointIndex) => (snakeIndex, params) => {
	const xPos_head = params.snakeLength;
	const xPos = xPos_head - params.pointInterval * pointIndex;
	const yPos_head = params.canvasSize / (params.snakeNum + 1) * (snakeIndex + 1);
	const currentSnakeHeight = params.snakeLeadHeight * Math.pow(params.snakeHeightReducRate, pointIndex);
	const snakeCurveAngleInterval = Math.PI * 2 * params.waveNum / params.pointNum;
	const currentSnakeCurveAngle = snakeCurveAngleInterval * pointIndex;
	const yPos = yPos_head + Math.sin(currentSnakeCurveAngle) * currentSnakeHeight;
	return new P5.Vector(xPos, yPos);
};

export const calcInitStretchVecArray = (snakeIndex, params) => {
	const curryArray = Array.from(Array(params.pointCount), (point, pointIndex) => calcInitStretchedSnakePoint(pointIndex));
	return curryArray.map(func => func(snakeIndex, params));
};

export const calcInit = (snakeIndex) => (params) => {
	const initSnake = {};
	initSnake.status = 'keep';
	initSnake.targetVecArray = calcInitStretchVecArray(snakeIndex, params);
	initSnake.currentVecArray = initSnake.targetVecArray;
	return initSnake;
};

