export default function sketch(p) {

    let meterValue = 0;

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(135, 135, 135);
        p.frameRate(30);
    };

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

    var noiseScale = 0.06;

    p.draw = function draw() {
        p.background(85,85,90);
        for (var x = 0; x < p.width; x++) {
            let noiseVal = p.noise((p.mouseX + x) * noiseScale, p.mouseY * noiseScale);
            p.stroke(noiseVal * (meterValue * 10));
            p.line(x + noiseVal, p.mouseY + noiseVal * 50, p.windowWidth/2, p.height);
        }
        meterValue = meterValue - 0.0001;
    }

    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.meterValue) {
            meterValue = props.meterValue * 50;
        }
    };
};