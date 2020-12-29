'use strict';

import { initParams } from './initParams.js';

const params = initParams(400, 500); // width, height

test('windowSize is to be smaller length within width and height', () => {
	expect(params.windowSize).toBe(400);
});

test('canvasSize is to be windowSize if windowSize is smaller than 500', () => {
	expect(params.canvasSize).toBe(400);
});


