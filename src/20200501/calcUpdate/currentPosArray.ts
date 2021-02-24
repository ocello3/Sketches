import P5 from 'p5';
import { calcInitStretchedSnakePosArray } from '../calcInit.js';

export const calcCurrentPos = (currentCurrentPos: any, pointIndex: any) => (params: any, targetPosArray: any, initEasingFactor: any, easingFactorReducRate: any) => {
	const easingFactor = initEasingFactor * Math.pow(easingFactorReducRate, (pointIndex + 1));
	const diff = P5.Vector.sub(targetPosArray[pointIndex], currentCurrentPos);
	const displacementVec = P5.Vector.mult(diff, easingFactor);
	return P5.Vector.add(currentCurrentPos, displacementVec);
};

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'currentCurrentPosArray' implicitly has ... Remove this comment to see the full error message
export const calcCurrentPosArray = (currentCurrentPosArray, status, snakeIndex, params, targetPosArray, initEasingFactor, easingFactorReducRate) => {
	if (status == 'restart') return calcInitStretchedSnakePosArray(snakeIndex, params);
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'point' implicitly has an 'any' type.
	const curryArray = currentCurrentPosArray.map((point, pointIndex) => calcCurrentPos(point, pointIndex));
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'func' implicitly has an 'any' type.
	return curryArray.map(func => func(params, targetPosArray, initEasingFactor, easingFactorReducRate));
};

