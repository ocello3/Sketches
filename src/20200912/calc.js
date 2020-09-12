"use strict";

import { s } from './sketch.js';

export const updateParams = (params) => {
	params.fc = s.frameCount;
	params.fps = s.frameRate();
};