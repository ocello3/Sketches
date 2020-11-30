'use strict';

import { initParams } from './initParams.js';

const params = initParams(400, 500);

test('windowSize', () => {
	expect(params.windowSize).toBe(400);
});

test('canvasSize', () => {
	expect(params.canvasSize).toBe(400);
});


