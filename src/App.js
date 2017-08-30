import React, { Component } from 'react';
import './App.css';

const tracksArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

class App extends Component {
  constructor() {
    super();

    this.state = {
      tracks: {
        1: {
          xLine: 20,
          xKnob: 4,
          xMute: 10,
          level: 358,
          active: false
        }
      }
    }
    this.mouseMove = this.mouseMove.bind(this);
  }

  // mouseDown(event) {
  //   console.log("mouseDown function accessed");
  //   console.log(event.target.y.animVal.value);
  //   console.log(this.state.track.level);
  //   console.log(event.pageY);
  //   this.setState({
  //     track: {
  //       active: true,
  //       level: event.pageY - 8
  //     }
  //   });
  // }

  mouseMove(event, num) {

    console.log(this.state.tracks[1].level);
    console.log(num);
    this.setState({
      tracks: {
        1: {
          level: event.pageY - 16,
          xKnob: 4,
          xLine: 20,
          xMute: 10
        }
      }
    });
    if (this.state.tracks[1].level > 358 || event.pageY > 372) {
      this.setState({
        tracks: {
          1: {
            level: 358,
            xKnob: 4,
            xLine: 20,
            xMute: 10
          }
        }
      });
    }
    if (this.state.tracks[1].level < 2 || event.pageY < 16) {
      this.setState({
        tracks: {
          1: {
            level: 2,
            xKnob: 4,
            xLine: 20,
            xMute: 10
          }
        }
      });
    }
  }

  // mouseUp(event) {
  //   console.log("mouseUp function accessed");
  //   this.setState({
  //     track: {
  //       active: false,
  //       level: event.pageY - 8
  //     }
  //   });
  // }



  render() {
    return (
      <div className="App">
        <svg id="line1" className="line" height="520" width="880">
          <Line xLine={this.state.tracks[1].xLine + (0 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (0 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (0 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (1 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (1 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (1 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (2 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (2 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (2 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (3 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (3 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (3 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (4 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (4 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (4 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (5 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (5 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (5 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (6 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (6 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (6 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (7 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (7 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (7 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (8 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (8 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (8 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (9 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (9 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (9 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (10 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (10 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (10 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (11 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (11 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (11 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (12 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (12 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (12 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (13 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (13 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (13 * 60)} />

          <Line xLine={this.state.tracks[1].xLine + (14 * 60)} />
          <Knob onMouseMove={this.mouseMove} y={this.state.tracks[1].level} xKnob={this.state.tracks[1].xKnob + (14 * 60)} />
          <Mute xMute={this.state.tracks[1].xMute + (14 * 60)} />
          })}
        </svg>
      </div>
    );
  }
}

class Line extends Component {
  render() {
    return (
      <line x1={this.props.xLine} y1="0" x2={this.props.xLine} y2="400" stroke="rgb(0,0,0)" strokeWidth="2" />
    )
  }
}

class Knob extends Component {
  render() {
    return (
      <rect onMouseMove={this.props.onMouseMove} className="draggable" x={this.props.xKnob} y={this.props.y} width="32" height="42" fill="rgb(255,255,255)" strokeWidth="4" stroke="rgb(200,200,200)" />
    )
  }
}

class Mute extends Component {
  render() {
    return (
      <rect x={this.props.xMute} y="450" width="20" height="30" fill="rgb(255,255,255)" strokeWidth="2" stroke="rgb(35,35,35)" />
    )
  }
}

export default App;
