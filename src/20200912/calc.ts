import P5 from 'p5';
export const getParams = (width: any) => {
    const canvasSize = width;
    return {
        canvasSize: canvasSize,
        margin: {
            x: (window.innerWidth - canvasSize) / 2,
            y: (window.innerHeight - canvasSize) / 2,
        },
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
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'index' implicitly has an 'any' type.
export const initFlag = (index) => (params) => {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'params' implicitly has an 'any' type.
    const initStartPos = (params) => {
        const totalMargin = params.canvasSize - params.flagWidth * params.flagCount;
        const margin = totalMargin / (params.flagCount + 1);
        const xPos = margin * (index + 1) + params.flagWidth * index - 0.1 * params.canvasSize;
        const yPos = (params.canvasSize - params.flagHeight) / 2;
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
        return new P5.Vector(xPos, yPos);
    };
    const initFlag = {};
    (initFlag as any).ctrlAngle = params.ctrlInitAngles[index];
    (initFlag as any).anchorAngle = params.anchorInitAngles[index];
    (initFlag as any).startPos = initStartPos(params);
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    (initFlag as any).endPos = new P5.Vector(params.flagWidth, 0);
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    (initFlag as any).leftCtrl = new P5.Vector(0, params.flagHeight);
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    (initFlag as any).leftAnchor = new P5.Vector(0, params.flagHeight);
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    (initFlag as any).rightCtrl = new P5.Vector((initFlag as any).endPos.x, params.flagHeight);
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    (initFlag as any).rightAnchor = new P5.Vector((initFlag as any).endPos.x, params.flagHeight);
    return initFlag;
};
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'flag' implicitly has an 'any' type.
export const updateFlag = (flag, index) => (params) => {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'flag' implicitly has an 'any' type.
    const updateLeftCtrl = (flag, params, ctrlAngle) => {
        const diff = params.ctrlMaxes[index] * (Math.sin(ctrlAngle) + 1) / 2;
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
        return new P5.Vector(diff, params.flagHeight - diff);
    };
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'flag' implicitly has an 'any' type.
    const updateLeftAnchor = (flag, index, anchorAngle) => {
        const diff = params.anchorMaxes[index] * (Math.sin(anchorAngle) + 1) / 2;
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
        return new P5.Vector(diff, params.flagHeight - diff);
    };
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'flag' implicitly has an 'any' type.
    const updateRightCtrl = (flag, params, endPos, ctrlAngle) => {
        const diff = params.ctrlMaxes[index] * (Math.sin(ctrlAngle) + 1) / 2;
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
        return new P5.Vector(endPos.x + diff, params.flagHeight - diff);
    };
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'flag' implicitly has an 'any' type.
    const updateRightAnchor = (flag, params, endPos, anchorAngle) => {
        const diff = params.anchorMaxes[index] * (Math.sin(anchorAngle) + 1) / 2;
        // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
        return new P5.Vector(endPos.x + diff, params.flagHeight - diff);
    };
    const updateFlag = {};
    (updateFlag as any).ctrlAngle = flag.ctrlAngle + params.ctrlAngleIncs[index];
    (updateFlag as any).anchorAngle = flag.anchorAngle + params.anchorAngleIncs[index];
    (updateFlag as any).startPos = flag.startPos;
    (updateFlag as any).endPos = flag.endPos;
    (updateFlag as any).leftCtrl = updateLeftCtrl(flag, params, (updateFlag as any).ctrlAngle);
    (updateFlag as any).leftAnchor = updateLeftAnchor(flag, index, (updateFlag as any).anchorAngle);
    (updateFlag as any).rightCtrl = updateRightCtrl(flag, params, (updateFlag as any).endPos, (updateFlag as any).ctrlAngle);
    (updateFlag as any).rightAnchor = updateRightAnchor(flag, params, (updateFlag as any).endPos, (updateFlag as any).anchorAngle);
    return updateFlag;
};
