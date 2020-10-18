import P5 from 'p5';
import { calcInitStretchedSnakePosArray } from '../calcInit.js';

export const calcCurrentPos = (currentCurrentPos, pointIndex) => (params, targetPosArray, initEasingFactor) => {
	const easingFactor = initEasingFactor * Math.pow(params.easingFactorReducRate, (pointIndex + 1));
	const diff = P5.Vector.sub(targetPosArray[pointIndex], currentCurrentPos);
	const displacementVec = P5.Vector.mult(diff, easingFactor);
	return P5.Vector.add(currentCurrentPos, displacementVec);
};

export const calcCurrentPosArray = (currentCurrentPosArray, status, snakeIndex, params, targetPosArray, initEasingFactor) => {
	if (status == 'restart') return calcInitStretchedSnakePosArray(snakeIndex, params);
	const curryArray = currentCurrentPosArray.map((point, pointIndex) => calcCurrentPos(point, pointIndex));
	return curryArray.map(func => func(params, targetPosArray, initEasingFactor));
};

