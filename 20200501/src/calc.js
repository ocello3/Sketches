import P5 from 'p5';

export const getParams = (windowSize) => {

	const calcMarginVec = (canvasSize) => {
		const x = (window.innerWidth - canvasSize) / 2;
		const y = (window.innerHeight - canvasSize) / 2;
		return new P5.Vector(x, y);
	};
	
	const params = {};
	params.canvasSize = (windowSize < 500) ? windowSize : windowSize * 0.6;
	params.marginVec = calcMarginVec(params.canvasSize);
	params.snakeCount = 5;
	params.pointCount = 18;
	params.waveCount = 3;
	params.waveLength = 6/8 * params.canvasSize;
	params.waveLengthShrinkRate = 0.7;
	params.totalLength = params.waveLength * params.waveCount;
	params.pointIntervalLength = params.totalLength / params.pointCount;
	params.angleIntervalLength = Math.PI * 2 * params.waveCount / params.pointCount;
	params.waveAmp = 6/8 * params.canvasSize;
	params.waveAmpReducRate = 0.8;
	params.easingFactorMax = 0.4;
	params.easingFactorReducRate = 0.65;
	return params;
};

export const initSnake = (index) => (params) => {

	const initStretchedVec = (vecIndex, params) => {
		const head_x = params.totalLength;
		const x = head_x - params.pointInterval * vecIndex;
		const head_y = params.canvasSize / (params.snakeCount + 1) * (vecIndex + 1);
		const currentWaveAmp = params.waveAmp * Math.pow(params.waveAmpReducRate, vecIndex);
		const y = head_y + Math.sin(params.angleInterval * vecIndex) * currentWaveAmp;
		return new P5.Vector(x, y);
	};

	const initStretchedVecArray = (params) => {
		const curryArray = Array.from(Array(params.pointCount), (vec, vecIndex) => initStretchedVec(vecIndex));
		return curryArray.map(func => func(params));
	};

	const initSnake = {};
	initSnake.status = 'keep';
	initSnake.targetVecArray = initStretchedVecArray(index, params);
	initSnake.currentVecArray = initStretchedVecArray(index, params);
	return initSnake;
};

export const updateSnake = (snake) => (params, frameCount) => {

	const updateStatus = (frameCount) => {
		if ((frameCount + 50) % 100 == 0) return 'stretch';
		if ((frameCount % 100)== 0) return 'shrink';
		return 'keep'
	};

	const calcStretchedVec = (vec, vecIndex) => (params) => {
		const xIncrement = params.pointIntervalLength * params.waveLengthShrinkRate * (params.pointCount - vecIndex - 1);
		return P5.Vector.add(vec, new P5.Vector(xIncrement, 0));
	};

	const calcShrinkedVec = (vec, vecIndex) => (params) => {
		const xIncrement = params.pointIntervalLength * params.waveLengthShrinkRate * vecIndex;
		return P5.Vector.add(vec, new P5.Vector(xIncrement, 0));
	};

	const calcTargetVecArray = (targetVecArray, params, status) => {
		const curryArray_stretched = targetVecArray.map((vec, vecIndex) => calcStretchedVec(vec, vecIndex));
		const stretchedVecArray = curryArray_stretched.map(func => func(params));
		const curryArray_shrinked = targetVecArray.map((vec, vecIndex) => calcShrinkedVec(vec, vecIndex));
		const shrinkedArray = curryArray_shrinked.map(func => func(params));
		if (status == 'stretch') return stretchedVecArray;
		if (status == 'shrink') return shrinkedArray;
	};

	const calcCurrentVec = (currentVec, vecIndex) => (params, targetVecArray) => {
		const easingFactor = params.easingFactorMax * Math.pow(params.easingFactorReducRate, (vecIndex + 1));
		const diffVec = P5.Vector.sub(targetVecArray[vecIndex]);
		const displacementVec = P5.Vector.mult(diffVec, easingFactor);
		return P5.Vector.add(currentVec, displacementVec);
	};

	const calcCurrentVecArray = (currentVecArray, params, targetVecArray) => {
		const curryArray = currentVecArray.map((currentVec, vecIndex) => calcCurrentVec(currentVec, vecIndex));
		return curryArray.map(func => func(params, targetVecArray));
	};

	const updateSnake = {};
	updateSnake.status = updateStatus(frameCount);
	updateSnake.targetVecArray = calcTargetVecArray(snake.targetVecArray, params, updateSnake.status);
	updateSnake.currentVecArray = calcCurrentVecArray(snake.currentVecArray, params, updateSnake.targetVecArray);
	return updateSnake;
};

