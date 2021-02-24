'use strict';
export const getParams = (width: any) => {
    const params = {};
    (params as any).canvasSize = width;
    return params;
};
