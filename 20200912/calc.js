import P5 from 'p5';

export const getParams = (width) => {
	
	const canvasSize = width;

	return {
		canvasSize: canvasSize,
		margin: {
			x: (window.innerWidth - canvasSize)/2,
			y: (window.innerHeight - canvasSize)/2,
		},
		flagCount: 3,
		ctrlInitAngles: [0, Math.PI/2, Math.PI],
		anchorInitAngles: [Math.PI/4, Math.PI*3/4, Math.PI*5/4],
		ctrlAngleIncs: [Math.PI/100, Math.PI/60, Math.PI/80],
		ctrlMaxes: [1/8*canvasSize, 1/10*canvasSize, 12/80*canvasSize],
		anchorMaxes: [110/800*canvasSize, 90/800*canvasSize, 130/800*canvasSize],
		anchorAngleIncs: [Math.PI/100, Math.PI/60, Math.PI/70],
		flagWidth: 0.125 * canvasSize,
		flagHeight: 0.25 * canvasSize,
	};
};

export const initFlag = (index) => (params) => {
	
	const initStartPos = (params) => {
		const totalMargin = params.canvasSize - params.flagWidth * params.flagCount;
		const margin = totalMargin / (params.flagCount + 1);
		const xPos = margin * (index + 1) + params.flagWidth * index - 0.1*params.canvasSize;
		const yPos = (params.canvasSize - params.flagHeight) / 2;
		return new P5.Vector(xPos, yPos);
	};
	
	const initFlag = {};
	initFlag.ctrlAngle = params.ctrlInitAngles[index];
	initFlag.anchorAngle = params.anchorInitAngles[index];
	initFlag.startPos = initStartPos(params);
	initFlag.endPos = new P5.Vector(params.flagWidth, 0);
	initFlag.leftCtrl = new P5.Vector(0, params.flagHeight);
	initFlag.leftAnchor = new P5.Vector(0, params.flagHeight);
	initFlag.rightCtrl = new P5.Vector(initFlag.endPos.x, params.flagHeight);
	initFlag.rightAnchor = new P5.Vector(initFlag.endPos.x, params.flagHeight);
	return initFlag;
};

export const updateFlag = (flag, index) => (params) => {

	const updateLeftCtrl = (flag, params, ctrlAngle) => {
		const diff = params.ctrlMaxes[index] * (Math.sin(ctrlAngle) + 1) / 2;
		return new P5.Vector(diff, params.flagHeight - diff);
	};

	const updateLeftAnchor = (flag, index, anchorAngle) => {
		const diff = params.anchorMaxes[index] * (Math.sin(anchorAngle) + 1) / 2;
		return new P5.Vector(diff, params.flagHeight - diff);
	};

	const updateRightCtrl = (flag, params, endPos, ctrlAngle) => {
		const diff = params.ctrlMaxes[index] * (Math.sin(ctrlAngle) + 1) / 2;
		return new P5.Vector(endPos.x + diff, params.flagHeight - diff);
	};

	const updateRightAnchor = (flag, params, endPos, anchorAngle) => {
		const diff = params.anchorMaxes[index] * (Math.sin(anchorAngle) + 1) / 2;
		return new P5.Vector(endPos.x + diff, params.flagHeight - diff);
	};
	
	const updateFlag = {};
	updateFlag.ctrlAngle = flag.ctrlAngle + params.ctrlAngleIncs[index];
	updateFlag.anchorAngle = flag.anchorAngle + params.anchorAngleIncs[index];
	updateFlag.startPos = flag.startPos;
	updateFlag.endPos = flag.endPos;
	updateFlag.leftCtrl = updateLeftCtrl(flag, params, updateFlag.ctrlAngle);
	updateFlag.leftAnchor = updateLeftAnchor(flag, index, updateFlag.anchorAngle);
	updateFlag.rightCtrl = updateRightCtrl(flag, params, updateFlag.endPos, updateFlag.ctrlAngle);
	updateFlag.rightAnchor = updateRightAnchor(flag, params, updateFlag.endPos, updateFlag.anchorAngle);
	return updateFlag;
};

