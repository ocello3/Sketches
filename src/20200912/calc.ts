import P5 from 'p5';
import { flag } from './flag';

export interface params {
	canvasSize: number;
	margin: { x: number, y: number };
	flagCount: number;
	ctrlInitAngles: number[];
	anchorInitAngles: number[];
	ctrlAngleIncs: number[];
	ctrlMaxes: number[];
	anchorMaxes: number[];
	anchorAngleIncs: number[];
	flagWidth: number;
	flagHeight: number;
}

export const getParams = (width: number): params => {
	const canvasSize = width;
	return {
		canvasSize: canvasSize,
		margin: { x: (window.innerWidth - canvasSize) / 2, y: (window.innerHeight - canvasSize) / 2 },
		flagCount: 3,
		ctrlInitAngles: [0, Math.PI / 2, Math.PI],
		anchorInitAngles: [Math.PI / 4, Math.PI * 3 / 4, Math.PI * 5 / 4],
		ctrlAngleIncs: [Math.PI / 100, Math.PI / 60, Math.PI / 80],
		ctrlMaxes: [1 / 8 * canvasSize, 1 / 10 * canvasSize, 12 / 80 * canvasSize],
		anchorMaxes: [110 / 800 * canvasSize, 90 / 800 * canvasSize, 130 / 800 * canvasSize],
		anchorAngleIncs: [Math.PI / 100, Math.PI / 60, Math.PI / 70],
		flagWidth: 0.125 * canvasSize,
		flagHeight: 0.25 * canvasSize,
	};
};

export const initFlag = (index: number) => {
	return (params: params) => {
		const initStartPos = (params: params) => {
			const totalMargin = params.canvasSize - params.flagWidth * params.flagCount;
			const margin = totalMargin / (params.flagCount + 1);
			const xPos = margin * (index + 1) + params.flagWidth * index - 0.1 * params.canvasSize;
			const yPos = (params.canvasSize - params.flagHeight) / 2;
			return new P5.Vector().set(xPos, yPos);
		};
		const ctrlAngle = params.ctrlInitAngles[index];
		const anchorAngle = params.anchorInitAngles[index];
		const startPos = initStartPos(params);
		const endPos = new P5.Vector().set(params.flagWidth, 0);
		const leftCtrl = new P5.Vector().set(0, params.flagHeight);
		const leftAnchor = new P5.Vector().set(0, params.flagHeight);
		const rightCtrl = new P5.Vector().set(endPos.x, params.flagHeight);
		const rightAnchor = new P5.Vector().set(endPos.x, params.flagHeight);
		const initFlag: flag = {
			ctrlAngle: ctrlAngle,
			anchorAngle: anchorAngle,
			startPos: startPos,
			endPos: endPos,
			leftCtrl: leftCtrl,
			leftAnchor: leftAnchor,
			rightCtrl: rightCtrl,
			rightAnchor: rightAnchor,
		}
		return initFlag;
	}
}

export const updateFlag = (flag: flag, index: number) => (params: params) => {
	const updateLeftCtrl = (flag: flag, params: params, ctrlAngle: number) => {
		const diff = params.ctrlMaxes[index] * (Math.sin(ctrlAngle) + 1) / 2;
		return new P5.Vector().set(diff, params.flagHeight - diff);
	};
	const updateLeftAnchor = (flag: flag, index: number, anchorAngle: number) => {
		const diff = params.anchorMaxes[index] * (Math.sin(anchorAngle) + 1) / 2;
		return new P5.Vector().set(diff, params.flagHeight - diff);
	};
	const updateRightCtrl = (flag: flag, params: params, endPos: P5.Vector, ctrlAngle: number) => {
		const diff = params.ctrlMaxes[index] * (Math.sin(ctrlAngle) + 1) / 2;
		return new P5.Vector().set(endPos.x + diff, params.flagHeight - diff);
	};
	const updateRightAnchor = (flag: flag, params: params, endPos: P5.Vector, anchorAngle: number) => {
		const diff = params.anchorMaxes[index] * (Math.sin(anchorAngle) + 1) / 2;
		return new P5.Vector().set(endPos.x + diff, params.flagHeight - diff);
	};
	const ctrlAngle = flag.ctrlAngle + params.ctrlAngleIncs[index];
	const anchorAngle = flag.anchorAngle + params.anchorAngleIncs[index];
	const startPos = flag.startPos;
	const endPos = flag.endPos;
	const leftCtrl = updateLeftCtrl(flag, params, ctrlAngle);
	const leftAnchor = updateLeftAnchor(flag, index, anchorAngle);
	const rightCtrl = updateRightCtrl(flag, params, endPos, ctrlAngle);
	const rightAnchor = updateRightAnchor(flag, params, endPos, anchorAngle);
	const updateFlag: flag = {
		ctrlAngle: ctrlAngle,
		anchorAngle: anchorAngle,
		startPos: startPos,
		endPos: endPos,
		leftCtrl: leftCtrl,
		leftAnchor: leftAnchor,
		rightCtrl: rightCtrl,
		rightAnchor: rightAnchor,
	}
	return updateFlag;
};

