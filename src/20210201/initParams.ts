'use strict';
export const initParams = (width: any) => {
    // const divSize = (width, height) => {
    // 	return (width < height) ? width : height;
    // };
    // const canvasSize = (windowSize) => {
    // 	return (windowSize < 500) ? windowSize : Math.round(windowSize * 0.6);
    // };
    const params = {};
    (params as any).windowSize = width;
    // params.canvasSize = canvasSize(params.windowSize);
    (params as any).canvasSize = width;
    return params;
};
