import P5 from 'p5';
export const calcStatusSwitchDuration = (params: any) => {
    const diff = params.statusSwitchDuration.max - params.statusSwitchDuration.min;
    const floatDuration = (Math.random() * diff) + params.statusSwitchDuration.min;
    return Math.floor(floatDuration);
};
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'params' implicitly has an 'any' type.
export const calcInitEasingFactor = (params) => {
    const diff = params.initEasingFactor.max - params.initEasingFactor.min;
    return (Math.random() * diff) + params.initEasingFactor.min;
};
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'params' implicitly has an 'any' type.
export const calcEasingFactorReducRate = (params) => {
    const diff = params.easingFactorReducRate.max - params.easingFactorReducRate.min;
    return (Math.random() * diff) + params.easingFactorReducRate.min;
};
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'params' implicitly has an 'any' type.
export const calcPointNum = (params) => {
    return params.waveNum * 4 + 1;
};
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'snakeIndex' implicitly has an 'any' typ... Remove this comment to see the full error message
export const calcStretchedSnakeHeadPos = (snakeIndex, params) => {
    const x = 0;
    const y = params.canvasSize / (params.snakeNum + 1) * (snakeIndex + 1);
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    return new P5.Vector(x, y);
};
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'pointIndex' implicitly has an 'any' typ... Remove this comment to see the full error message
export const calcStretchedSnakePosAngle = (pointIndex) => {
    return Math.PI / 2 * pointIndex;
};
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'pointIndex' implicitly has an 'any' typ... Remove this comment to see the full error message
export const calcWaveAmp = (pointIndex, params) => {
    return params.headWaveAmp * Math.pow(params.waveAmpReducRate, pointIndex);
};
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'pointIndex' implicitly has an 'any' typ... Remove this comment to see the full error message
export const calcInitStretchedSnakePos = (pointIndex) => (snakeIndex, params) => {
    const stretchedSnakeHeadPos = calcStretchedSnakeHeadPos(snakeIndex, params);
    const stretchedSnakePosAngle = calcStretchedSnakePosAngle(pointIndex);
    const waveAmp = calcWaveAmp(pointIndex, params);
    const x = stretchedSnakeHeadPos.x - (params.waveLength / 2 * pointIndex);
    const y = stretchedSnakeHeadPos.y + (waveAmp * Math.sin(stretchedSnakePosAngle));
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 0 arguments, but got 2.
    return new P5.Vector(x, y);
};
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'snakeIndex' implicitly has an 'any' typ... Remove this comment to see the full error message
export const calcInitStretchedSnakePosArray = (snakeIndex, params) => {
    const pointNum = calcPointNum(params);
    const curryArray = Array.from(Array(pointNum), (point, pointIndex) => calcInitStretchedSnakePos(pointIndex));
    return curryArray.map(func => func(snakeIndex, params));
};
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'snakeIndex' implicitly has an 'any' typ... Remove this comment to see the full error message
export const calcInit = (snakeIndex) => (params) => {
    const initSnake = {};
    (initSnake as any).statusSwitchDuration = calcStatusSwitchDuration(params);
    (initSnake as any).initEasingFactor = calcInitEasingFactor(params);
    (initSnake as any).easingFactorReducRate = calcEasingFactorReducRate(params);
    (initSnake as any).status = 'keep';
    (initSnake as any).frameCount = 1;
    (initSnake as any).targetPosArray = calcInitStretchedSnakePosArray(snakeIndex, params);
    (initSnake as any).currentPosArray = (initSnake as any).targetPosArray;
    return initSnake;
};
