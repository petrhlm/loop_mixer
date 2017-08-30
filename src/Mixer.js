import React, { Component } from 'react';
import './App.css';
import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketch.js";
import Tone from "tone";
import axios from "axios";

const meter = new Tone.Meter("level");

const sound1 = new Tone.Player({
  "url": "001_kik.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
const sound2 = new Tone.Player({
  "url": "002_low_bas.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
const sound3 = new Tone.Player({
  "url": "003_hi_bas.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
const sound4 = new Tone.Player({
  "url": "004_synth1.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
const sound5 = new Tone.Player({
  "url": "005_synth2.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
const sound6 = new Tone.Player({
  "url": "006_synth3.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
const sound7 = new Tone.Player({
  "url": "007_synth4.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
const sound8 = new Tone.Player({
  "url": "008_synth5.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
const sound9 = new Tone.Player({
  "url": "009_closed_hihat.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
const sound10 = new Tone.Player({
  "url": "010_steady_bas.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
const sound11 = new Tone.Player({
  "url": "011_snare.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
const sound12 = new Tone.Player({
  "url": "012_more_hihat.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
// const sound13 = new Tone.Player({
//   "url": "013_cymbal.mp3",
//   "loop": "true",
//   "loopStart": "0",
//   "loopEnd": "16.69",
//   "volume": -60
// }).connect(meter).toMaster();
const sound14 = new Tone.Player({
  "url": "014_synth6.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();
const sound15 = new Tone.Player({
  "url": "015_synth7.mp3",
  "loop": "true",
  "loopStart": "0",
  "loopEnd": "16.69",
  "volume": -60
}).connect(meter).toMaster();

const players = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound14, sound15]

const loopLength = Number(sound1.loopEnd);
const loopLengthInMilliseconds = Number(sound1.loopEnd) * 1000;
console.log(loopLength);
console.log(loopLengthInMilliseconds);

var timeouts = [];

var activeState;

class Mixer extends Component {

  constructor(props) {
    super(props);

    this.state = this.props.newestState;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onLineTouch = this.onLineTouch.bind(this);
    this.onKnobClick = this.onKnobClick.bind(this);
    this.clickMute = this.clickMute.bind(this);
    this.saveState = this.saveState.bind(this);
    this.loadState = this.loadState.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.pressStop = this.pressStop.bind(this);
    this.pressPlay = this.pressPlay.bind(this);
    this.pressMuteAll = this.pressMuteAll.bind(this);
    this.pressUnMuteAll = this.pressUnMuteAll.bind(this);
    this.pressLockAll = this.pressLockAll.bind(this);
    this.pressUnLockAll = this.pressUnLockAll.bind(this);
    this.resetSequencer = this.resetSequencer.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentDidMount() {
    Tone.Buffer.on("load", () => {
      for (var i = 0; i < players.length; i++) {
        players[i].start();
      }
    });
    setInterval(() => {
      this.setState({
        master: meter.value,
        tracks: this.state.tracks
      })
    }, 75)
  }

  handleKeyPress(event) {
    for (var i = 0; i < players.length; i++) {
      if (event.keyCode === this.state.tracks[i].shortCutKey) {
        if (this.state.tracks[i].mute === false) {
          players[i].mute = true;
          this.setState({
            master: meter.value,
            tracks: {
              ...this.state.tracks,
              [i]: {
                xKnob: 11,
                xLine: 30,
                xMute: 20,
                level: this.state.tracks[i].level,
                shortCutKey: this.state.tracks[i].shortCutKey,
                lock: this.state.tracks[i].lock,
                mute: true,
                play: this.state.tracks[i].play
              }
            }
          });
        }
        else if (this.state.tracks[i].mute === true) {
          if (event.keyCode === this.state.tracks[i].shortCutKey) {
            players[i].mute = false;
            this.setState({
              master: meter.value,
              tracks: {
                ...this.state.tracks,
                [i]: {
                  xKnob: 11,
                  xLine: 30,
                  xMute: 20,
                  level: this.state.tracks[i].level,
                  shortCutKey: this.state.tracks[i].shortCutKey,
                  lock: this.state.tracks[i].lock,
                  mute: false,
                  play: this.state.tracks[i].play
                }
              }
            });
          }
          let difference = Math.floor((100 - (this.state.tracks[i].level - 2) / 3.46));
          players[i].volume.value = difference - 60;
        }
      }
    }
  }

  onKnobClick(i) {
    console.log("onKnobClick function accessed");
    if (this.state.tracks[i].lock === false) {
      this.setState({
        master: meter.value,
        tracks: {
          ...this.state.tracks,
          [i]: {
            xKnob: 11,
            xLine: 30,
            xMute: 20,
            level: this.state.tracks[i].level,
            shortCutKey: this.state.tracks[i].shortCutKey,
            lock: true,
            mute: this.state.tracks[i].mute,
            play: this.state.tracks[i].play
          }
        }
      });
    }
    else if (this.state.tracks[i].lock === true) {
      this.setState({
        master: meter.value,
        tracks: {
          ...this.state.tracks,
          [i]: {
            xKnob: 11,
            xLine: 30,
            xMute: 20,
            level: this.state.tracks[i].level,
            shortCutKey: this.state.tracks[i].shortCutKey,
            lock: false,
            mute: this.state.tracks[i].mute,
            play: this.state.tracks[i].play
          }
        }
      });
    }
    console.log(this.state.tracks[i].lock);
    console.log(this.state.tracks[i].shortCutKey)
  }

  onLineTouch(event, i) {
    if (this.state.tracks[i].lock === true) {
      return
    }
    else {
      let oldShortCutKey = this.state.tracks[i].shortCutKey;
      let mouseLocation = event.pageY;
      if (this.state.tracks[i].mute === false) {
        let difference = Math.floor((100 - ((mouseLocation - 74) - 2) / 3.46));
        players[i].volume.value = difference - 60;
      }
      console.log(players[i].volume.value);
      console.log(this.state.tracks[i].level);
      this.setState({
        master: meter.value,
        tracks: {
          ...this.state.tracks,
          [i]: {
            xKnob: 11,
            xLine: 30,
            xMute: 20,
            level: mouseLocation - 74,
            shortCutKey: oldShortCutKey,
            lock: this.state.tracks[i].lock,
            mute: this.state.tracks[i].mute,
            play: this.state.tracks[i].play
          }
        }
      })
      if (this.state.tracks[i].level > 348 || mouseLocation > 416) {
        this.setState({
          master: meter.value,
          tracks: {
            ...this.state.tracks,
            [i]: {
              xKnob: 11,
              xLine: 30,
              xMute: 20,
              level: 348,
              shortCutKey: oldShortCutKey,
              lock: this.state.tracks[i].lock,
              mute: this.state.tracks[i].mute,
              play: this.state.tracks[i].play
            }
          }
        });
      }
      if (this.state.tracks[i].level < 2 || mouseLocation < 76) {
        this.setState({
          master: meter.value,
          tracks: {
            ...this.state.tracks,
            [i]: {
              xKnob: 11,
              xLine: 30,
              xMute: 20,
              level: 2,
              shortCutKey: oldShortCutKey,
              lock: this.state.tracks[i].lock,
              mute: this.state.tracks[i].mute,
              play: this.state.tracks[i].play
            }
          }
        });
      }
    }
  }

  onMouseMove(event, i) {
    if (this.state.tracks[i].lock === true) {
      return
    }
    else {
      let oldShortCutKey = this.state.tracks[i].shortCutKey
      let mouseLocation = event.pageY;
      if (this.state.tracks[i].mute === false) {
        let difference = Math.floor((100 - (this.state.tracks[i].level - 2) / 3.46));
        players[i].volume.value = difference - 60;
      }
      console.log(players[i].volume.value);
      console.log(this.state.tracks[i].level);
      this.setState({
        master: meter.value,
        tracks: {
          ...this.state.tracks,
          [i]: {
            xKnob: 11,
            xLine: 30,
            xMute: 20,
            level: mouseLocation - 74,
            shortCutKey: oldShortCutKey,
            lock: this.state.tracks[i].lock,
            mute: this.state.tracks[i].mute,
            play: this.state.tracks[i].play
          }
        }
      });
      if (this.state.tracks[i].level > 348 || mouseLocation > 416) {
        this.setState({
          master: meter.value,
          tracks: {
            ...this.state.tracks,
            [i]: {
              xKnob: 11,
              xLine: 30,
              xMute: 20,
              level: 348,
              shortCutKey: oldShortCutKey,
              lock: this.state.tracks[i].lock,
              mute: this.state.tracks[i].mute,
              play: this.state.tracks[i].play
            }
          }
        });
      }
      if (this.state.tracks[i].level < 2 || mouseLocation < 76) {
        this.setState({
          master: meter.value,
          tracks: {
            ...this.state.tracks,
            [i]: {
              xKnob: 11,
              xLine: 30,
              xMute: 20,
              level: 2,
              shortCutKey: oldShortCutKey,
              lock: this.state.tracks[i].lock,
              mute: this.state.tracks[i].mute,
              play: this.state.tracks[i].play
            }
          }
        });
      }
    }
  }

  clickMute(i) {
    console.log("clickMute function accessed");
    if (players[i].mute === false) {
      players[i].mute = true;
      this.setState({
        master: meter.value,
        tracks: {
          ...this.state.tracks,
          [i]: {
            xKnob: 11,
            xLine: 30,
            xMute: 20,
            level: this.state.tracks[i].level,
            shortCutKey: this.state.tracks[i].shortCutKey,
            lock: this.state.tracks[i].lock,
            mute: true,
            play: this.state.tracks[i].play
          }
        }
      });
    }
    else if (players[i].mute === true) {
      players[i].mute = false;
      console.log("unmuted");
      console.log(this.state.tracks[i].level);
      this.setState({
        master: meter.value,
        tracks: {
          ...this.state.tracks,
          [i]: {
            xKnob: 11,
            xLine: 30,
            xMute: 20,
            level: this.state.tracks[i].level,
            shortCutKey: this.state.tracks[i].shortCutKey,
            lock: this.state.tracks[i].lock,
            mute: false,
            play: this.state.tracks[i].play
          }
        }
      });
      let difference = Math.floor((100 - (this.state.tracks[i].level - 2) / 3.46));
      players[i].volume.value = difference - 60;
    }
    console.log(this.state.tracks[i].mute);
  }

  saveState() {
    console.log("saveState function accessed");
    let myState = this.state;
    axios.post("http://localhost:8080/levels", myState)
      .then(function (response) {
        console.log("data sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  loadState() {
    console.log("loadState function accessed");
    // console.log(myState);
    axios.get("http://localhost:8080/levels")
      .then((result) => {
        console.log("get method working in front");
        console.log(result.data);
        this.setState(result.data);
        console.log(this.state);
        for (var i = 0; i < players.length; i++) {
          let difference = Math.floor((100 - (this.state.tracks[i].level - 2) / 3.46));
          players[i].volume.value = difference - 60;
          if (this.state.tracks[i].mute === true) {
            players[i].mute = true;
          }
          if (players[i].state === "stopped") {
            this.setState(() => {
              let newState = {
                master: meter.value, tracks: {}
              };
              players.forEach((player, i) => {
                newState.tracks[i] = {
                  xKnob: 11,
                  xLine: 30,
                  xMute: 20,
                  level: this.state.tracks[i].level,
                  shortCutKey: this.state.tracks[i].shortCutKey,
                  lock: this.state.tracks[i].lock,
                  mute: this.state.tracks[i].mute,
                  play: false
                }
              });
              return newState
            })
          }
        }
      })
      .then(() => {
        this.setState(this.state);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }

  changeImage(id, source) {
    document.getElementById(id).src = source;
  }

  pressStop() {
    activeState = null;
    players.forEach((player, i) => {
      player.stop();
    })
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
    players.forEach((player, i) => {
      if (this.state.tracks[i].play === true) {
        this.setState(() => {
          let newState = {
            master: meter.value, tracks: {}
          };
          players.forEach((player, i) => {
            newState.tracks[i] = {
              xKnob: 11,
              xLine: 30,
              xMute: 20,
              level: this.state.tracks[i].level,
              shortCutKey: this.state.tracks[i].shortCutKey,
              lock: this.state.tracks[i].lock,
              mute: this.state.tracks[i].mute,
              play: false
            }
          });
          return newState
        })
      }
    })
    activeState = null;
    this.setState(this.state);
  }

  pressPlay() {
    console.log("pressPlay function accessed");
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
    players.forEach((player, i) => {
      let playerState = player.state;
      console.log(playerState);
      if (playerState === "started") {
        return
      }
      else {
        player.start();
        if (player.loop === false) {
          player.loopStart = 0;
          player.loopEnd = 16.69
        }
      }
    });
    players.forEach((player, i) => {
      if (this.state.tracks[i].play === false) {
        this.setState(() => {
          let newState = {
            master: meter.value, tracks: {}
          };
          players.forEach((player, i) => {
            newState.tracks[i] = {
              xKnob: 11,
              xLine: 30,
              xMute: 20,
              level: this.state.tracks[i].level,
              shortCutKey: this.state.tracks[i].shortCutKey,
              lock: this.state.tracks[i].lock,
              mute: this.state.tracks[i].mute,
              play: true
            }
          });
          return newState
        })
      }
    })
    activeState = null;
    this.setState(this.state);
  }

  pressMuteAll() {
    console.log("muteAll pressed");
    this.setState(() => {
      let newState = {
        master: meter.value, tracks: {}
      };
      players.forEach((player, i) => {
        newState.tracks[i] = {
          xKnob: 11,
          xLine: 30,
          xMute: 20,
          level: this.state.tracks[i].level,
          shortCutKey: this.state.tracks[i].shortCutKey,
          lock: this.state.tracks[i].lock,
          mute: true,
          play: this.state.tracks[i].play
        }
      });
      return newState
    })
    console.log(this.state);
    players.forEach((player, i) => {
      player.mute = true;
    });
  }

  pressUnMuteAll() {
    console.log("unMuteAll pressed");
    for (var i = 0; i < players.length; i++) {
      let difference = Math.floor((100 - (this.state.tracks[i].level - 2) / 3.46));
      players[i].volume.value = difference - 60;
    }
    this.setState(() => {
      let newState = {
        master: meter.value, tracks: {}
      };
      players.forEach((player, i) => {
        newState.tracks[i] = {
          xKnob: 11,
          xLine: 30,
          xMute: 20,
          level: this.state.tracks[i].level,
          shortCutKey: this.state.tracks[i].shortCutKey,
          lock: this.state.tracks[i].lock,
          mute: false,
          play: this.state.tracks[i].play
        }
      });
      return newState
    })
    console.log(this.state);
    players.forEach((player, i) => {
      player.mute = false;
    });
  }

  pressLockAll() {
    console.log("lockAll pressed");
    this.setState(() => {
      let newState = {
        master: meter.value, tracks: {}
      };
      players.forEach((player, i) => {
        newState.tracks[i] = {
          xKnob: 11,
          xLine: 30,
          xMute: 20,
          level: this.state.tracks[i].level,
          shortCutKey: this.state.tracks[i].shortCutKey,
          lock: true,
          mute: this.state.tracks[i].mute,
          play: this.state.tracks[i].play
        }
      });
      return newState
    })
  }

  pressUnLockAll() {
    console.log("unLockAll pressed");
    this.setState(() => {
      let newState = {
        master: meter.value, tracks: {}
      };
      players.forEach((player, i) => {
        newState.tracks[i] = {
          xKnob: 11,
          xLine: 30,
          xMute: 20,
          level: this.state.tracks[i].level,
          shortCutKey: this.state.tracks[i].shortCutKey,
          lock: false,
          mute: this.state.tracks[i].mute,
          play: this.state.tracks[i].play
        }
      });
      return newState
    })
  }

  pressSequencerPlay() {
    console.log("sequencerPlay pressed");
    console.log(this.props);
    console.log(this.state);
    console.log(this.props.allStates);
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
    this.props.allStates.forEach((state, k) => {
      console.log("forEach function working");
      if (this.props.allStates[k]) {
        timeouts.push(setTimeout(
          () => {
            activeState = k;
            console.log(activeState);
            for (var i = 0; i < players.length; i++) {
              this.props.allStates[k].tracks[i].play === true ? players[i].start() : players[i].start()
              let difference = Math.floor((100 - (this.props.allStates[k].tracks[i].level - 2) / 3.46));
              players[i].volume.value = difference - 60;
              this.props.allStates[k].tracks[i].mute === true ? players[i].mute = true : players[i].mute = false;
              players[i].loop = true;
            };
            this.setState(state);
          }, 16690 * k
        ))
      }
    })
    timeouts.push(setTimeout(
      () => {
        console.log("activeState");
        console.log(activeState);
        activeState = null;
        console.log(activeState);
        for (var i = 0; i < players.length; i++) {
          players[i].stop();
        };
        this.setState(this.state);
      }, 16690 * this.props.allStates.length
    ))
  }

  resetSequencer() {

    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
    activeState = null;
    console.log(timeouts);
  }

  render() {
    return (
      <div className="App"  >
        <div className="p5-bg">
          <P5Wrapper sketch={sketch}
            tracks={this.state.tracks}
            kickVolume={players[0].volume.value}
            meterValue={this.state.master} />
        </div>
        {players.map((track, i) => {
          return (
            <svg key={i} id={"line" + i} className="line" height="520" width="60">
              <Line onMouseMove={
                (event) => {
                  this.onMouseMove(event, i);
                }}
                onLineTouch={(event) => {
                  this.onLineTouch(event, i);
                }}
                xLine={this.state.tracks[i].xLine} />
              <Knob
                className="handle"
                draggable="true"
                onTouchMove={
                  (event) => {
                    this.onLineTouch(event, i);
                  }}
                onMouseMove={
                  (event) => {
                    this.onMouseMove(event, i);
                  }}
                onClick={
                  () => {
                    this.onKnobClick(i);
                  }
                }
                y={this.state.tracks[i].level}
                xKnob={this.state.tracks[i].xKnob}
                lock={this.state.tracks[i].lock} />
              <text className="volume" textAnchor="middle" x="31" y="435" fontFamily="sans-serif" fontSize="12px" fill="grey">{(Math.floor(players[i].volume.value)) + " dB"}</text>
              <Mute xMute={this.state.tracks[i].xMute} muteStatus={this.state.tracks[i].mute} onClick={() => { this.clickMute(i); }} />
              <text className="muteShortCut mute" textAnchor="middle" x="29" y="470" fontFamily="sans-serif" fontSize="16px" fill="grey" onClick={() => { this.clickMute(i) }} >{String.fromCharCode(this.state.tracks[i].shortCutKey)}</text>
            </svg>
          )
        })}
        <div className="buttons">
          <img id="lockAll" className="lockAll" src="lock_all.png" alt="lock all" onClick={() => { this.pressLockAll(); }} onMouseEnter={() => { this.changeImage("lockAll", "lock_all_w.png") }} onMouseLeave={() => { this.changeImage("lockAll", "lock_all.png") }} />
          <img id="unLockAll" className="unLockAll" src="unlock_all.png" alt="unlock all" onClick={() => { this.pressUnLockAll(); }} onMouseEnter={() => { this.changeImage("unLockAll", "unlock_all_w.png") }} onMouseLeave={() => { this.changeImage("unLockAll", "unlock_all.png") }} />
          <img id="muteAll" className="muteAll" src="mute_all.png" alt="mute all" onClick={() => { this.pressMuteAll(); }} onMouseEnter={() => { this.changeImage("muteAll", "mute_all_w.png") }} onMouseLeave={() => { this.changeImage("muteAll", "mute_all.png") }} />
          <img id="unMuteAll" className="unMuteAll" src="unmute_all.png" alt="unmute all" onClick={() => { this.pressUnMuteAll(); }} onMouseEnter={() => { this.changeImage("unMuteAll", "unmute_all_w.png") }} onMouseLeave={() => { this.changeImage("unMuteAll", "unmute_all.png") }} />
          {/* <img id="save" className="save" src="save.png" alt="save" onClick={() => { this.saveState(); }} onMouseEnter={() => { this.changeImage("save", "save_w.png") }} onMouseLeave={() => { this.changeImage("save", "save.png") }} />
          <img id="load" className="load" src="load.png" alt="load" onClick={() => { this.loadState(); }} onMouseEnter={() => { this.changeImage("load", "load_w.png") }} onMouseLeave={() => { this.changeImage("load", "load.png") }} /> */}
          <br />
          <img id="play" className="play" src="play.png" alt="play" onClick={() => { this.pressPlay(); }} onMouseEnter={() => { this.changeImage("play", "play_w.png") }} onMouseLeave={() => { this.changeImage("play", "play.png") }} />
          <img id="stop" className="stop" src="stop.png" alt="stop" onClick={() => { this.pressStop(); }} onMouseEnter={() => { this.changeImage("stop", "stop_w.png") }} onMouseLeave={() => { this.changeImage("stop", "stop.png") }} />
          <br />
          <img id="add"
            className="add"
            src="add.png"
            alt="add"
            onClick={() => {
              this.props.pressAdd(this.state);
              this.resetSequencer();
            }}
            onMouseEnter={() => { this.changeImage("add", "add_w.png") }}
            onMouseLeave={() => { this.changeImage("add", "add.png") }} />
        </div>
        <div className="sequencer">
          <img id ="sequence_" className={this.props.allStates[0] === undefined ? "sequencer-hidden" : null} src="sequence_.png" alt="sequencer:" />
          <br  className={this.props.allStates[0] === undefined ? "sequencer-hidden" : null}  />
          <img id="play-seq"
            className={this.props.allStates[0] === undefined ? "sequencer-hidden" : "sequencer-play"}
            src="play.png"
            alt="play sequence"
            onClick={() => {
              this.pressSequencerPlay();
            }}
            onMouseEnter={() => { this.changeImage("play-seq", "play_w.png") }}
            onMouseLeave={() => { this.changeImage("play-seq", "play.png") }} />
          {this.props.allStates.map((elem, i) => {
            return (
              <h2 key={i} className={i === activeState ? "sequenced-items activeState condemed-blink-effect" : "sequenced-items"}>{(i + 1)}</h2>
            )
          })}
          <br className={this.props.allStates[0] === undefined ? "sequencer-hidden" : null} />
          <img id="clear" className={this.props.allStates[0] === undefined ? "sequencer-hidden" : "clear"} src="clear_.png" alt="clear" onClick={() => { 
                                                                                                                    this.props.clearAllSequences(this.state);
                                                                                                                    this.resetSequencer(); }} onMouseEnter={() => { this.changeImage("clear", "clear_w.png") }} onMouseLeave={() => { this.changeImage("clear", "clear_.png") }}  />
        </div>
      </div>
    );
  }
}

class Line extends Component {
  render() {
    return (
      <line onMouseMove={this.props.onLineTouch} x1={this.props.xLine} y1="0" x2={this.props.xLine} y2="400" stroke="rgb(70,70,70)" strokeWidth="39" />
    )
  }
}

class Knob extends Component {
  render() {
    return (
      <rect draggable="true" className={this.props.lock === true ? "knob-lock" : "knob-unlock"} onClick={this.props.onClick} onMouseMove={this.props.onMouseMove} x={this.props.xKnob} y={this.props.y} width="38" height="52" rx="3" ry="3" fill={this.props.lock === true ? "red" : "grey"} strokeWidth="2" stroke="rgb(200,200,200)" />
    )
  }
}

class Mute extends Component {
  render() {
    return (
      <rect className="mute" onClick={this.props.onClick} onKeyPress={this.handleKeyPress} x={this.props.xMute} y="450" width="20" height="30" rx="3" ry="3" fill={this.props.muteStatus === false ? "white" : "red"} strokeWidth="2" stroke="rgb(35,35,35)" />
    )
  }
}

export default Mixer;