import P5 from 'p5';
import { calcInitStretchedSnakePosArray } from '../calcInit';
import { params } from '../getParams';

export const calcShrinkedSnakePos = (currentTargetPos: P5.Vector, pointIndex: number) => (params: params): P5.Vector => {
	const xIncrement = params.waveLength / 4 * pointIndex;
	const increment = new P5.Vector();
	return P5.Vector.add(currentTargetPos, increment.set(xIncrement, 0));
};

export const calcShrinkedSnakePosArray = (currentTargetPosArray: P5.Vector[], params: params): P5.Vector[] => {
	return currentTargetPosArray.map((currentTargetPos, pointIndex) => calcShrinkedSnakePos(currentTargetPos, pointIndex)).map(func => func(params));
};

export const calcStretchedSnakePos = (currentTargetPos: P5.Vector, pointIndex: number, currentTargetPosArray: P5.Vector[]) => {
	return (params: params): P5.Vector => {
		const xIncrement =  params.waveLength / 4 * (currentTargetPosArray.length - pointIndex - 1);
		const increment = new P5.Vector();
		return P5.Vector.add(currentTargetPos, increment.set(xIncrement, 0));
	}
}

export const calcStretchedSnakePosArray = (currentTargetPosArray: P5.Vector[], params: params): P5.Vector[] => {
	return currentTargetPosArray.map((currentTargetPos, pointIndex, self) => calcStretchedSnakePos(currentTargetPos, pointIndex, self)).map(func => func(params));
};

export const calcTargetPosArray = (currentTargetPosArray: P5.Vector[], snakeIndex: number, params: params, status: string): P5.Vector[] => {
	if (status == 'restart') return calcInitStretchedSnakePosArray(snakeIndex, params);
	if (status == 'keep') return currentTargetPosArray;
	if (status == 'shrink') return calcShrinkedSnakePosArray(currentTargetPosArray, params);
	if (status == 'stretch') return calcStretchedSnakePosArray(currentTargetPosArray, params);
};

