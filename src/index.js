import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sequencer from "./Sequencer";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Sequencer />, document.getElementById('something'));
registerServiceWorker();
