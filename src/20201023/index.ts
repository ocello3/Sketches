'use strict';
import { getParams } from './getParams';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './shader/shader.vert' or its c... Remove this comment to see the full error message
import vert from './shader/shader.vert';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './shader/shader.frag' or its c... Remove this comment to see the full error message
import frag from './shader/shader.frag';
export const sketch = (props: any) => {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 's' implicitly has an 'any' type.
    return (s) => {
        const canvasDiv = document.getElementById('canvas');
        // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
        const params = getParams(canvasDiv.clientWidth);
        // @ts-expect-error ts-migrate(7034) FIXME: Variable 'theShader' implicitly has type 'any' in ... Remove this comment to see the full error message
        let theShader;
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
            s.createCanvas((params as any).canvasSize, (params as any).canvasSize, s.WEBGL);
            s.noStroke();
            s.noLoop();
            theShader = s.createShader(vert, frag);
            setPane(props);
        };
        s.draw = () => {
            // draw background
            // s.background(255);
            /*
                // draw frame
        s.push();
        s.noFill();
        s.rect(0, 0, params.canvasSize, params.canvasSize);
        s.pop();
        */
            // shader
            // @ts-expect-error ts-migrate(7005) FIXME: Variable 'theShader' implicitly has an 'any' type.
            s.shader(theShader);
            // @ts-expect-error ts-migrate(7005) FIXME: Variable 'theShader' implicitly has an 'any' type.
            theShader.setUniform('u_resolution', [(params as any).canvasSize, (params as any).canvasSize]);
            // @ts-expect-error ts-migrate(7005) FIXME: Variable 'theShader' implicitly has an 'any' type.
            theShader.setUniform("u_mouse", s.map(s.mouseX, 0, (params as any).canvasSize, 0, 7));
            // @ts-expect-error ts-migrate(7005) FIXME: Variable 'theShader' implicitly has an 'any' type.
            theShader.setUniform('u_time', s.frameCount * 0.01);
            s.rect(0, 0, (params as any).windowSize, (params as any).windowSize);
        };
    };
};
