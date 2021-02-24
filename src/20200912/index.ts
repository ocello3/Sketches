'use strict';
import * as calc from './calc.js';
export const sketch = (props: any) => {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 's' implicitly has an 'any' type.
    return (s) => {
        const canvasDiv = document.getElementById('canvas');
        // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
        const params = calc.getParams(canvasDiv.clientWidth);
        const colorPalette = [s.color(108, 160, 220), s.color(249, 228, 236), s.color(119, 221, 119)];
        let flags = Array.from(Array(3), (flag, index) => calc.initFlag(index));
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{}[]' is not assignable to type '((params: a... Remove this comment to see the full error message
        flags = flags.map(func => func(params));
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
            s.createCanvas(params.canvasSize, params.canvasSize);
            setPane(props);
            s.noLoop();
        };
        s.draw = () => {
            // calc
            flags = flags.map((flag, index) => calc.updateFlag(flag, index));
            // @ts-expect-error ts-migrate(2322) FIXME: Type '{}[]' is not assignable to type '((params: a... Remove this comment to see the full error message
            flags = flags.map(func => func(params));
            // draw background
            s.background(255);
            // draw bar
            s.push();
            s.stroke(0);
            s.strokeWeight(1);
            s.line(0, (flags[0] as any).startPos.y, params.canvasSize, (flags[0] as any).startPos.y);
            s.pop();
            // draw flags
            flags.forEach((flag, index) => {
                s.push();
                s.fill(colorPalette[index]);
                s.translate((flag as any).startPos.x, (flag as any).startPos.y);
                s.beginShape();
                s.vertex(0, 0);
                s.quadraticVertex((flag as any).leftCtrl.x, (flag as any).leftCtrl.y, (flag as any).leftAnchor.x, (flag as any).leftAnchor.y);
                s.quadraticVertex((flag as any).rightCtrl.x, (flag as any).rightCtrl.y, (flag as any).rightAnchor.x, (flag as any).rightAnchor.y);
                s.vertex((flag as any).endPos.x, (flag as any).endPos.y);
                s.endShape(s.CLOSE);
                s.pop();
            });
        };
    };
};
