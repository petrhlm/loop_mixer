import React, { Component } from 'react';
import './App.css';
import Mixer from './Mixer';

class Sequencer extends Component {

    constructor() {
        super();

        this.state = {
            users: [{
                name: "peterholm",
                states: [],
                newestState: {
                    master: 0,
                    tracks: {
                        0: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 49,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        1: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 50,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        2: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 51,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        3: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 52,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        4: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 53,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        5: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 54,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        6: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 55,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        7: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 56,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        8: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 57,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        9: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 48,
                            lock: false,
                            mute: false,
                            play: true


                        },
                        10: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 81,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        11: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 87,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        12: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 69,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        13: {
                            xKnob: 11,
                            xLine: 30,
                            xMute: 20,
                            level: 348,
                            shortCutKey: 82,
                            lock: false,
                            mute: false,
                            play: true
                        },
                        // 14: {
                        //   xKnob: 11,
                        //   xLine: 30,
                        //   xMute: 20,
                        //   level: 348,
                        //   shortCutKey: 75,
                        //   lock: false,
                        //   mute: false,
                        //   play: true
                        // }
                    }
                }
            }]
        }
        this.pressAdd = this.pressAdd.bind(this);
        this.clearAllSequences = this.clearAllSequences.bind(this);
    }

    pressAdd(state) {
        console.log("add button pressed");
        console.log(state);
        let newArray = this.state.users[0].states;
        newArray.push(state);
        this.setState({
            users: [{
                name: this.state.users[0].name,
                states: newArray,
                activeState: this.state.users[0].activeState,
                newestState: state
            }]
        });
        console.log(this.state);
    }

    clearAllSequences(state) {
        this.setState({
            users: [{
                name: this.state.users[0].name,
                states: [],
                newestState: state
            }]
        });
        console.log("state");
        console.log(this.state);
    }

    render() {
        console.log("SEQUENCER COMPONENT REFRESH");
        return (
            <div>
                <div className="App">
                    <Mixer pressAdd={this.pressAdd} clearAllSequences={this.clearAllSequences} updateActiveState={this.updateActiveState} allStates={this.state.users[0].states} newestState={this.state.users[0].newestState} sequencerState={this.state} />
                </div>
            </div>
        )
    }
}

export default Sequencer;