"use strict";

import { s } from './index.js';

export const updateParams = (params) => {
	params.fc = s.frameCount;
	params.fps = s.frameRate();
};
