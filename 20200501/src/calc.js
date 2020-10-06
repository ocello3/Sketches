import P5 from 'p5';

export const getParams = (windowSize) => {

	const calcMargin = (canvasSize) => {
		const x = (window.innerWidth - canvasSize) / 2;
		const y = (window.innerHeight - canvasSize) / 2;
		return new P5.Vector(x, y);
	};
	
	const params = {};
	params.canvasSize = (windowSize < 500) ? windowSize : windowSize * 0.6;
	params.margin = calcMargin(params.canvasSize);
	params.snakeCount = 5;
	params.pointCount = 18;
	params.waveCount = 3;
	params.waveLength = 6/8 * params.canvasSize;
	params.waveLengthShrinkRate = 0.7;
	params.totalLength = params.waveLength * params.waveCount;
	params.pointInterval = params.totalLength / params.pointCount;
	params.angleInterval = Math.PI * 2 * params.waveCount / params.pointCount;
	params.waveAmp = 6/8 * params.canvasSize;
	params.waveAmpReducRate = 0.8;
	params.easingFactorMax = 0.4;
	params.easingFactorReducRate = 0.65;
	return params;
};

export const initSnake = (index) => (params) => {

	const initStretchedPos = (posIndex, params) => {
		const xHeadPos = params.totalLength;
		const xPos = xHeadPos - params.pointInterval * posIndex;
		const yHeadPos = params.canvasSize / (params.snakeCount + 1) * (posIndex + 1);
		const currentWaveAmp = params.waveAmp * Math.pow(params.waveAmpReducRate, posIndex);
		const yPos = yHeadPos + Math.sin(params.angleInterval * posIndex) * currentWaveAmp;
		return new P5.Vector(xPos, yPos);
	};

	const initStretchedPosArray = (params) => {
		const funcArray = Array.from(Array(params.pointCount), (pos, posIndex) => initStretchedPos(posIndex));
		return funcArray.map(func => func(params));
	};

	const initSnake = {};
	initSnake.status = 'keep';
	initSnake.targetPosArray = initStretchedPosArray(index, params);
	initSnake.currentPosArray = initStretchedPosArray(index, params);
	return initSnake;
};

export const updateSnake = (snake, index) => (params, frameCount) => {

	const updateStatus = (frameCount) => {
		if ((frameCount + 50) % 100 == 0) return 'stretch';
		if ((frameCount % 100)== 0) return 'shrink';
		return 'keep'
	};

	const calcStretchedPos = (pos, posIndex) => (params) => {
		const xIncrement = params.pointInterval * params.waveLengthShrinkRate + (params.pointCount - posIndex - 1);
		return P5.Vector.add(pos, new P5.Vector(xIncrement, 0));
	};

	const calcShrinkedPos = (pos, posIndex) => (params) => {
		const xIncrement = params.pointInterval * params.waveLengthShrinkRate * posIndex;
		return P5.Vector.add(pos, new P5.Vector(xIncrement, 0));
	};

	const calcTargetPosArray = (prevTargetPosArray, params, status) => {
		const stretchedPosFuncArray = prevTargetPosArray.map((pos, posIndex) => calcStretchedPos(pos, posIndex));
		const stretchedPosArray = stretchedPosFuncArray.map(func => func(params));
		const shrinkedPosFuncArray = prevTargetPosArray.map((pos, posIndex) => calcShrinkedPos(pos, posIndex));
		const shrinkedPosArray = shrinkedPosFuncArray.map(func => func(params));
		if (status == 'stretch') return stretchedPosArray;
		if (status == 'shrink') return shrinkedPosArray;
	};

	const updateSnake = {};
	updateSnake.status = updateStatus(frameCount);
	updateSnake.targetPosArray = calcTargetPosArray(snake.targetPosArray, params, updateSnake.status);
	return updateSnake;
};

