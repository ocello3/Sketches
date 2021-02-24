'use strict';
import { initParams } from './initParams.js';
export const sketch = (props: any) => {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 's' implicitly has an 'any' type.
    return (s) => {
        const canvasDiv = document.getElementById('canvas');
        // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
        const params = initParams(canvasDiv.clientWidth);
        const drawFrame = () => {
            s.push();
            s.stroke('black');
            s.strokeWeight(1);
            s.noFill();
            s.rect(0, 0, (params as any).canvasSize, (params as any).canvasSize);
            s.pop();
        };
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
        const setPane = (props) => {
            const f1 = props.get('pane').addFolder({
                title: 'Control',
            });
            const stopButton = f1.addButton({
                title: 'start/stop',
            });
            stopButton.on('click', () => {
                s.isLooping() ? s.noLoop() : s.loop();
            });
        };
        s.setup = () => {
            s.createCanvas((params as any).canvasSize, (params as any).canvasSize);
            setPane(props);
            s.noLoop();
        };
        s.draw = () => {
            s.background(255);
            drawFrame();
            s.frameRate(2);
            s.textSize(50);
            s.text(s.frameCount, (params as any).canvasSize / 2, (params as any).canvasSize / 2);
        };
    };
};
