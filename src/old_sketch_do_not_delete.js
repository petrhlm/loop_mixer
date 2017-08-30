export default function sketch(p) {

    //   let rotation = 0;
    // let kickVolume = 0;
    let meterValue = 0;
    // let bassVolume = 0;
    // let bassVolume2 = 0;
    // let faderSlice = 0;
    // let track1Level = 348 + 50;
    // let track2Level = 348 + 50;
    // let track3Level = 348 + 50;
    // let track4Level = 348 + 50;
    // let track5Level = 348 + 50;
    // let track6Level = 348 + 50;
    // let track7Level = 348 + 50;
    // let track8Level = 348 + 50;
    // let track9Level = 348 + 50;
    // let track10Level = 348 + 50;
    // let track11Level = 348 + 50;
    // let track12Level = 348 + 50;
    // let track13Level = 348 + 50;
    // let track14Level = 348 + 50;


    // var Y_AXIS = 1;
    // var X_AXIS = 2;
    // var b1, b2, c1, c2;

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(135, 135, 135);
        p.frameRate(30);
        // Define colors
        // b1 = p.color(255);
        // b2 = p.color(0);
        // c1 = color(204, 102, 0);
        // c2 = color(0, 102, 153);
    };

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

    var noiseScale = 0.06;

    p.draw = function draw() {
        //   p.ellipse(p.mouseX - (p.windowWidth/2), p.mouseY - (p.windowHeight/2), 60, 60);
        //   p.rotateX(p.frameCount * 0.01);
        //   p.rotateY(p.frameCount * 0.01);
        //   p.box(100, 100, 100);
        //   console.log(p.mouseX, p.mouseY);
        p.background(65);
        // if (p.mouseIsPressed) {
        //     p.fill(0);
        // } else {
        //     p.fill(255);
        // }
        // p.ellipse(p.mouseX, p.mouseY, totalLevels, totalLevels);
        meterValue = meterValue - 0.0001;
        for (var x = 0; x < p.width; x++) {
            let noiseVal = p.noise((p.mouseX + x) * noiseScale, p.mouseY * noiseScale);
            p.stroke(noiseVal * (meterValue * 10));
            p.line(x + noiseVal, p.mouseY + noiseVal * 150, x, p.height);
        }
        for (var y = 0; y < p.width; y++) {
            let noiseVal = p.noise((p.mouseX + y) * noiseScale, p.mouseY * noiseScale);
            p.stroke(noiseVal * (meterValue * 10));
            p.line(y + noiseVal, p.mouseY + noiseVal * 150, x, p.height);
        }

        // p.line(p.windowWidth / 2 - 390, track1Level + 20, (p.windowWidth / 14 * 1), p.height - p.height);
        // p.line(p.windowWidth / 2 - 330, track2Level + 20, (p.windowWidth / 14 * 2), 0);
        // p.line(p.windowWidth / 2 - 270, track3Level + 20, (p.windowWidth / 14 * 3), 0);
        // p.line(p.windowWidth / 2 - 210, track4Level + 20, (p.windowWidth / 14 * 4), 0);
        // p.line(p.windowWidth / 2 - 150, track5Level + 20, (p.windowWidth / 14 * 5), 0);
        // p.line(p.windowWidth / 2 - 90, track6Level + 20, (p.windowWidth / 14 * 6), 0);
        // p.line(p.windowWidth / 2 - 30, track7Level + 20, (p.windowWidth / 14 * 7), 0);
        // p.line(p.windowWidth / 2 + 30, track8Level + 20, (p.windowWidth / 14 * 8), 0);
        // p.line(p.windowWidth / 2 + 90, track9Level + 20, (p.windowWidth / 14 * 9), 0);
        // p.line(p.windowWidth / 2 + 150, track10Level + 20, (p.windowWidth / 14 * 10), 0);
        // p.line(p.windowWidth / 2 + 210, track11Level + 20, (p.windowWidth / 14 * 11), 0);
        // p.line(p.windowWidth / 2 + 270, track12Level + 20, (p.windowWidth / 14 * 12), 0);
        // p.line(p.windowWidth / 2 + 330, track13Level + 20, (p.windowWidth / 14 * 13), 0);
        // p.line(p.windowWidth / 2 + 390, track14Level + 20, (p.windowWidth / 14 * 14), 0);

        // var a = 0.0;
        // var inc = p.TWO_PI / 25.0;
        // for (var i = 0; i < 25; i++) {
        //     p.line(i * 4, 50, i * 4, 50 + p.sin(a) * 40.0);
        //     a = a + inc;
        // }
    }
    // };
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        // if (props.kickVolume) {
        //     console.log("sketch receiving new props");
        //     //   kickVolume = props.kickVolume * Math.PI / 180;
        //     kickVolume = 60 + props.kickVolume;
        // }
        if (props.meterValue) {
            meterValue = props.meterValue * 50;
        }
        console.log("props");
        console.log(props);
        if (props.meterValue !== meterValue) {
            meterValue = props.meterValue * 50;
        }
        // meterValue = props.meterValue;
        // if (props.bassVolume) {
        //     bassVolume = 60 + props.bassVolume;
        // }
        // if (props.bassVolume2) {
        //     bassVolume2 = 60 + props.bassVolume2;
        // }
        // if (props.tracks[0].level) {
        //     track1Level = props.tracks[0].level + 50;
        // }
        // if (props.tracks[1].level) {
        //     track2Level = props.tracks[1].level + 50;
        // }
        // if (props.tracks[2].level) {
        //     track3Level = props.tracks[2].level + 50;
        // }
        // if (props.tracks[3].level) {
        //     track4Level = props.tracks[3].level + 50;
        // }
        // if (props.tracks[4].level) {
        //     track5Level = props.tracks[4].level + 50;
        // }
        // if (props.tracks[5].level) {
        //     track6Level = props.tracks[5].level + 50;
        // }
        // if (props.tracks[6].level) {
        //     track7Level = props.tracks[6].level + 50;
        // }
        // if (props.tracks[7].level) {
        //     track8Level = props.tracks[7].level + 50;
        // }
        // if (props.tracks[8].level) {
        //     track9Level = props.tracks[8].level + 50;
        // }
        // if (props.tracks[9].level) {
        //     track10Level = props.tracks[9].level + 50;
        // }
        // if (props.tracks[10].level) {
        //     track11Level = props.tracks[10].level + 50;
        // }
        // if (props.tracks[11].level) {
        //     track12Level = props.tracks[11].level + 50;
        // }
        // if (props.tracks[12].level) {
        //     track13Level = props.tracks[12].level + 50;
        // }
        // if (props.tracks[13].level) {
        //     track14Level = props.tracks[13].level + 50;
        // }
    };

    //   p.draw = function () {
    // //     p.background(100);
    // //     p.noStroke();
    // //     p.push();
    // //     p.rotateY(rotation);
    // //     p.box(100);
    // //     p.pop();
    //   };
};