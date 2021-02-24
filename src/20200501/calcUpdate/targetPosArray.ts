import P5 from 'p5';
import { calcInitStretchedSnakePosArray } from '../calcInit.js';

export const calcShrinkedSnakePos = (currentTargetPos: any, pointIndex: any) => (params: any) => {
	const xIncrement = params.waveLength / 4 * pointIndex;
// @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
	return P5.Vector.add(currentTargetPos, new P5.Vector(xIncrement, 0));
};

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'currentTargetPosArray' implicitly has a... Remove this comment to see the full error message
export const calcShrinkedSnakePosArray = (currentTargetPosArray, params) => {
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'currentTargetPos' implicitly has an 'an... Remove this comment to see the full error message
	const arrayFunc = currentTargetPosArray.map((currentTargetPos, pointIndex) => {
		return calcShrinkedSnakePos(currentTargetPos, pointIndex);
	});
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'func' implicitly has an 'any' type.
	return arrayFunc.map(func => func(params));
};

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'currentTargetPos' implicitly has an 'an... Remove this comment to see the full error message
export const calcStretchedSnakePos = (currentTargetPos, pointIndex, currentTargetPosArray) => (params) => {
	const xIncrement =  params.waveLength / 4 * (currentTargetPosArray.length - pointIndex - 1);
// @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
	return P5.Vector.add(currentTargetPos, new P5.Vector(xIncrement, 0));
};

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'currentTargetPosArray' implicitly has a... Remove this comment to see the full error message
export const calcStretchedSnakePosArray = (currentTargetPosArray, params) => {
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'currentTargetPos' implicitly has an 'an... Remove this comment to see the full error message
	const arrayFunc = currentTargetPosArray.map((currentTargetPos, pointIndex, self) => {
		return calcStretchedSnakePos(currentTargetPos, pointIndex, self);
	});
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'func' implicitly has an 'any' type.
	return arrayFunc.map(func => func(params));
};

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'currentTargetPosArray' implicitly has a... Remove this comment to see the full error message
export const calcTargetPosArray = (currentTargetPosArray, snakeIndex, params, status) => {
	if (status == 'restart') return calcInitStretchedSnakePosArray(snakeIndex, params);
	if (status == 'keep') return currentTargetPosArray;
	if (status == 'shrink') return calcShrinkedSnakePosArray(currentTargetPosArray, params);
	if (status == 'stretch') return calcStretchedSnakePosArray(currentTargetPosArray, params);
};

