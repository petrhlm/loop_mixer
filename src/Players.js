import React, { Component } from 'react';
import Tone from "tone";
// import Sequencer from "./Sequencer";

class Players extends Component {

    constructor() {
        super();

        this.state = {
            loopSets: [
                [
                    "001_kik.mp3",
                    "002_low_bas.mp3",
                    "003_hi_bas.mp3",
                    "004_synth1.mp3",
                    "005_synth2.mp3",
                    "006_synth3.mp3",
                    "007_synth4.mp3",
                    "008_synth5.mp3",
                    "009_closed_hihat.mp3",
                    "010_steady_bas.mp3",
                    "011_snare.mp3",
                    "012_more_hihat",
                    // "013_cymbal",
                    "014_synth6.mp3",
                    "015_synth7.mp3"
                ]   
            ]
        }
    }

    render() {
        var players = [];

        for (var i = 0; i < this.state.loopSets[0].length; i++) {
            players.push(new Tone.Player({
                "url": this.state.loopSets[0][i],
                "loop": "true",
                "loopStart": "0",
                "loopEnd": "16.69",
                "volume": -60
            }))
        }

        const loopLength = Number(this.state.loopSets[0][0].loopEnd);
        const loopLengthInMilliseconds = Number(this.state.loopSets[0][0].loopEnd) * 1000;
        console.log(loopLength);
        console.log(loopLengthInMilliseconds);
        return(
            <div>
                <Sequencer />
                </div>
        )
    }
}

export default Players;