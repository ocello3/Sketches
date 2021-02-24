'use strict';
export const getParams = (width: any) => {
    const params = {};
    (params as any).canvasSize = width;
    (params as any).statusSwitchDuration = {
        min: 5,
        max: 200
    };
    (params as any).snakeNum = 5;
    (params as any).waveNum = 3;
    (params as any).waveLength = 1 / 30 * (params as any).canvasSize;
    (params as any).headWaveAmp = (params as any).canvasSize / ((params as any).snakeNum + 1) * 0.8;
    (params as any).waveAmpReducRate = 0.7;
    (params as any).initEasingFactor = {
        min: 0.1,
        max: 0.5
    };
    (params as any).easingFactorReducRate = {
        min: 0.7,
        max: 1.0
    };
    (params as any).lineNum = 8;
    return params;
};
