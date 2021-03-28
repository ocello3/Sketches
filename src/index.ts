import P5 from "p5";
import { createCoverPage } from "./createCoverPage";

export const initSketch = (s: P5): void => {
  s.setup = () => {
    s.noCanvas();
    const props = new Map();
    const coverPage = createCoverPage(props);
    props.set("coverPage", new P5(coverPage));
  };
};

new P5(initSketch);
