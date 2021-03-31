import P5 from "p5";
import { createCoverPage } from "./createCoverPage";
import { props } from './types/props';

export const initSketch = (s: P5): void => {
  s.setup = () => {
    s.noCanvas();
		const props: props = { init: true };
    const coverPage = createCoverPage(props);
		props.coverPage = new P5(coverPage);
  };
};

new P5(initSketch);
