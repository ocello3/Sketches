// "use strict";

import { s } from './index.js';

export const frame = () => {
	s.push();
	s.stroke(0);
	s.strokeWeight(3);
	s.fill(255);
	s.rect(0, 0, s.width, s.height);
	s.pop();
};
