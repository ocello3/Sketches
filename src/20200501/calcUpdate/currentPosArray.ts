import P5 from 'p5';
import { calcInitStretchedSnakePosArray } from '../calcInit';
import { params } from '../getParams';

export const calcCurrentPos = (currentCurrentPos: P5.Vector, pointIndex: number) => (params: params, targetPosArray: P5.Vector[], initEasingFactor: number, easingFactorReducRate: number): P5.Vector => {
	const easingFactor = initEasingFactor * Math.pow(easingFactorReducRate, (pointIndex + 1));
	const diff = P5.Vector.sub(targetPosArray[pointIndex], currentCurrentPos);
	const displacementVec = P5.Vector.mult(diff, easingFactor);
	return P5.Vector.add(currentCurrentPos, displacementVec);
};

export const calcCurrentPosArray = (currentCurrentPosArray: P5.Vector[], status: string, snakeIndex: number, params: params, targetPosArray: P5.Vector[], initEasingFactor: number, easingFactorReducRate: number): P5.Vector[] => {
	if (status == 'restart') return calcInitStretchedSnakePosArray(snakeIndex, params);
	return currentCurrentPosArray.map((point: P5.Vector, pointIndex: number) => calcCurrentPos(point, pointIndex)).map(func => func(params, targetPosArray, initEasingFactor, easingFactorReducRate));
};

