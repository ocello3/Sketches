'use strict';
export const initParams = (width: any) => {
    const params = {};
    (params as any).canvasSize = width;
    (params as any).frameRate = 0;
    (params as any).isStarted = false;
    (params as any).ballNum = 3;
    return params;
};
