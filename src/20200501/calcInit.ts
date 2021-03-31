import P5 from 'p5';
import { params } from './getParams';
import { snake } from './snake';

export const calcStatusSwitchDuration = (params: params): number => {
	const diff = params.statusSwitchDuration.max - params.statusSwitchDuration.min;
	const floatDuration = (Math.random() * diff) + params.statusSwitchDuration.min;
	return Math.floor(floatDuration);
};

export const calcInitEasingFactor = (params: params): number => {
	const diff = params.initEasingFactor.max - params.initEasingFactor.min;
	return (Math.random() * diff) + params.initEasingFactor.min;
};

export const calcEasingFactorReducRate = (params: params):number => {
	const diff = params.easingFactorReducRate.max - params.easingFactorReducRate.min;
	return (Math.random() * diff) + params.easingFactorReducRate.min;
};

export const calcPointNum = (params: params): number => {
	return params.waveNum * 4 + 1;
};

export const calcStretchedSnakeHeadPos = (snakeIndex: number, params: params): P5.Vector => {
	const pos = new P5.Vector();
	const x = 0;
	const y = params.canvasSize / (params.snakeNum + 1) * (snakeIndex + 1);
	return pos.set(x, y);
};

export const calcStretchedSnakePosAngle = (pointIndex: number): number => {
	return Math.PI / 2 * pointIndex;
};

export const calcWaveAmp = (pointIndex: number, params: params): number => {
	return params.headWaveAmp * Math.pow(params.waveAmpReducRate, pointIndex);
};

export const calcInitStretchedSnakePos = (pointIndex: number) => (snakeIndex: number, params: params): P5.Vector => {
	const pos = new P5.Vector();
	const stretchedSnakeHeadPos = calcStretchedSnakeHeadPos(snakeIndex, params);
	const stretchedSnakePosAngle = calcStretchedSnakePosAngle(pointIndex);
	const waveAmp = calcWaveAmp(pointIndex, params);
	const x = stretchedSnakeHeadPos.x - (params.waveLength / 2 * pointIndex);
	const y = stretchedSnakeHeadPos.y + (waveAmp * Math.sin(stretchedSnakePosAngle));
	return pos.set(x, y);
};

export const calcInitStretchedSnakePosArray = (snakeIndex: number, params: params): P5.Vector[] => {
	const pointNum = calcPointNum(params);
	const curryArray = Array.from(Array(pointNum), (point, pointIndex) => calcInitStretchedSnakePos(pointIndex));
	return curryArray.map(func => func(snakeIndex, params));
};

export const calcInit = (snakeIndex: number) => {
	return (params: params): snake => {
		const statusSwitchDuration = calcStatusSwitchDuration(params);
		const initEasingFactor = calcInitEasingFactor(params);
		const easingFactorReducRate = calcEasingFactorReducRate(params);
		const targetPosArray = calcInitStretchedSnakePosArray(snakeIndex, params);
		const initSnake: snake = {
			statusSwitchDuration: statusSwitchDuration,
			initEasingFactor: initEasingFactor,
			easingFactorReducRate: easingFactorReducRate,
			status: 'keep',
			frameCount: 1,
			targetPosArray: targetPosArray,
			currentPosArray: targetPosArray,
		};
		return initSnake;
	}
};

